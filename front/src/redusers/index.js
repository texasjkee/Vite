const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filterStatus: "all",
  heroesFilteredBySide: [],
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
        heroes: state.heroes.filter((hero) => hero.name !== action.payload)
      };
    case "HERO_CREATED":
      return {
        ...state,
        heroes: [...state.heroes, action.payload]
      };
    case "HEROES_FILTERED_BY_SIDE":
        return {
          ...state,
          filterStatus: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
