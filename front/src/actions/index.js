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

export const heroesFilteredBySide = (side) => {
  return {
    type: "HEROES_FILTERED_BY_SIDE",
    payload: side,
  };
};