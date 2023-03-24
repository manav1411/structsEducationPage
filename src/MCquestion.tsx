import React, { useState } from 'react';
import { MCQuestionProps, Question } from './types';

function MCQuestion({ question }: MCQuestionProps) {
  const [questionState, setQuestionState] = useState('asking');
  const [chosenOption, setChosenOption] = useState(-1);

  function handleOptionSelect(optionIndex: number) {
    setChosenOption(optionIndex);
  }

  function handleSubmit() {
    if (chosenOption === question.answerIndex) {
      setQuestionState('correct');
    } else {
      setQuestionState('incorrect');
    }
  }
  

  function handleReset() {
    setQuestionState('asking');
    setChosenOption(-1);
  }

  return (
    <div>
      {questionState === 'asking' && (
        <div>
          <h2>{question.question}</h2>
          <div>
            {question.options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={index}
                    checked={chosenOption === index}
                    onChange={() => handleOptionSelect(index)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button disabled={chosenOption === -1} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      {questionState === 'correct' && (
        <div>
          <h2>Correct!</h2>
          <div>
            <p>{question.answerExplanation}</p>
          </div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
      {questionState === 'incorrect' && (
        <div>
          <h2>Incorrect!</h2>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );  
}

export default MCQuestion;