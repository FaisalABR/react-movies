import React, { useState, useEffect, useRef } from "react";

import "./HeroSlide.scss";
import "swiper/css";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router";

import Button, { OutlineButton } from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params: { page: 1 },
        });
        // console.log(response);
        setMovieItems(response.results.slice(0, 10));
      } catch (error) {
        throw error;
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            <HeroSlideItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <Trailer key={i} item={item} />
      ))}
    </div>
  );
};

const HeroSlideItem = (props) => {
  const history = useHistory();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    console.log("test");
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);
    console.log(videos.results);

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content > iframe").innerHTML = "No Trailer";
    }

    modal.classList.toggle("active");
  };
  return (
    <div
      className="hero-slide__item "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Watch Now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="poster film" />
        </div>
      </div>
    </div>
  );
};

const Trailer = (props) => {
  const item = props.item;
  const iframeRef = useRef();

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
