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
        heroesFilteredBySide:
          state.filterStatus === "all"
            ? action.payload
            : action.payload.filter((hero) => hero.side === state.filterStatus),
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HERO_DELETED":
      // eslint-disable-next-line
      const filteredHeroes = state.heroes.filter((hero) => hero.name !== action.payload);
      return {
        ...state,
        heroes: filteredHeroes,
        heroesFilteredBySide: filteredHeroes,
      };
    case "HERO_CREATED":
      // eslint-disable-next-line
      const newHeroesList = [...state.heroes, action.payload];
      return {
        ...state,
        heroes: newHeroesList,
        heroesFilteredBySide:
          state.filterStatus === "all"
            ? newHeroesList
            : newHeroesList.filter((hero) => hero.side === state.filterStatus),
      };
    case "HEROES_FILTERED_BY_SIDE":
        return {
          ...state,
          filterStatus: action.payload,
          // heroesFilteredBySide: action.payload === 'all' ?
          //   state.heroes :
          //   state.heroes.filter((hero) => hero.side === action.payload)
        };
    default:
      return state;
  }
};

export default reducer;
