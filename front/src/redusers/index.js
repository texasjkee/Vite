const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HERO_DELETED":
      return {
        ...state,
        heroes: action.payload,
      };
    case "HERO_CREATED":
      // eslint-disable-next-line
      const newHeroesList = [...state.heroes, action.payload];
      return {
        ...state,
        heroes: newHeroesList
      };
    case "HERO_FILTERS":
      return {
        ...state,
        filters: action.payload,
      };
    case "HERO_FILTERS_BY_ELEMENT":
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
