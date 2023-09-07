// import { useHttp } from "../../hooks/useHttp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { heroesFetching, heroesFetched, heroesFetchingError, heroesFilters } from "../../actions";
import HeroesListItem from "./HeroListIteam";
import Spinner from "../Spinner";

const HeroesList = () => {
  const { heroes, heroesLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  //TODO: check it.
  // const { request } = useHttp();
  
  const URL = "http://localhost:4000/heroes";

  useEffect(() => {
    dispatch(heroesFetching());
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const heroesElements = data.map(hero => hero.element);
        dispatch(heroesFilters(heroesElements));
        dispatch(heroesFetched(data));
      })
      .catch(() => dispatch(heroesFetchingError()));
    // eslint-disable-next-line
  }, []);

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Loading error</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">There are no heroes</h5>;
    }
    return arr.map(({ _id, ...props }) => {
      return <HeroesListItem key={_id} {...props} />;
    });
  };

  const elements = renderHeroesList(heroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
