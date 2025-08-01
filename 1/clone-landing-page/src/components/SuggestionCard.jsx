import React from "react";

export const SuggestionCard = ({ title, context, img }) => {
  return (
    <div className="box-border w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="flex justify-between items-center bg-gray-100 rounded-xl gap-4 h-full">
        <div className="flex flex-col gap-5 py-2 px-3 items-between">
            <div className="font-semibold text-l">{title}</div>
            <div className="text-xs">{context}</div>
            <div className="font-semibold text-sm flex bg-white rounded-full w-fit h-full box-border px-3 py-1 justify-center items-center">Details</div>
        </div>
        <div className="flex justify-center items-center w-1/2 md:w-1/3 aspect-square mr-3">
            <img className="w-full h-full object-cover" src={img} alt={title} />
        </div>
        </div>
    </div>
  );
};
