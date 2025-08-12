import { useState } from 'react'
import viteLogo from '/vite.svg'
import Recorder from "./Recorder"

function App() {

  return (
    <div className="min-h-screen w-full pt-20 bg-linear-100 from-primary-purple from-0% via-primary-middlepink via-90% to-primary-darkpink">
      <h1 className="flex justify-center mb-10 w-full text-6xl text-white font-bold">Record Your Day With Emoji</h1>
      <Recorder/>
    </div>
  )
}

export default App
