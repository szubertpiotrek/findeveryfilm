import { css } from "@emotion/css";
import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { FilmDetails } from "../../types/filmDetails";
import { FilmActors } from "../../types/filmActors";
import {
  getFilmDetails,
  getFilmActors,
  GetFilmDetailsQuery,
  GetFilmActorsQuery,
} from "../../api/getFilmDetails";
import { imageURL } from "../../consts/imageURL";
import { ListOfActors } from "./ListOfActors";

export const FilmDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  let data, actorsData;
  const getFilmDetailsQuery: GetFilmDetailsQuery = ["get-film-details", id];
  const details = useQuery<FilmDetails>(getFilmDetailsQuery, getFilmDetails, {
    enabled: Boolean(id),
  });

  const getFilmActorsQuery: GetFilmActorsQuery = ["get-film-actors", id];
  const actors = useQuery<FilmActors>(getFilmActorsQuery, getFilmActors, {
    enabled: Boolean(id),
  });

  if (details.isSuccess) {
    data = details.data;
  }

  if (actors.isSuccess) {
    actorsData = actors.data;
  }

  return (
    <>
      {details.isSuccess && data && (
        <div className={filmDetails}>
          <img
            className={filmDetailsImg}
            src={imageURL + data?.backdrop_path}
            alt={data?.title}
          />
          <div className={imageGradient}></div>
          <div className={filmDetailsContent}>
            <div className={columnLeft}>
              <img
                className={columnLeftImg}
                src={imageURL + data?.poster_path}
                alt={data?.title}
              />
            </div>
            <div className={columnRight}>
              <h1 className={title}>{data?.title}</h1>
              <h2 className={colorWhite}>{data?.tagline}</h2>
              <p>
                {data?.release_date}{" "}
                <span>
                  (
                  {data?.production_countries?.map(
                    (country, index) => (index ? ", " : "") + country.iso_3166_1
                  )}
                  ){" "}
                </span>
              </p>
              <p className={time}>Czas trwania: {data?.runtime} min</p>
              <p>
                Kategorie:{" "}
                {data?.genres?.map(
                  (genre, index) => (index ? ", " : "") + genre.name
                )}
              </p>
              <p className={description}>{data?.overview}</p>
              <div className={ratingSection}>
                <div className={rating}>{data?.vote_average}</div>
                <span className={ratingCount}>
                  na podstawie {data?.vote_count} ocen
                </span>
              </div>
            </div>
            {actors.isSuccess && actorsData && (
              <div className={actorsSection}>
                <ListOfActors actorsList={actorsData.cast} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const filmDetails = css({
  position: "relative",
  color: "#fff",
});

const filmDetailsImg = css({
  width: "100%",
  objectFit: "cover",
  height: "100vh",
});

const imageGradient = css({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  opacity: "0.7",
});

const filmDetailsContent = css({
  position: "absolute",
  top: "50px",
  left: "50%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  transform: "translateX(-50%)",
  width: "calc(100% - 280px)",
});

const columnLeft = css({
  flexBasis: "35%",
});

const columnLeftImg = css({
  width: "100%",
  boxShadow: "0 0 50px -5px #fff",
});

const columnRight = css({
  flexBasis: "60%",
});

const colorWhite = css({
  color: "#fff",
});

const title = css({
  fontSize: "3em",
  color: "#fff",
});

const description = css({
  fontSize: "1.4em",
});

const time = css({
  textAlign: "right",
});

const ratingSection = css({
  position: "relative",
});

const rating = css({
  borderRadius: "50%",
  fontWeight: 700,
  border: "2px solid #78f078",
  fontSize: "2.5em",
  width: "70px",
  height: "70px",
  lineHeight: "64px",
  textAlign: "center",
});

const ratingCount = css({
  position: "absolute",
  left: "82px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "1.5em",
});

const actorsSection = css({
  position: "absolute",
  top: "calc(100% + 80px)",
  left: "0",
});

const centerButton = css({
  display: "flex",
});

const showMoreButton = css({
  fontWeight: 500,
  lineHeight: 1.25,
  border: "none",
  color: "white",
  margin: "50px auto 50px",
  padding: "10px 32px",
  borderRadius: 20,
  cursor: "pointer",
  outline: "none",
  fontSize: "16px",
  backgroundColor: "#060a14",
  "&:hover": {
    border: "2px solid #78f078",
  },
});
