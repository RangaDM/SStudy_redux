import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const number = useSelector((store) => store.number);
  const dispatch = useDispatch();
  return (
    <div>
      {number}

      <button
        onClick={() => {
          dispatch({ type: "increment", data: 7 });
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement", data: 5 });
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
