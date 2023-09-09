import { useRef } from "react";
import { useDispatch } from "react-redux";
import { heroDeleted } from "../../actions";

const HeroesListItem = ({ name, description, side, image }) => {
  const dispatch = useDispatch();
  const ref = useRef();

  let elementClassName;

  switch (side) {
    case "sith":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "jedi":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "gray_jedi":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-warning bg-gradient";
  }

  const heroDeleteHandler = () => {
    const UI_HERO_NAME = ref.current.textContent;
    dispatch(heroDeleted(UI_HERO_NAME));
  };

  return (
    <li
      className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
    >
      <img
        // src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg"
        src={image}
        // className="img-fluid w-25 d-inline"
        alt="unknown hero"
        width="150" height="150"
        // style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h3 ref={ref} className="card-title">
          {name}
        </h3>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button
          onClick={heroDeleteHandler}
          type="button"
          className="btn-close btn-close"
          aria-label="Close"
        ></button>
      </span>
    </li>
  );
};

export default HeroesListItem;
