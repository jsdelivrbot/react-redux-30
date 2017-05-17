import axios from 'axios';

const API_KEY = 'fdee97dfad6da1a2c8ec701750d88688';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export function fetchWeather(city){
  const url = ROOT_URL + '&q=' + city + ',us';
  const request = axios.get(url);
  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}
