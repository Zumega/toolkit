"use strict";

export {
  apiURI
}

// TODO: update this per project
const apiURI = () => {
  let data;

  if (environment === 'development') {
    data = {
      weather: './mockWeatherData.json',
      pokemon: './mockPokemonData.json?number=0',
      quote: './mockQuoteData.json'
    };
  } else {
    data = {
      weather: 'http://api.wunderground.com/api/299470ffa5a9dcee/forecast/q/WA/Seattle.json',
      pokemon: 'https://pokeapi.co/api/v2/pokemon/',
      quote: 'http://quotes.rest/qod.json'
    };
  }

  return data;
}