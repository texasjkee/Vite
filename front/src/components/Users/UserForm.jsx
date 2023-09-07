import { useState } from "react";
import axios from "axios";

import style from "./UserForm.module.scss";

const UserForm = () => {
  const [formData, setformData] = useState({
    name: "",
    height: "",
  });

  const URL = "http://localhost:4000/user/new";

  const handlerForm = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post(URL, formData);
  };

  const handlerOnchange = (e) => {
    const { value, name } = e.target;

    setformData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form action="" className={style.form} onSubmit={handlerForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handlerOnchange}
          name="name"
          placeholder="Enter your name"
        />
        <label htmlFor="height">Height</label>
        <input
          type="number"
          onChange={handlerOnchange}
          name="height"
          placeholder="Enter your height"
        />
        <input type="submit" className={style.send} value="Send" />
      </form>
    </div>
  );
};

export default UserForm;
