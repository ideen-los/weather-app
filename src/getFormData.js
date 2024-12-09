import { printWeatherData } from './printWeatherData';

export const getFormData = function () {
  let locationInput = document.getElementById('weatherLocation');
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    printWeatherData(locationInput.value);
  });
};
