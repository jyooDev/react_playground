import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [randNum, setRandNum] = useState([])
  const timerRef = useRef(null);

  function setHundredRandNum(){
    for (let i = 0; i < 10; i++){
      let num = Math.floor(Math.random() * 100);
      setRandNum(prev => [...prev, num]);
    }
  }

  function start(){
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setHundredRandNum();
    }, 1000);
  }

  function stop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setHundredRandNum();
    }, 1000);

    return () => clearInterval(timer);
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={setHundredRandNum}>
          randomNumber
        </button>
         {randNum.map((n) => {
            return <div>{n}</div>; 
          })}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
