import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const perguntas = [
  {
    pergunta: "Qual é o nome completo do Percy Jackson?",
    opcoes: [
      "Percy Jackson",
      "Percy Jackson Smith",
      "Perseus Jackson",
      "Perseus Jackson III",
    ],
    resposta: "Perseus Jackson",
  },
  {
    pergunta: "De que cor são os olhos do Percy?",
    opcoes: ["Azuis", "Verdes", "Castanhos", "Cinzentos"],
    resposta: "Verdes",
  },
  {
    pergunta: "Qual é o nome do acampamento dos semideuses em Long Island?",
    opcoes: [
      "Acampamento Half-Blood",
      "Acampamento Jupiter",
      "Acampamento Valhala",
      "Acampamento dos Heróis",
    ],
    resposta: "Acampamento Half-Blood",
  },
  {
    pergunta: "Qual é o nome do melhor amigo de Percy?",
    opcoes: ["Annabeth", "Grover", "Clarisse", "Thalia"],
    resposta: "Grover",
  },
  {
    pergunta: "Qual é o nome do pai de Percy?",
    opcoes: ["Poseidon", "Zeus", "Hades", "Ares"],
    resposta: "Poseidon",
  },
];

function App() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    const currentPergunta = perguntas[step - 1];

    if (selected === currentPergunta.resposta) {
      setScore(score + 1);
    }

    if (step === perguntas.length) {
      setShowResult(true);
    } else {
      setStep(step + 1);
    }
  };

  const restartQuiz = () => {
    setShowResult(false);
    setScore(0);
    setStep(1);
  };

  return (
    <div className="app font-sans bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Quiz Percy Jackson</h1>
      {!showResult ? (
        <Quiz
          step={step}
          handleAnswer={handleAnswer}
          pergunta={perguntas[step - 1].pergunta}
          opcoes={perguntas[step - 1].opcoes}
        />
      ) : (
        <Result
          score={score}
          totalQuestions={perguntas.length}
          restartQuiz={restartQuiz}
        />
      )}
      {step > 1 && (
        <div className="feedback">
          {score >= step - 1 ? (
            <p className="correct text-gray-700">
              Você acertou a pergunta {step - 1}!
            </p>
          ) : (
            <p className="incorrect text-gray-700">
              Você errou a pergunta {step - 1}.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
