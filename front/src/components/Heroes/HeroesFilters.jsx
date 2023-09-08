import { useSelector, useDispatch } from "react-redux";

import { heroesFiltersByElement } from "../../actions";

const HeroesFilters = () => {
  const { filters } = useSelector((state) => state);
  const dispatch = useDispatch();

  // dispatch(heroesFilters(heroesElements));
  // dispatch(heroesFetched(data));
  const handlerClick = (e) => {
    const element = e.target.textContent.toLowerCase();

    // if(element === 'all') {
    //   console.log('all');
    // }
    dispatch(heroesFiltersByElement([element]));
    // console.log(filters);
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter heroes by types</p>
        <div className="btn-group">
          <button onClick={handlerClick} className="btn btn-outline-dark active" >
            All
          </button>
          <button onClick={handlerClick} className="btn btn-danger">
    Sith
          </button>
          <button onClick={handlerClick} className="btn btn-primary">
    Jedi
          </button>
          <button onClick={handlerClick} className="btn btn-secondary">
    Grey Jedi
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
