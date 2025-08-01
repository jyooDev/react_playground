import React from "react";
import '../App.css';
import { useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";



export const Navbar = ({ appTitle }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black text-white flex justify-center w-full py-4">
            <div className="flex justify-between items-center w-[1100px]">
                <div className="flex justify-start items-center gap-5">
                    <div className="ml-4 font-thin-100 text-2xl">
                        {appTitle}
                    </div>
                    <div className="hidden xl:flex gap-1 text-sm" >
                        <div className="transition ease-in-out duration-300 hover:bg-white/20 rounded-full py-1 px-4">Ride</div>
                        <div className="transition ease-in-out duration-300 hover:bg-white/20 rounded-full py-1 px-4">Drive</div>
                        <div className="transition ease-in-out duration-300 hover:bg-white/20 rounded-full py-1 px-4">Business</div>
                        <div className="transition ease-in-out duration-300 hover:bg-white/20 rounded-full py-1 px-4">Uber Eats</div>
                        <div className="relative flex flex-col flex-start items-center transition ease-in-out duration-300 hover:bg-white/20 rounded-full py-1 px-4">
                            <button onClick={() => setIsOpen(!isOpen)} className="bg-transparent w-fit h-fit">About</button> 
                            <ul className={`${isOpen ? '' : 'hidden'} absolute top-12 shadow-md shadow-gray-400 rounded-sm bg-white list-none text-gray-700 flex flex-col justify-center items-center w-[130px]`}>
                                    <li className="px-3 py-2">About us</li>
                                    <li className="px-3 py-2">Our offerings</li>
                                    <li className="px-3 py-2">How Uber works</li>
                                    <li className="px-3 py-2">Sustainability</li>
                                    <li className="px-3 py-2">About us</li>
                                    <li className="px-3 py-2">About us</li>
                                    <li className="px-3 py-2">About us</li>
                                    <li className="px-3 py-2">About us</li>
                                    <li className="px-3 py-2">About us</li>
                                    <li className="px-3 py-2">About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 mr-4">
                    <div className="hidden xl:flex gap-4 text-sm">
                        <div className="flex justify-centter items-center gap-2 transition ease-in-out duration-300 hover:bg-white/20 rounded-full py-1 px-3"><span className="-rotate-40">< FaGlobe/></span>EN</div>
                        <div className="transition ease-in-out duration-300 hover:bg-white/20 rounded-full py-1 px-3">Help</div>
                    </div>
                    <div className="py-2 px-3.5 rounded-3xl hover:bg-white/10 text-sm">Log in</div>
                    <div className="bg-white text-black text-sm py-2 px-3.5 rounded-3xl hover:bg-white/80">Sign up</div>
                    <div className="block xl:hidden aspect-square rounded-full hover:bg-white/10"><TbMenu/></div>
                </div>        
            </div>
        </div>
    );
}