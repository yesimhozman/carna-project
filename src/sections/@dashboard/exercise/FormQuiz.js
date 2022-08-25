import React, { useState } from "react";
import "./Form.css";

function Exercise() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What __ your father name?",
      options: [
        { id: 0, text: "am", isCorrect: false },
        { id: 1, text: "the", isCorrect: false },
        { id: 2, text: "are", isCorrect: false },
        { id: 3, text: "is", isCorrect: true },
      ],
    },
    {
      text: "What will you __ tomorrow?",
      options: [
        { id: 0, text: "do", isCorrect: true },
        { id: 1, text: "did", isCorrect: false },
        { id: 2, text: "said", isCorrect: false },
        { id: 3, text: "is", isCorrect: false },
      ],
    },
    {
      text: "My mother's daughter is my ......",
      options: [
        { id: 0, text: "sister", isCorrect: true },
        { id: 1, text: "uncle", isCorrect: false },
        { id: 2, text: "cousin", isCorrect: false },
        { id: 3, text: "aunt", isCorrect: false },
      ],
    },
    {
      text: "My father's son is my .....",
      options: [
        { id: 0, text: "uncle", isCorrect: false },
        { id: 1, text: "brother", isCorrect: true },
        { id: 2, text: "aunt", isCorrect: false },
        { id: 3, text: "mother", isCorrect: false },
      ],
    },
    {
      text: " A:Where is Sam? B: She is at the store.",
      options: [
        { id: 0, text: "true", isCorrect: true },
        { id: 1, text: "false", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="Quiz">
      {/* 1. Header  */}
      <h1>Family Members</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button type='button' className="quiz-button" onClick={() => restartGame()}>ReStart</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h4>
            Choose the correct option. <br /></h4>
            <h5>  Question: {currentQuestion + 1} out of {questions.length}</h5>
          
          
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="quiz-ul">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li  className="quiz-li"
                  key={option.id}
                >
                  <button onClick={() => optionClicked(option.isCorrect)}
                    onKeyDown={() => optionClicked(option.isCorrect)} className="quiz-button">
                  {option.text}
                     
                  </button> 
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Exercise;
