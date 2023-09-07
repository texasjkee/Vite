import { useState } from "react";

//claerFunction
const toggleFlag = (state) => !state;

export const useToggle = () => {
  const [isToggle, setToggle] = useState(false);

  //TODO: read about immutable state.
  //setToggle((state) => !state));
  const toggle = () => {
    setToggle(toggleFlag);
  };
  return [isToggle, toggle];
};