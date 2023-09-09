import { useDispatch } from "react-redux";

import { heroesFilteredBySide } from "./filtersSlice";

const HeroesFilters = () => {
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    const side = e.target.value;
    console.log(side);
    dispatch(heroesFilteredBySide(side));
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter heroes by types</p>
        <div className="btn-group">
          <button
            value="all"
            onClick={onClickHandler}
            className="btn btn-outline-dark active"
          >
            All
          </button>
          <button
            value="sith"
            onClick={onClickHandler}
            className="btn btn-danger"
          >
            Sith
          </button>
          <button
            value="jedi"
            onClick={onClickHandler}
            className="btn btn-primary"
          >
            Jedi
          </button>
          <button
            value="gray_jedi"
            onClick={onClickHandler}
            className="btn btn-secondary"
          >
            Gray Jedi
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
