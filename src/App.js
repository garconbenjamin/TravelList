import React, { useReducer, useEffect } from "react";
import * as R from "ramda";

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
const content = [];
const initState = { currentPage: 1, totalPage: 1, categories, content };
const todoReducer = (state, action) => {
  const { page, categories, content } = state;
  switch (action.type) {
    case "LOAD_MORE":
      let newKey = 1;
      if (state.list.length !== 0) {
        newKey = state.list[state.list.length - 1].listKey + 1;
      }
      return {
        ...state,
        list: [...state.list, { listKey: newKey, name: action.payload.name }]
      };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initState);
  const fetchData = async ({ cat = "", page = 1, lang = "zh-tw" }) => {
    const res = await fetch(
      `https://www.travel.taipei/open-api/${lang}/Attractions/All?${
        page ? `page=${page}` : ""
      }`
    );
  };
  useEffect(async () => {
    const res = await fetch(
      "https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1"
    );
    const jsonObj = await res.json();
  }, []);
  return <h1>hello</h1>;
};

export default App;
