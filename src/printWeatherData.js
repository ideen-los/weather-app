import { getWeatherData } from './getWeatherData';

const content = document.getElementById('content');

const createElement = function (CssClass, headline, data) {
  const paragraph = document.createElement('p');
  paragraph.className = CssClass;

  const label = document.createElement('h3');
  label.textContent = headline;
  paragraph.appendChild(label);

  const span = document.createElement('span');
  span.textContent = data;
  paragraph.appendChild(span);

  content.appendChild(paragraph);
};

export const printWeatherData = async function (location) {
  try {
    const weatherData = await getWeatherData(location);

    content.innerHTML = '';

    const address = weatherData.resolvedAddress;
    const temperature = `${weatherData.currentConditions.temp} °C`;
    const condition = weatherData.currentConditions.conditions;
    const description = weatherData.description;

    createElement('address', 'Location:', address);
    createElement('temperature', 'Temperature:', temperature);
    createElement('condition', 'Condition:', condition);
    createElement('description', 'Description:', description);
  } catch (error) {
    console.error('Error while printing weather data: ', error);
  }
};
