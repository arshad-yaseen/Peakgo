import React, { useEffect, useState } from "react";
import fetch from "../api/fetch";
import GenresList from "../components/GenresList";
import Hero from "../components/Hero";
import MoviePosters from "../components/MoviePosters";
import PremiumCta from "../components/PremiumCta";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [movieGenres, setMovieGenres] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch.getUpcomingMovies("movie", (data) => {
      setUpcomingMovies(data.results);
    });
    fetch.getTopRatedMovies("movie", (data) => {
      setTopRatedMovies(data.results);
    });
    fetch.getNowPlaying((data) => {
      setNowPlaying(data.results);
    });
    fetch.getMovieGenres((data) => {
      setMovieGenres(data.genres);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <div className="z-10 home">
      <Hero />
      {!loading ? (
        <div>
          <MoviePosters
            data={upcomingMovies}
            type_name="Upcoming Movies"
            original_type_name="upcoming"
            category="movie"
          />
          <MoviePosters
            data={topRatedMovies}
            type_name="Top Rated Movies"
            original_type_name="top_rated"
            category="movie"
          />
          <MoviePosters
            data={nowPlaying}
            type_name="Now Playing"
            original_type_name="now_playing"
            category="movie"
          />
          <GenresList data={movieGenres} />
          <PremiumCta />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
