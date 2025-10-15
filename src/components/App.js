import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loading from "./Loader";
import ErrorMessage from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  currentQuestionIndex: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      return { ...state, answer: action.payload, points: state.points + (action.payload === state.questions[state.currentQuestionIndex].correctOption ? state.questions[state.currentQuestionIndex].points : 0) };
    default:
      throw new Error("Unknown action type");
  }
}

export default function App() {
  const [{ questions, status, currentQuestionIndex, answer }, dispatch] =
    useReducer(reducer, initialState);
  const numberOfQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <ErrorMessage />}
        {status === "ready" && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === "active" && (
          <Question
            question={questions[currentQuestionIndex]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}
