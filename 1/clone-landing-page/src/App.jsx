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
      <section className="flex justify-center my-10">
        <div className="block w-[1100px]">
          <LocationCard city='Madison' country='US'></LocationCard>
        </div>
      </section>
      <secstion className="flex justify-center w-full">
        <div className="block w-[1100px]">
          <h1 className="text-3xl font-bold mb-8">Suggestions</h1>
          <div className="flex flex-wrap">
          {suggestions.map((s) => {
            return <SuggestionCard
              title={s.title} context={s.context} img={s.img}></SuggestionCard>
          })}
          </div>
        </div>
      </secstion>
    </>
  )
}

export default App
