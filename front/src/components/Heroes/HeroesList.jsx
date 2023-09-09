// import { useHttp } from "../../hooks/useHttp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

import HeroesListItem from "./HeroListIteam";
import Spinner from "../Spinner";

import "./HeroList.scss";

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../../actions";
import { BASE_URL } from "../../helpers/URL";

const HeroesList = () => {
  const { heroesFilteredBySide, heroesLoadingStatus } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  //TODO: check it.
  // const { request } = useHttp();

  useEffect(() => {
    dispatch(heroesFetching());
    axios
      .get(`${BASE_URL}heroes`)
      .then(({ data }) => dispatch(heroesFetched(data)))
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
      return (
        <CSSTransition timeout={0} classNames="hero">
          <h5 className="text-center mt-5">There are no heroes</h5>
        </CSSTransition>
      );
    }
    return arr.map(({ _id, ...props }) => {
      return (
        <CSSTransition key={_id} timeout={500} classNames="hero">
          <HeroesListItem key={_id} {...props} />
        </CSSTransition>
      );
    });
  };

  const elements = renderHeroesList(heroesFilteredBySide);
  return <TransitionGroup component="ul">{elements}</TransitionGroup>;
};

export default HeroesList;
