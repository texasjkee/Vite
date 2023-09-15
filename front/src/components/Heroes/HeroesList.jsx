import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useGetHeroesQuery } from "../../api/apiSlice";
import { fetchHeroes } from "./heroesSlice";

import HeroesListItem from "./HeroListIteam";
import Spinner from "../Spinner";

import "./HeroList.scss";

const HeroesList = () => {
  //TODO: read how relesect works
  const filteredHeroesSelector = createSelector(
    (state) => state.filters.filterStatus,
    (state) => state.heroes.heroes,
    (filter, heroes) =>
      filter === "all" ? heroes : heroes.filter((hero) => hero.side === filter)
  );

  const {
    data: heroes,
    isFetching,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHeroesQuery();

  const heroesFilteredBySide = useSelector(filteredHeroesSelector);
  // const heroes = useSelector(state => state.heroes.heroes);
  const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
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