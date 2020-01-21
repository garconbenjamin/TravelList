import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { MdWeb } from "react-icons/md";
import { Link } from "wouter";

const ItemCard = props => {
  const { data, index } = props;

  const { id, name, name_zh, distric, official_site, category, images } = data;
  return (
    <Link to={`/${id}`}>
      <div className="card-wrapper">
        <div className="card">
          <div
            className="card-img"
            style={
              images[0] ? { backgroundImage: `url(${images[0].src})` } : null
            }
          >
            {images[0] ? null : <span className="text-holder">No Image</span>}
          </div>
          <div className="card-text">
            <div className="title"> {name || name_zh}</div>
            <ul>
              {distric ? (
                <li>
                  <GoLocation />
                  <span>{distric}</span>
                </li>
              ) : null}

              <li>
                {category
                  ? category.map((cat, idx) => (
                      <span
                        className="hashtag"
                        style={{
                          filter: `hue-rotate(${+cat.id * 5}deg)`
                        }}
                        key={idx}
                      >
                        #{cat.name}
                      </span>
                    ))
                  : null}
              </li>
            </ul>
            {official_site ? (
              <a
                target="_blank"
                className="official-site"
                href={official_site}
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                <MdWeb />
                官方網站
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ItemCard;
