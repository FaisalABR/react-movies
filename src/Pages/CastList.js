import React, { useState, useEffect } from "react";

import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

const CastList = (props) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const res = await tmdbApi.credits(props.category, props.id);
      setCast(res.cast);
    };
    getCast();
  }, [props.category, props.id]);
  console.log(cast);
  return (
    <div className="movie-content__casts">
      {cast.slice(0, 6).map((item, i) => (
        <div className="cast-item" key={i}>
          <img
            src={apiConfig.originalImage(item.profile_path)}
            alt={item.name}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
