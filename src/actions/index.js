import axios from 'axios';

const API_KEY = 'cb4416a5abe9dcbd074e5a9bc72f111b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// to keep our action types consistent between our action creators
// and our reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request', request);
  console.log('Action ^');

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}