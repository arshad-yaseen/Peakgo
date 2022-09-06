import urlBase from "../base/urlBase";

let base_url = urlBase.base_url;
let API_KEY = urlBase.API_KEY;

const getTrendingMovies = async (type, callback) => {
  let url = `${base_url}/trending/${type}/day?api_key=${API_KEY}`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};
const getUpcomingMovies = async (type, callback) => {
  let url = `${base_url}/${type}/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};
const getTopRatedMovies = async (type, callback) => {
  let url = `${base_url}/${type}/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};
const getNowPlaying = async (callback) => {
  let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};
const getMovieGenres = async (callback) => {
  let url = `${base_url}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};
const getMovieDetails = async (movieId,callback) => {
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};
const getCastsAndCrews = async (movieId,callback) => {
  let url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};
const getVideos = async (movieId,callback) => {
  let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
  let response = await fetch(url);
  let data = await response.json();
  callback(data);
};

export default {
  getTrendingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getNowPlaying,
  getMovieGenres,
  getMovieDetails,
  getCastsAndCrews,
  getVideos,
};
