import React, {useState} from 'react'

function countingButton() {

  const [buttonCount, setButtonCount] = useState(0);

  function handleButtonClick() {
    setButtonCount(buttonCount + 1);
  }

  return (
    <div>
      <h2>hello from App.tsx! implementing button clicker</h2>
      <button onClick = {handleButtonClick}>click me!</button>
      <p>button count: {buttonCount}</p>
    </div>
  )
}

export default countingButton;