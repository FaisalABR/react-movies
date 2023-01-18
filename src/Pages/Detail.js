import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import apiConfig from "../api/apiConfig";
import tmdbApi from "../api/tmdbApi";

import "./Detail.scss";

import CastList from "./CastList";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };

    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path
              )})`,
            }}
          ></div>
          <div className=" mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <div className="title">
                <h1>{item.title || item.name}</h1>
              </div>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genre-item">
                      {genre.name}
                    </span>
                  ))}
                {console.log(item.genres)}
              </div>
              <p className="overview">{item.overview}</p>
              <h2 className="cast-title"> Casts </h2>
              <CastList category={category} id={id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
