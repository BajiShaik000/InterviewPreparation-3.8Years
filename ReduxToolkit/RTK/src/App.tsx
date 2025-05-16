import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AppDispatch, RootState } from "./state/store";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./state/counter";

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          incrementByAmount
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          IncrementAsync
        </button>
      </div>
    </>
  );
}

export default App;
