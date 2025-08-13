import { useState } from 'react'
import viteLogo from '/vite.svg'
import Recorder from "./Recorder"
import { APIKeyEnterBox } from "./APIKeyEnterBox";
function App() {
  const rotatingEmojis = "☀️ 🌧️ 🌙 🌈 📝 📖 ✍️ 📚 🗒️ ✒️ 🖋️ 📅 🕰️ 💭 😊 😴 💡 🎶 🎨 📷 🎥 🏃‍♀️ 🚴‍♂️ 🧘‍♀️ 🛏️ 🍂 🌸 ☕ 🍵 🌿 🍎 🥐 🍞 🥗 🍜 🍕 🍝 🍣 🍪 🍫 🍰 🍷 🍺 🚗 🚋 ✈️ 🏖️ 🏞️ 🏙️ 📌 🧳 🕊️ 🛍️ 🎁 🏕️ 🏟️ 🎡 🎢 🎯 🥂 🌌 🏔️ 📸 🧵 🪴 📦 🪞 🎀";


  return (
    <div className="flex flex-col gap-5 min-h-screen w-full pt-10 bg-[linear-gradient(135deg,var(--color-sunset-purple)_0%,var(--color-sunset-pink)_40%,var(--color-sunset-orange)_70%,var(--color-sunset-gold)_100%)] overflow-hidden">
      <div className="relative text-6xl opacity-20 animate-marquee whitespace-nowrap">
          {rotatingEmojis}
      </div>
      <h1 className="z-20 opacity-78 relative flex justify-center w-full text-8xl text-[var(--color-beige)] font-bold text-shadow-md">Record Your Day With Emoji</h1>
      <APIKeyEnterBox/>
      <Recorder/>
      <div className="z-0 w-full overflow-hidden absolute bottom-10">
        <div className="text-6xl opacity-20 animate-marquee-right whitespace-nowrap">
          {rotatingEmojis}
        </div>
      </div>
    </div>
  )
}

export default App
