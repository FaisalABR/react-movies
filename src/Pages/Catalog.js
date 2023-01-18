import React from "react";

import { useParams } from "react-router";

import PageHeader from "../components/Page-header/PageHeader";

import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/Movie-grid/MovieGrid";

const Catalog = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "Tv Series"}
      </PageHeader>
      <MovieGrid category={category} />
    </>
  );
};

export default Catalog;
