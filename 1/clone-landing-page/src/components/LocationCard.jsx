import React from "react";
import { FaLocationDot, FaSquareFull } from "react-icons/fa6";
import { FaCircle, FaCalendarDay } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";
import { IoTimeSharp } from "react-icons/io5";
// import { Calendar } from "@mantine/dates";

export const LocationCard = ({city, country}) => {
    return(
    <>
        <div className="flex gap-2 items-center justify-start">
            <FaLocationDot />
            <span>{city}, {country}</span>
            <span>Change city</span>
        </div>
        <div className="block xl:flex xl:justify-between xl:gap-2 w-full">
            <div className="flex-col flex gap-4 pr-20 m-0 box-border w-1/2">
                <h1 className="font-bold text-6xl flex flex-wrap">Go anywhere with Uber</h1>
                <div className="flex justify-between w-3/4 transition duration-200 ease-in-out border-2 border-transparent focus-within:border-2 focus-within:border-black rounded-md px-3">
                    <div className="flex justify-center items-center gap-2">
                    <span class="text-xs"><FaCircle /></span>
                    <input
                        className="py-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 focus:outline-none"
                        placeholder="Pickup Location"/>
                </div>
                <button><BiSolidNavigation/></button>
                </div>
                <div className="flex justify-between w-3/4 transition duration-200 ease-in-out border-2 border-transparent focus-within:border-2 focus-within:border-black rounded-md px-3">
                    <div className="flex justify-center items-center gap-2">
                    <span className="text-xs"><FaSquareFull /></span>
                    <input
                        className="py-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 focus:outline-none"
                        placeholder="Dropoff Location"/>
                    </div>
                </div>
                <div className="flex justify-start w-3/4 gap-2">
                    <div className="flex flex-col w-1/2 items-start">
                        <span className="text-sm text-gray-700">Date</span>
                        <div className="flex justify-start px-1 gap-2 items-center w-full transition duration-200 ease-in-out border-2 border-transparent focus-within:border-2 focus-within:border-black rounded-md">
                            <span className="text-xs"><FaCalendarDay /></span>
                            <input
                                className="py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm focus:outline-none"
                                placeholder="Date"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 items-start">
                        <span className="text-sm text-gray-700">Time</span>
                        <div className="flex justify-start px-1 gap-2 items-center w-full transition duration-200 ease-in-out border-2 border-transparent focus-within:border-2 focus-within:border-black rounded-md">
                            <span className="text-xs"><IoTimeSharp /></span>
                            <input
                                className="py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm focus:outline-none"
                                placeholder="Time"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start w-3/4 gap-2">
                    <button className="bg-black px-5 py-3 rounded-lg text-white font-medium text-sm transition duration-200 ease-in-out hover:bg-black/90">See prices</button>
                    <button className="relative inline-block group cursor-pointer">
                    <span>Log in to see your recent activity</span>
                    <span
                        className="absolute left-0 bottom-1 h-[1px] w-full bg-gray-300"
                    ></span>
                    <span
                        className="absolute left-0 bottom-1 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r from-gray-800 to-gray-800 transition-transform duration-300 group-hover:scale-x-100"
                    ></span>
                    </button>
                </div>
            </div>
            <div className="hidden xl:block w-1/2"><img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_448,w_672/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"></img></div>
        </div>
    </>
    );
}