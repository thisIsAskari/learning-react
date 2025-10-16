function NextButton({
  dispatch,
  answer,
  currentQuestionIndex,
  numberOfQuestions,
}) {
  if (answer === null) return null;

  if (currentQuestionIndex < numberOfQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }

  if (currentQuestionIndex === numberOfQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
  }
}

export default NextButton;
