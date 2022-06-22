import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useThrottle from "./hooks/useThrottle";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [inputData, setInputData] = useState("");
  const [btnCount, setBtnCount] = useState(0);

  const debounceData = useDebounce(inputData, 300);

  const throttleFunc = useThrottle(() => {
    setBtnCount(btnCount + 1);
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Debounce Test</h2>
        <p>{debounceData}</p>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <h2>Throttle Test</h2>
        <p>{btnCount}</p>
        <button onClick={throttleFunc}>throttle button</button>
      </header>
    </div>
  );
}

export default App;
