import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8237e78bf3e271525e7a162005514910';

export const getTrendsMovies = async () => {
  try {
    return axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
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

// export const getMoviesByQuery = () => {
//   const options = {
//     method: 'GET',
//     url: `${BASE_URL}search/movie`,
//     params: { include_adult: 'false', language: 'en-US', page: '1' },
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };

//   return axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

// export const getMoviesCredits = () => {
//   const options = {
//     method: 'GET',
//     url: `${BASE_URL}movie/movie_id/credits`,
//     params: { language: 'en-US' },
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

// export const getMoviesReviews = () => {
//   const options = {
//     method: 'GET',
//     url: `${BASE_URL}movie/movie_id/reviews`,
//     params: { language: 'en-US', page: '1' },
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
