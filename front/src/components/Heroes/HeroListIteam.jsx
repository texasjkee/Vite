import { useRef } from "react";
import { useDispatch } from "react-redux";
import { heroDeleted } from "./heroesSlice";

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
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.sndcdn.com%2Favatars-000276617102-fc749h-t500x500.jpg&f=1&nofb=1&ipt=4d5e1233a10cf4729c5836128ca0db927f8b9dbaf340339ed6fb251c3c15566e&ipo=images"
        // src={image}
        // className="img-fluid w-25 d-inline"
        alt="unknown hero"
        width="150"
        height="150"
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
