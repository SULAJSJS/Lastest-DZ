import React from "react";
import withSwapi from '../hoc'
import { ItemDetails, Record } from "../item-details";

const PlanetElementMethods = (swapi) => ({getData: swapi.getPlanet, getImage: swapi.getPlanetImage})//Нужно будет переделать только функции

const PlanetItemDetails = withSwapi(ItemDetails, PlanetElementMethods);


const PersonElementMethods = (swapi) => ({getData: swapi.getPerson, getImage: swapi.getPersonImage})//Нужно будет переделать только функции

const PersonItemDetails = withSwapi(ItemDetails, PersonElementMethods);


const StarshipElementMethods = (swapi) => ({getData: swapi.getStarship, getImage: swapi.getStarshipImage})//Нужно будет переделать только функции

const StarshipItemDetails = withSwapi(ItemDetails, StarshipElementMethods);

export {PlanetItemDetails, PersonItemDetails, StarshipItemDetails}