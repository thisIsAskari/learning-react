function Progress({
  currentQuestionIndex,
  numberOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        className="progress-bar"
        value={currentQuestionIndex + Number(answer !== null)}
        max={numberOfQuestions}
      />
      <p>
        Question <strong>{currentQuestionIndex + 1}</strong> of{" "}
        {numberOfQuestions}
      </p>

      <p>
        <strong>
          {Math.round(((currentQuestionIndex + 1) / numberOfQuestions) * 100)}%
        </strong>{" "}
        completed
      </p>
      <p>
        Score:{" "}
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
