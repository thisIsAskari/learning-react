function StartScreen({ numberOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <p>{numberOfQuestions} questions to test your React knowledge!</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
