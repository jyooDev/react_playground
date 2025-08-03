import { UnderlineButton, BlackButton } from "./Buttons";
import { FaCalendarDay, FaClock } from "react-icons/fa";
import { RiBankCard2Fill } from "react-icons/ri";
import { IoTimeSharp } from "react-icons/io5";

export const DetailBox = ({title, details, blackBtnText, underlineBtnText, img, imgLeft}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 w-full items-center justify-center my-20">
            {imgLeft ? (
                <div className="hidden lg:w-1/2 w-full lg:flex justify-center rounded-2xl overflow-hidden">
                    <img src={img} className="w-full object-cover lg:w-auto lg:object-none"></img>
                </div>) : ('')}
            <div className="flex flex-col items-start gap-7 my-3 lg:w-1/2 w-full justify-start">
                <div className="text-3xl font-bold">{title}</div>
                <div>{details}</div>
                <div className="flex justify-start w-3/4 gap-3">
                    <BlackButton text={blackBtnText}/>
                    <UnderlineButton text={underlineBtnText}/>
                </div>
            </div>
            {imgLeft ? (
                <div className="lg:hidden w-full flex justify-center rounded-2xl overflow-hidden">
                    <img src={img} className="w-full object-cover lg:w-auto lg:object-none"></img>
                </div>
            ) : (
                <div className="lg:w-1/2 w-full lg:flex justify-center rounded-2xl overflow-hidden">
                    <img src={img} className="w-full object-cover lg:w-auto lg:object-none"></img>
                </div>
            )}
        </div>
    )
}


export const PlanBox = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
        <div className="relative flex flex-col w-full xl:w-5/7 h-[350px] rounded-xl bg-[url('https://blog.tubikstudio.com/wp-content/uploads/2020/04/Rhaetian-Alps-illustration-tubikarts.jpg')] bg-cover bg-center box-border p-10">
            <div className="absolute inset-0 bg-white/40"></div>
            <div className="relative z-10 flex gap-3 mb-5">
                <button className="bg-black rounded-full text-white font-medium px-3 py-2">Reserve</button>
                <button className="bg-gray-50 rounded-full text-black font-medium px-3 py-2">Rent</button>
            </div>
            <div className="relative z-10 w-[50%] text-4xl font-semibold mb-3">Get your ride right with Uber Reserve</div>
            <div className="relative z-10 flex flex-col w-1/2 mb-3">
                <h1 className="font-semibold text-black">Choose Date and Time</h1>
                 <div className="hidden xl:flex justify-start gap-2 w-full">
                    <div className="flex flex-col w-1/2 items-start">
                        <span className="text-sm text-gray-700">Date</span>
                        <div className="bg-gray-100 flex justify-start px-1 gap-2 items-center w-full transition duration-200 ease-in-out border-2 border-transparent focus-within:border-2 focus-within:border-black rounded-md">
                            <span className="text-xs"><FaCalendarDay /></span>
                            <input
                                className="py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm focus:outline-none"
                                placeholder="Date"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 items-start">
                        <span className="text-sm text-gray-700">Time</span>
                        <div className="bg-gray-100 flex justify-start px-1 gap-2 items-center w-full transition duration-200 ease-in-out border-2 border-transparent focus-within:border-2 focus-within:border-black rounded-md">
                            <span className="text-xs"><IoTimeSharp /></span>
                            <input
                                className="py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm focus:outline-none"
                                placeholder="Time"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col w-1/2">
                <BlackButton text={'Next'}/>
            </div>
        </div>
        <div className="flex flex-col w-full xl:w-2/7 border-1 border-gray-100 box-border p-3 rounded h-fit">
            <h1 className='font-semibold text-lg mb-3'>Benefits</h1>
            <div className="flex flex-col w-full gap-3">
                <div className="flex flex-row items-center gap-5 box-border px-2 w-full">
                  <span><FaCalendarDay/></span>
                  <div className="relative inline-block group">
                    <div className="xl:text-sm mb-4">Choose your exact pickup time up to 90 days in advance.</div>  
                    <span className="absolute left-0 bottom-0 h-[0.5px] w-full bg-gray-100"></span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3 box-border px-2 w-full">
                  <span><FaClock/></span>
                  <div className="relative inline-block group">
                    <div className="xl:text-sm mb-4">Choose your exact pickup time up to 90 days in advance.</div>  
                    <span className="absolute left-0 bottom-0 h-[0.5px] w-full bg-gray-100"></span>
                  </div>
                </div><div className="flex flex-row items-center gap-3 box-border px-2 w-full">
                  <span><RiBankCard2Fill/></span>
                  <div className="relative inline-block group">
                    <div className="xl:text-sm mb-4">Choose your exact pickup time up to 90 days in advance.</div>  
                    <span className="absolute left-0 bottom-0 h-[0.5px] w-full bg-gray-100"></span>
                  </div>
                </div>
            </div>
            
          </div>
        </div>
    );
}