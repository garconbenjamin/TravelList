import React, { useContext, useState, Fragment } from "react";
import context from "./../context";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";
import Swiper from "react-id-swiper";
import * as R from "ramda";

import { GoTrashcan, GoHeart } from "react-icons/go";
const monthsToZh = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "十一",
  "十二"
];
const TravelInfo = props => {
  const contextValue = useContext(context);
  const { content, dispatch, state } = contextValue;
  const { likedSpot } = state;
  const { id } = props.params;
  const dataInfo = content.find(ele => +ele.id === +id);
  const [introOpen, setIntroOpen] = useState(false);


  return (
    <Fragment>
      {dataInfo
        ? (() => {
            //prettier-ignore
            const {name,introduction,open_time,address,tel,email,months,nlat,elong,official_site,ticket,remind,target,service,images} = dataInfo;
            const geoPostion = [nlat, elong];
            const monthsArr = months.split(",");
            const monthText =
              monthsArr.length === 12
                ? "全年無休"
                : monthsArr
                    .sort((a, b) => a - b)
                    .map((m, idx) => monthsToZh[+m] + "月")
                    .join(" / ");

            return (
              <div id="travel-info">
                <Swiper
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                  }}
                >
                  {images ? (
                    images.map((ele, i) => (
                      <div key={i} className="slider-film">
                        <img src={ele.src} alt="" />
                      </div>
                    ))
                  ) : (
                    <div className="slider-film">No Picture</div>
                  )}
                </Swiper>
                <div className="info-text">
                  <div className="title">{name}</div>
                  {introduction ? (
                    <div className="intro">
                      <div className={`text-area ${introOpen ? "open" : ""}`}>
                        {introduction}
                      </div>
                      <div>
                        <button onClick={() => setIntroOpen(!introOpen)}>
                          {introOpen ? "-" : "+"}
                        </button>
                      </div>
                    </div>
                  ) : null}
                  <div className="detail-list">
                    <ul>
                      {address ? (
                        <li>
                          <span className="info-type">地址</span>
                          <span className="info">{address.split(" ")[1]}</span>
                        </li>
                      ) : null}
                      {tel ? (
                        <li>
                          <span className="info-type">電話</span>
                          <span className="info">{tel}</span>
                        </li>
                      ) : null}
                      {open_time ? (
                        <li>
                          <span className="info-type">開放時間</span>
                          <span className="info">{open_time}</span>
                        </li>
                      ) : null}
                      {email ? (
                        <li>
                          <span className="info-type">Email</span>
                          <span className="info">{email}</span>
                        </li>
                      ) : null}
                      {monthText ? (
                        <li>
                          <span className="info-type">開放月份</span>
                          <span className="info">{monthText}</span>
                        </li>
                      ) : null}
                      {ticket ? (
                        <li>
                          <span className="info-type">門票資訊</span>
                          <span className="info">{ticket}</span>
                        </li>
                      ) : null}
                      {remind ? (
                        <li>
                          <span className="info-type">注意事項</span>
                          <span className="info">{remind}</span>
                        </li>
                      ) : null}
                      {official_site ? (
                        <li>
                          <span className="info-type">官方網站</span>
                          <span className="info">
                            <a href={official_site} target="_blank">
                              {official_site}
                            </a>
                          </span>
                        </li>
                      ) : null}
                      {target.length ? (
                        <li>
                          <span className="info-type">適合族群</span>
                          <span className="info">
                            {target.map((t, i) => t.name)}
                          </span>
                        </li>
                      ) : null}
                      {service.length ? (
                        <li>
                          <span className="info-type">具備設施</span>
                          <span className="info">
                            {service.map((s, i) => s.name).join("、")}
                          </span>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
                <div className="map-wrapper">
                  <Map center={geoPostion} zoom={12}>
                    {R.uniq([...likedSpot, { id, geoPostion, name }]).map(
                      (ele, i, arr) => (
                        <Marker key={i} anchor={ele.geoPostion} />
                      )
                    )}
                    <Overlay anchor={geoPostion} offset={[120, 79]}>
                      <div className="overlay-label">
                        <div>{name}</div>

                        <div className="btn-group">
                          {likedSpot.find(ele => ele.id === id) ? (
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "REMOVE_LIKE",
                                  payload: { id }
                                });
                              }}
                            >
                              <GoTrashcan />
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "ADD_LIKE",
                                  payload: {
                                    id,
                                    name,
                                    geoPostion
                                  }
                                })
                              }
                            >
                              <GoHeart />
                            </button>
                          )}
                        </div>
                      </div>
                    </Overlay>
                  </Map>
                </div>
              </div>
            );
          })()
        : null}
    </Fragment>
  );
};

export default TravelInfo;
