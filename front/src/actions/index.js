export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const heroDelete= (heroes) => {
  return {
    type: "HERO_DELETE",
    payload: heroes,
  };
};

export const heroesFilters= (filters) => {
  return {
    type: "HERO_FILTERS",
    payload: filters,
  };
};

export const heroesFiltersByElement = (element) => {
  console.log(element);
  return {
    type: "HERO_FILTERS_BY_ELEMENT",
    payload: element,
  };
};