import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default Counter;
