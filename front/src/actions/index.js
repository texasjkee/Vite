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

export const heroDeleted = (heroes) => {
  return {
    type: "HERO_DELETED",
    payload: heroes,
  };
};

export const heroCreated = (hero) => {
  return {
    type: "HERO_CREATED",
    payload: hero,
  };
};

export const heroesFiltered = () => {
  return {
    type: "HERO_FILTERED",
  };
};

export const heroesFiltersByElement = (element) => {
  return {
    type: "HERO_FILTERS_BY_ELEMENT",
    payload: element,
  };
};