import { useSelector, useDispatch } from "react-redux";
import { inc, dec, rnd } from "../../vanila-redux/action";

const Counter = () => {
  const { value } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <>
        <h1>{value}</h1>
        <button name="INC" onClick={() => dispatch(inc())}> INC </button>
        <button name="DEC" onClick={() => dispatch(dec())}> DEC </button>
        <button name="RND" onClick={() => dispatch(rnd())}> RND </button>
      </>
    </div>
  );
};

export default Counter;
