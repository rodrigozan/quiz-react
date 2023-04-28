import React from "react";
import PropTypes from "prop-types";

function Quiz(props) {
  const { step, handleAnswer, pergunta, opcoes } = props;

  const renderOpcoes = () => {
    return opcoes.map((opcao, index) => {
      return (
        <ul key={index} className="opcoes-grid">
          <li
            class="list-group-item list-group-item-action"
            onClick={() => handleAnswer(opcao)}
          >
            {opcao}
          </li>
        </ul>
      );
    });
  };

  return (
    <div className="quiz-container">
      <h3 className="text-3xl font-bold mb-8">
        Pergunta {step}: {pergunta}
      </h3>
      {renderOpcoes()}
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  pergunta: PropTypes.string.isRequired,
  opcoes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Quiz;
