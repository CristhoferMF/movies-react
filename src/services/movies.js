import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  language: "es-ES",
  api_key: process.env.REACT_APP_THEMOVIEDB3_API_KEY,
};

export const getMovies = ({ page = 1 }) => {
  return axios.get(`/movie/popular`, { params: { page } });
};

export const getMovie = (id) => {
  return axios.get(`/movie/${id}`);
};

export const image = (path, width = "original") => {
  return `https://image.tmdb.org/t/p/${width}/${path}`;
};

export const getPhotos = (id) => {
  axios.defaults.params = {};
  return axios.get(`/movie/${id}/images`);
};
