import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    language: 'en-US',
}
axios.defaults.headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Autorization' : `Bearer ${process.env.REACT_APP_THEMOVIEDB4_TOKEN}`
}

export const getMovies = (page) => {
    return axios.get(`/moive/popular`, { page });
}

export const getMovie = (id) => {
    return axios.get(`/movie/${id}`);
}

export const image = (path, width = "original") => {
    return `https://image.tmdb.org/t/p/${width}/${path}`;
}

export const getPhotos = (id) => {
    return axios.get(`/movie/${id}/images`);
}

