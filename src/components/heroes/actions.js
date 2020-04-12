import {
  FETCH_HEROES_REQUEST,
  SEARCH_HEROES_REQUEST,
} from "../../constants/action-types";
import { heroFilters } from "./reducer";

export function fetchHeroesAction(data) {
  return {
    type: FETCH_HEROES_REQUEST,
    payload: {
      ...data,
    },
  };
}

export function searchHeroesAction(filters = heroFilters) {
  return {
    type: SEARCH_HEROES_REQUEST,
    payload: {
      ...filters,
    },
  };
}
