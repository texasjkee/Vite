// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid

// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { heroesFetching, heroesFetched, heroesFetchingError, } from "../../actions";

import axios from "axios";

const HeroesAddForm = () => {
  const [reload, setReload] = useState(false);
  const [formData, setformData] = useState({
    name: null,
    description: null,
    element: null,
    heroId: 4,
  });

  const dispatch = useDispatch();

  const BASE_URL = `http://localhost:4000/`;

  const handlerForm = (e) => {
    e.preventDefault();
    const finalForm =  {...formData, heroId: formData.heroId + 1};
    axios.post(`${BASE_URL}hero/new`, finalForm);
    setReload(true);
  };

  useEffect(() => {
    dispatch(heroesFetching());

    fetch(`${BASE_URL}heroes`)
      .then((res) => res.json())
      .then((heroes) => dispatch(heroesFetched(heroes)))
      .catch(() => dispatch(heroesFetchingError()));

    // eslint-disable-next-line
  }, [reload]);

  const handlerOnChange = (e) => {
    const { value, name } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={handlerForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name of the new hero
        </label>
        <input
          onChange={handlerOnChange}
          required
          type="text"
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
          onChange={handlerOnChange}
          required
          name="description"
          className="form-control"
          id="text"
          placeholder="What can I do? "
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Select hero element
        </label>
        <select
          onChange={handlerOnChange}
          required
          className="form-select"
          id="element"
          name="element"
        >
          <option>What is my side?</option>
          <option value="fire">Sith</option>
          <option value="water">Jedi</option>
          <option value="wind">Wind</option>
          <option value="earth">Earth</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Cteate
      </button>
    </form>
  );
};

export default HeroesAddForm;
