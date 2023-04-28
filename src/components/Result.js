import React from "react";
import PropTypes from "prop-types";

function Result(props) {
  const { score, totalQuestions, restartQuiz } = props;

  return (
    <div className="result">
      <h2>Resultado</h2>
      <p>
        Você acertou {score} de {totalQuestions} questões.
      </p>
      <button class="btn btn-warning" onClick={restartQuiz}>
        Recomeçar
      </button>
    </div>
  );
}

Result.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
};

export default Result;
