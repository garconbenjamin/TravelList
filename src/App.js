import React, { useReducer, useEffect, useState } from "react";
import * as R from "ramda";
import { Provider } from "./context";
import TravelInfo from "./pages/TravelInfo";
import { Router, Route, Link } from "wouter";
import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";
const categories = [
  { id: 11, name: "養生溫泉", active: false },
  { id: 12, name: "單車遊蹤", active: false },
  { id: 13, name: "歷史建築", active: false },
  { id: 14, name: "宗教信仰", active: false },
  { id: 15, name: "藝文館所", active: false },
  { id: 18, name: "公共藝術", active: false },
  { id: 16, name: "戶外踏青", active: false },
  { id: 17, name: "藍色水路", active: false },
  { id: 19, name: "親子共遊", active: false },
  { id: 20, name: "北北基景點", active: false },
  { id: 23, name: "夜市商圈", active: false },
  { id: 24, name: "主題商街", active: false },
  { id: 25, name: "無障礙旅遊推薦景點", active: false }
];

const initState = { currentPage: 1, totalPage: 0, likedSpot: [], categories };
const todoReducer = (state, action) => {
  const { currentPage, totalPage, categories, likedSpot } = state;
  switch (action.type) {
    case "ADD_LIKE":
      const newItem = action.payload;
      return { ...state, likedSpot: [...likedSpot, newItem] };
    case "NEXT_PAGE":
      const newPage = currentPage + 1;
      return { ...state, currentPage: newPage };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initState);
  const { totalPage, currentPage, categories } = state;
  const [content, setContent] = useState([]);
  const globalState = { state, dispatch, content };
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      const result = await fetch(
        `https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${currentPage}`,
        {
          headers: {
            accept: "application/json"
          }
        }
      );
      const jsonObj = await result.json();
      const { data } = jsonObj;
      console.log("data", data);
      if (!ignore) {
        setContent([...content, ...data]);
      }
    };
    if (currentPage > totalPage) {
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [currentPage]);

  return (
    <Provider value={globalState}>
      <Router>
        <Route path="/">
          <Row>
            {content.map((ele, i) => {
              //prettier-ignore
              const {id,name,name_zh,open_status,introduction,open_time,zipcode,distric,address,tel,fax,email,months,nlat,elong,official_site,facebook,ticket,remind,staytime,modified,url,category,target,service,friendly,images,files,links} = ele;

              return (
                <Col md={3}>
                  <Link key={i} to={`/${id}`}>
                    <CardImgWrapper>
                      {images[0] ? (
                        <Card.Img variant="top" src={images[0].src} />
                      ) : null}
                    </CardImgWrapper>

                    {name || name_zh}
                    <ul>
                      <li>
                        <span>{open_time}</span>
                      </li>
                    </ul>
                  </Link>
                </Col>
              );
            })}
          </Row>
          <button
            onClick={() => {
              dispatch({ type: "NEXT_PAGE" });
            }}
          >
            Load more
          </button>
        </Route>
        <Route path="/:id">{params => <TravelInfo params={params} />}</Route>
      </Router>
    </Provider>
  );
};

export default App;
