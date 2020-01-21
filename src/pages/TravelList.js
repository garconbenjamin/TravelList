import React, { useContext } from "react";
import context from "./../context";
import ItemCard from "./../components/ItemCard";

const TavelList = () => {
  const contextValue = useContext(context);
  const { content, dispatch, isLoading } = contextValue;


  return (
    <div className="travel-list">
      <div className="card-list">
        {content.map((ele, i) => {
          return <ItemCard data={ele} index={i} key={i} />;
        })}
        {isLoading
          ? [...Array(4)].map((ele, index) => (
              <div className="card-wrapper" key={index}>
                <div className="card skeleton">Loading...</div>
              </div>
            ))
          : null}
      </div>
      {content.length ? (
        <div className="button-wrapper">
          <button
            className={isLoading ? "loading" : ""}
            onClick={() => {
              dispatch({ type: "NEXT_PAGE" });
            }}
          >
            <span>Load more</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default TavelList;
