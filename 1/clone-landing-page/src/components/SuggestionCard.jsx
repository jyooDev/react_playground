import React from "react";

export const SuggestionCard = ({title, context, img}) => {
    return (
        <div className="grid grid-flow-col grid-rows-3 justify-start items-center w-full">
            <div className="col-span-2 font-semibold">{title}</div>
            <div className="col-span-2 text-xs">{context}</div>
            <div className="col-span-2 text-xs font-semibold">Details</div>
            <div className="row-span-3"><img src={img}></img></div>
        </div>
    );
}