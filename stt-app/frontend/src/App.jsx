import { useState } from 'react'
import viteLogo from '/vite.svg'
import Recorder from "./Recorder"

function App() {

  return (
    <div className="min-h-screen w-full pt-20 bg-[linear-gradient(135deg,var(--color-sunset-purple)_0%,var(--color-sunset-pink)_40%,var(--color-sunset-orange)_70%,var(--color-sunset-gold)_100%)]">
      <h1 className="flex justify-center mb-10 w-full text-6xl text-[var(--color-beige)] font-bold text-shadow-md">Record Your Day With Emoji</h1>
      <Recorder/>
    </div>
  )
}

export default App
