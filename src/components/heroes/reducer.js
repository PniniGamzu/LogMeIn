import {
  FETCH_HEROES_REQUEST,
  SEARCH_HEROES_REQUEST,
} from "../../constants/action-types";

export const heroFilters = {
  heroName: "",
  actorName: "",
};
const initialState = {
  heroes: [],
  filters: { ...heroFilters },
};

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROES_REQUEST:
      return {
        ...state,
        heroes: action.payload.heroes.map((h) => ({ ...h, isDiaplay: true })),
      };
    case SEARCH_HEROES_REQUEST:
      return {
        ...state,
        heroes: state.heroes.map((h) =>
          (action.payload.heroName !== "" &&
            h.name.indexOf(action.payload.heroName) === -1) ||
          (action.payload.actorName !== "" &&
            !h.realName.indexOf(action.payload.actorName) === -1)
            ? { ...h, isDiaplay: false }
            : { ...h, isDiaplay: true }
        ),
        filters: { ...action.payload },
      };
    default:
      return state;
  }
};
