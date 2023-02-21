import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="pre-landing-container">
        <p>
          Before I show you around, do you prefer<br></br>light or dark mode?
          &#40;there&apos;s a clear answer&#41;
        </p>
      </div>
    </div>
  );
}

export default App;
