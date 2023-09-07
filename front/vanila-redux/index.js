import { useToggle } from "../hooks/useToggle";
// import { useState } from "react";
import { createStore, bindActionCreators } from "redux";

// import { inc, dec, rnd } from "../vanila-redux/action";
import * as actions from '../vanila-redux/action';
import reducer from "../vanila-redux/reduser";

import "./App.scss";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

subscribe(() => console.log(getState().value));

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd,
//   },
//   dispatch
// );

// const bindActionCreator = function (creator, dispatch) {
//   return function (...args) {
//     console.log(args, "args");
//     console.log(creator, "creator");
//     dispatch(creator(...args));
//   };
// };

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   console.log(args, "args");
//   console.log(creator, "args");
//   dispatch(creator(...args));
// };

// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (value) => dispatch(rnd(value));
// const rndDispatch = bindActionCreator(rnd, dispatch);

const App = () => {
  const [isToggle, setToggle] = useToggle();

  const rndHandler = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    // rndDispatch(randomNumber);
    rnd(randomNumber);
  };

  // const incHandler = () => {
  //   // incDispatch(randomNumber);
  //   inc();
  // };

  const decHandler = () => {
    // incDispatch(randomNumber);
    dec();
  };

  return (
    <>
      <button name="INC" onClick={inc}>
        INC
      </button>
      <button name="DEC" onClick={decHandler}>
        DEC
      </button>
      <button name="RND" onClick={rndHandler}>
        RND
      </button>
    </>
  );
};

export default App;
