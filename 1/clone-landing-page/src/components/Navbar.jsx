import React from "react";

export const Navbar = ({ appTitle }) => {
    return (
        <div className="bg-black text-white flex justify-between items-center py-4">
            <div className="ml-4 font-thin-100 text-2xl">
                {appTitle}
            </div>
            <div className="flex items-center gap-4 mr-4">
                <div className="py-2 px-3.5 rounded-3xl hover:bg-white/10 text-sm">Log in</div>
                <div className="bg-white text-black text-sm py-2 px-3.5 rounded-3xl hover:bg-white/80">Sign up</div>
                <div className="px-3 py-1  aspect-square rounded-full hover:bg-white/10">=</div>
            </div>
        </div>
    );
}