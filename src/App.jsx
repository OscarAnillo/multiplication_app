import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const correctAnswer = num1 * num2;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput) {
      return alert("Please provide your result first");
    }
    if (userInput === correctAnswer) {
      score++;
      updateLocalStorage();
    } else {
      score--;
      updateLocalStorage();
    }
    setUserInput("");
  };

  function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  }
  let score = JSON.parse(localStorage.getItem("score"));
  if (!score) {
    score = 0;
  }

  useEffect(() => {
    const num1Random = Math.floor(Math.random() * 10) + 1;
    const num2Random = Math.floor(Math.random() * 10) + 1;
    setNum1(num1Random);
    setNum2(num2Random);

    const scoreEl = document.getElementById("score");
    scoreEl.innerHTML = `Score: ${score}`;
  }, [score]);

  return (
    <div className="app">
      <form className="form" onSubmit={submitHandler}>
        <p className="score" id="score"></p>
        <h1 id="question" className="question">
          What is {num1} times {num2}?
        </h1>
        <input
          type="text"
          className="input"
          placeholder="Enter your answer"
          value={userInput}
          onChange={(e) => setUserInput(Number(e.target.value))}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
