import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [score, setScore] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0);
  const correctAnswer = num1 * num2;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput) {
      return alert("Please provide your result first");
    }
    if (userInput === correctAnswer) {
      setScore((prevState) => prevState + 1);
    } else {
      setScore((prevState) => prevState - 1);
    }
    setUserInput("");
  };

  const resetScore = () => {
    confirm("Do you want to reset the score?");
    setScore(0);
    setQuestionCounter(1);
  };

  useEffect(() => {
    const num1Random = Math.floor(Math.random() * 10) + 1;
    const num2Random = Math.floor(Math.random() * 10) + 1;
    setNum1(num1Random);
    setNum2(num2Random);
    setQuestionCounter((prevState) => prevState + 1);
  }, [score]);

  return (
    <div className="app">
      <form className="form" onSubmit={submitHandler}>
        <div className="row">
          <p>Question #{questionCounter}</p>
          <p className="score" id="score">
            Score: {score}
          </p>
        </div>
        <h1 id="question" className="question">
          What is {num1} times {num2}?
        </h1>
        <input
          type="text"
          className="input"
          placeholder="Enter your answer"
          autoFocus
          autoComplete="off"
          value={userInput}
          onChange={(e) => setUserInput(Number(e.target.value))}
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <button className="reset" type="submit" onClick={resetScore}>
          Reset Score
        </button>
      </form>
    </div>
  );
}

export default App;
