import React from "react";
import { FaLocationDot } from "react-icons/fa6";
export const LocationCard = ({city, country}) => {
    return(
    <>
        <div className="flex gap-2 items-center justify-between">
            <FaLocationDot />
            <span>{city}, {country}</span>
            <span>Change city</span>
        </div>
        <div className="grid grid-flow-col grid-rows-6 grid-cols-2 justify-center items-center gap-3">
            <h1 className="font-bold text-5xl col-span-1">Go anywhere with</h1>
            <h1 className="font-bold text-5xl col-span-1">Uber</h1>
            <div className="col-span-1 row-span-4"></div>
            <div className="row-span-6"><img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_448,w_672/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"></img></div>
        </div>
    </>
    );
}