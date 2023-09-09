const initialState = {
  filterStatus: "all",
  heroesFilteredBySide: [],
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FILTERED_BY_SIDE":
        return {
          ...state,
          filterStatus: action.payload,
        };
    default:
      return state;
  }
};

export default filters;
