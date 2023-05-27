import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8237e78bf3e271525e7a162005514910';

export const getTrendsMovies = async () => {
  try {
    return axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMoviesDetails = async movieId => {
  try {
    return axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMoviesCredits = movieId => {
  try {
    return axios.get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMoviesReviews = (movieId, page = 1) => {
  try {
    return axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&page=${page}`
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMoviesByQuery = (query, page = 1) => {
  try {
    return axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
