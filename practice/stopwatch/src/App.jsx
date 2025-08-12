import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Stopwatch from './Stopwatch.jsx';


function App() {

  return (
    <>
    <div className='absolute flex justify-center place-items-center w-full max:w-screen h-full max:h-screen'>
      <Stopwatch/>
    </div>
    </>
  )
}

export default App
