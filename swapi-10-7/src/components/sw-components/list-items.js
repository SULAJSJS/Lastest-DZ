import React from 'react';
import ItemList from '../item-list';
import withSwapi from '../hoc';


const planetElementMethods = (swapi) => ({getData: swapi.getAllPlanets})//Нужно будет переделать только функции
const PlanetList = withSwapi(ItemList, planetElementMethods );

const peopleElementMethods = (swapi) => ({getData: swapi.getAllPeople})//Нужно будет переделать только функции
const PeopleList = withSwapi(ItemList, peopleElementMethods );

const starshipElementMethods = (swapi) => ({getData: swapi.getAllStarships})//Нужно будет переделать только функции
const StarshipList = withSwapi(ItemList, starshipElementMethods );

export {PlanetList,PeopleList,StarshipList}