import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { SuggestionCard } from './components/SuggestionCard'
import { LocationCard } from './components/LocationCard'

function App() {

  const suggestions = [
    { title : "Ride", context: "Go anywhere with Uber. Request a ride, hop in, and go.", img: "https://mobile-content.uber.com/launch-experience/ride.png"},
    { title : "Reserve", context: "Reserve your ride in advance so you can relax on the day of your trip.", img: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png"},
    { title : "Rental Cars", context: "Your perfect rental car is a few clicks away. Learn more about Uber Rent.", img: "https://mobile-content.uber.com/launch-experience/car-rentals.png"},
    { title : "Food", context: "Order delivery from local restaurants with Uber Eats.", img: "https://mobile-content.uber.com/eats/ub_mode_nav_eats.png"},
  ]
  return (
    <>
      <Navbar appTitle='Uber'></Navbar>
      <section className="mx-30 my-10">
        <LocationCard city='Madison' country='US'></LocationCard>

      </section>
      <section className="mx-30">
        <h1 className="text-3xl font-bold mb-8">Suggestions</h1>
        <div class="grid grid-cols-2 gap-5 flex-1">
        {suggestions.map((s) => {
          return <SuggestionCard
            title={s.title} context={s.context} img={s.img}></SuggestionCard>
        })}
        </div>
      </section>
    </>
  )
}

export default App
