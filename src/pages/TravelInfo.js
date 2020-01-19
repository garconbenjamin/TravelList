import React, { useContext, useState, Fragment } from "react";
import context from "./../context";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

const TravelInfo = props => {
  const contextValue = useContext(context);
  const { content, dispatch, state } = contextValue;
  const { likedSpot } = state;
  const { id } = props.params;
  const dataInfo = content.find(ele => +ele.id === +id);
  console.log("dataInfo", dataInfo);

  return (
    <Fragment>
      {dataInfo
        ? (() => {
            const {
              name,
              name_zh,
              open_status,
              introduction,
              open_time,
              zipcode,
              distric,
              address,
              tel,
              fax,
              email,
              months,
              nlat,
              elong,
              official_site,
              facebook,
              ticket,
              remind,
              staytime,
              modified,
              url,
              category,
              target,
              service,
              friendly,
              images,
              files,
              links
            } = dataInfo;
            const geoPostion = [nlat, elong];
            return (
              <div style={{ width: "100%", height: "500px" }}>
                <Map center={geoPostion} zoom={12} width={600} height={400}>
                  {[...likedSpot, { id, geoPostion, name }].map((ele, i) => (
                    <Marker key={i} anchor={ele.geoPostion} />
                  ))}

                  <Overlay anchor={geoPostion} offset={[120, 79]}>
                    <div>
                      <span>{name}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "ADD_LIKE",
                            payload: { id, name, geoPostion }
                          })
                        }
                      >
                        liked
                      </button>
                      <button
                        onClick={() => {
                          const y = window.confirm("Delete it?");
                          if (y) {
                            dispatch();
                          }
                        }}
                      >
                        remove
                      </button>
                    </div>
                  </Overlay>
                </Map>
              </div>
            );
          })()
        : null}
    </Fragment>
  );
};

export default TravelInfo;
