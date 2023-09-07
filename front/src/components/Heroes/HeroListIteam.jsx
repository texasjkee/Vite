import { useDispatch, useSelector } from "react-redux";
import { heroDelete } from "../../actions";
import { useRef } from "react";

const HeroesListItem = ({ name, description, element }) => {
  const { heroes} = useSelector((state) => state);
  const dispatch = useDispatch();
  const ref = useRef();
  let elementClassName;

  switch (element) {
    case "fire":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "water":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "wind":
      elementClassName = "bg-success bg-gradient";
      break;
    case "earth":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-warning bg-gradient";
  }

  const handlerDeleteHero = (e) => {
    const UI_HERO_NAME = ref.current.textContent;
    const filteredHeroes = heroes.filter((hero) => hero.name !== UI_HERO_NAME);
    dispatch(heroDelete(filteredHeroes));
  };

  return (
    <li
      className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
    >
      <img
        src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg"
        className="img-fluid w-25 d-inline"
        alt="unknown hero"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h3 ref={ref} className="card-title">
          {name}
        </h3>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button
          onClick={handlerDeleteHero}
          type="button"
          className="btn-close btn-close"
          aria-label="Close"
        ></button>
      </span>
    </li>
  );
};

export default HeroesListItem;
