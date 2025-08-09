import { useState } from 'react'
import viteLogo from '/vite.svg'
import Recorder from "./Recorder"

function App() {

  return (
    <>
    <div className="min-h-screen bg-linear-100 from-primary-purple from-0% via-primary-middlepink via-90% to-primary-darkpink">
      <Recorder/>
    </div>
    </>
  )
}

export default App
