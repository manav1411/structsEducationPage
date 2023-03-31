import React, { useState, useEffect, useRef } from 'react';
import { MCQuestionProps, Question } from './types';
import './linkedLists.css';

function MCQuestion({ question }: MCQuestionProps) {
  const [questionState, setQuestionState] = useState('asking');
  const [chosenOption, setChosenOption] = useState(-1);

  function handleOptionSelect(optionIndex: number) {
    if (optionIndex === question.answerIndex) {
      setQuestionState('correct');
    } else {
      setQuestionState('incorrect');
    }
    setChosenOption(optionIndex);
  }

  function handleReset() {
    setQuestionState('asking');
    setChosenOption(-1);
  }

  return (
    <div>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <div key={index}>
            <label
              className={`MCquestion__option 
                ${index === chosenOption 
                ? (index === question.answerIndex 
                ? 'MCquestion__option--correct' 
                : 'MCquestion__option--incorrect') : ''}`}
            >
              <input
                type="radio"
                name="option"
                value={index}
                checked={chosenOption === index}
                onChange={() => handleOptionSelect(index)}
                onClick={handleReset}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      {questionState === 'correct' && (
        <div>
          <h3>You are correct!</h3>
          <p className="MCquestion__answerExplanation">
            {question.answerExplanation}
          </p>
        </div>
      )}
      {questionState === 'incorrect' && (
        <div>
          <h3>Sorry, that's incorrect. The correct answer is: </h3>
          <p className="MCquestion__answerExplanation">
            {question.answerExplanation}
          </p>
        </div>
      )}
    </div>
  );
}



export default MCQuestion;
