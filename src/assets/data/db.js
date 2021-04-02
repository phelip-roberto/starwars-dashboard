const films = require('./films.json');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');

module.exports = function () {
  return {
    films: films.results,
    people: people.results,
    planets: planets.results,
    species: species.results,
    starships: starships.results,
    vehicles: vehicles.results
  }
}