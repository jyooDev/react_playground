
import React from "react";


export const UnderlineButton = ({text}) => {
    return (<button className="relative inline-block group cursor-pointer">
        <span className="xl:text-sm">{text}</span>
        <span className="absolute left-0 bottom-1 h-[1px] w-full bg-gray-300"></span>
        <span
            className="absolute left-0 bottom-1 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r from-gray-800 to-gray-800 transition-transform duration-300 group-hover:scale-x-100"
        ></span>
    </button>
    );
}

export const BlackButton = ({text}) => {
    return(
    <button className="bg-black px-5 py-3 rounded-lg text-white font-medium text-sm transition duration-200 ease-in-out hover:bg-black/90 xl:text-sm">{text}</button>
    );
}