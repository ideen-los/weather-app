import axios from 'axios';

const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = 'Z3VLJV6N84EVC7ZT4444DYPSQ';

export const getWeatherData = async function (location) {
  const loc = location || 'Mainz';

  try {
    const response = await axios.get(
      `${BASE_URL}/${loc}?unitGroup=metric&key=${API_KEY}&contentType=json`
    );

    const weatherData = response.data;
    console.log(`The weather data for ${loc}: `, weatherData);

    return weatherData;
  } catch (error) {
    console.log('Failed fetching weather data: ', error);
    return;
  }
};
