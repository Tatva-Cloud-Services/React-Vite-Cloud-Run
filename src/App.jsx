import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await axios.get(`${backendUrl}/random-name`);
      setRandomNumber(response.data.name);
    } catch (error) {
      console.error("Error fetching random number:", error);
    }
  };

  console.log("🚀 ~ App ~ randomNumber:", randomNumber);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{randomNumber !== null ? randomNumber : "Hello World"}</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            fetchRandomNumber();
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
