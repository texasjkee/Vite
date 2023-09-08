// import { useHttp } from "../../hooks/useHttp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  axios  from "axios";

import { heroesFetching, heroesFetched, heroesFetchingError, heroesFiltered } from "../../actions";
import { BASE_URL } from "../../helpers/URL";

import HeroesListItem from "./HeroListIteam";
import Spinner from "../Spinner";

const HeroesList = () => {
  const { heroes, heroesLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  //TODO: check it.
  // const { request } = useHttp();
  
  useEffect(() => {
    dispatch(heroesFetching());
    axios.get(`${BASE_URL}heroes`)
      .then(({data}) => {
        dispatch(heroesFetched(data));
        dispatch(heroesFiltered());
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
