import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { heroCreated } from "../../actions";
import { BASE_URL } from "../../helpers/URL";

const HeroesAddForm = () => {
  const [heroName, setHeroName] = useState("");
  const [heroDesc, setHeroDesc] = useState("");
  const [heroSide, setHeroSide] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newHero = {
      heroId: "0",
      name: heroName,
      description: heroDesc,
      side: heroSide,
    };

    // fetch(`${BASE_URL}hero/new`, "POST", JSON.stringify(newHero))
    //   .then((res) => console.log(res, "Sending successful"))
    //   .then(dispatch(heroCreated(newHero)))
    //   .catch((err) => console.log(err));

    axios.post(`${BASE_URL}hero/new`, newHero)
      .then((res) => console.log(res.status, res.data))
      .then(dispatch(heroCreated(newHero)))
      .catch((err) => console.log(err));

    setHeroName("");
    setHeroDesc("");
    setHeroSide("");
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name of the new hero
        </label>
        <input
          onChange={(e) => setHeroName(e.target.value)}
          required
          type="text"
          value={heroName}
          name="name"
          className="form-control"
          id="name"
          placeholder="What is my name?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label fs-4">
          Description
        </label>
        <textarea
          onChange={(e) => setHeroDesc(e.target.value)}
          required
          value={heroDesc}
          name="description"
          className="form-control"
          id="text"
          placeholder="What can I do? "
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Select hero side
        </label>
        <select
          onChange={(e) => setHeroSide(e.target.value)}
          required
          value={heroSide}
          className="form-select"
          id="element"
          name="element"
        >
          <option>What is my side?</option>
          <option value="sith">Sith</option>
          <option value="jedi">Jedi</option>
          <option value="gray_jedi">Gray Jedi</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Cteate
      </button>
    </form>
  );
};

export default HeroesAddForm;

//? bad practice
// const [formData, setformData] = useState({
//   name: null,
//   description: null,
//   element: null,
//   heroId: 4,
// });
//
// const handlerOnChange = (e) => {
//   const { value, name } = e.target;
//   setformData({
//     ...formData,
//     [name]: value,
//   });
// };
//
// useEffect(() => {
//   dispatch(heroesFetching());
//   fetch(`${BASE_URL}heroes`)
//     .then((res) => res.json())
//     .then((heroes) => dispatch(heroesFetched(heroes)))
//     .catch(() => dispatch(heroesFetchingError()));
//   // eslint-disable-next-line
// }, []);
