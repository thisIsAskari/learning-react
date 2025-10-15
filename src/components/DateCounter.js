import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.value;
  // if (action.type === "reset") return state > 0 ? 0 : state;

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "setCount":
      return { ...state, count: action.value };
    case "setStep":
      return { ...state, step: action.value };
    case "reset":
      return initialState;
    default:
      throw Error("Unknown action: " + action.type);
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", value: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", value: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    dispatch({ type: "reset" });
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
