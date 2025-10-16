import RestartButton from "./RestartButton";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = "🏆";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "😊";
  else if (percentage >= 30) emoji = "😐";
  else emoji = "😞";

  return (
    <>
      <div className="result">
        <p>
          Your final score is:{" "}
          <span role="img" aria-label="trophy">
            {emoji}
          </span>
          <strong>
            {points} / {maxPossiblePoints}
          </strong>
        </p>
        <p>
          Percentage: <strong>{percentage}%</strong>
        </p>
        <p className="highscore">
          Your highest score is: <strong>{highscore} points</strong>
        </p>
      </div>
      <RestartButton dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
