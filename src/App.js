import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { numberDecrement, numberIncrement } from "./store/reducers/number";

function App() {
  const number = useSelector((store) => store.number);
  const dispatch = useDispatch();
  return (
    <div>
      {number}

      <button
        onClick={() => {
          dispatch(numberIncrement(5));
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch(numberDecrement());
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
