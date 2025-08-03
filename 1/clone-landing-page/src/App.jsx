import './App.css'
import { Navbar } from './components/Navbar'
import { SuggestionCard } from './components/SuggestionCard'
import { LocationCard } from './components/LocationCard'
import { DetailBox, PlanBox } from './components/ImageBox'
function App() {

  const suggestions = [
    { title : "Ride", context: "Go anywhere with Uber. Request a ride, hop in, and go.", img: "https://mobile-content.uber.com/launch-experience/ride.png"},
    { title : "Reserve", context: "Reserve your ride in advance so you can relax on the day of your trip.", img: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png"},
    { title : "Rental Cars", context: "Your perfect rental car is a few clicks away. Learn more about Uber Rent.", img: "https://mobile-content.uber.com/launch-experience/car-rentals.png"},
    { title : "Food", context: "Order delivery from local restaurants with Uber Eats.", img: "https://mobile-content.uber.com/eats/ub_mode_nav_eats.png"},
  ]
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar appTitle='Uber'></Navbar>
      <section className="flex justify-center items-center my-20 overflow-x-hidden mx-5">
        <div className="block w-full max-w-[1100px]">
          <LocationCard city='Madison' country='US'></LocationCard>
        </div>
      </section>
      <section className="flex justify-center items-center overflow-x-hidden my-10 mx-5">
        <div className="block w-full max-w-[1100px]">
          <h1 className="text-3xl font-bold mb-8">Suggestions</h1>
          <div className="flex flex-wrap">
          {suggestions.map((s) => {
            return <SuggestionCard
              title={s.title} context={s.context} img={s.img}></SuggestionCard>
          })}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mx-5">
          <div className="block w-full max-w-[1100px] mx-5">
          <DetailBox title="Log in to see your account details" details="View past trips, tailored suggestions, support resources, and more" blackBtnText="Log in to your account" underlineBtnText="Create an account" img="https://www.uber-assets.com/image/upload/v1753139368/assets/85/0e6b6d-a29e-4960-bcab-46de99547d24/original/Signup-roundededge-1.svg" imgLeft={false}/>
          </div>
          <div className="block w-full max-w-[1100px] mx-5">
          <h1 className="text-3xl font-bold mb-8">Plan for later</h1>
          <PlanBox/>
          </div>
          <div className="block w-full max-w-[1100px] mx-5">
          <DetailBox title="Drive when you want, make what you need" details="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber." blackBtnText="Get Started" underlineBtnText="Already have an account? Sign in" img="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png" imgLeft={true}/>
          </div>
          <div className="block w-full max-w-[1100px] mx-5">
          <DetailBox title="The Uber you know, reimagined for business" details="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size." blackBtnText="Get started" underlineBtnText="Check out our solutions" img="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png" imgLeft={false}/>
          </div>
          <div className="block w-full max-w-[1100px] mx-5">
          <DetailBox title="Save on Uber and Uber Eats with Uber One membership" details="Become an Uber One member for savings and exclusive perks on Uber and Uber Eats.
          Sign up for just $9.99/month." blackBtnText="Sign up to save" underlineBtnText="" img="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1696243800/assets/62/3b076a-3406-4f3b-89de-2cf1a2ccb907/original/uber-one.jpg" imgLeft={true}/>
          </div>
      </section>
    </div>
  )
}

export default App
