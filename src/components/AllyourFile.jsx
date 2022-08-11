import React from "react";
import illustration from "../public/illustration-1.svg";

export default function AllyourFile() {

    return (
        <div className="flex-col w-4/5 mx-auto my-8 text-center ">
            <img src={illustration} alt="Fylo-logo"/>
            <h1 className="my-8 text-xl font-bold tracking-wide">All your files in one secure location, accessible anywhere.</h1>
            <p className="text-sm font-light text-Desaturated-Blue">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
            
            <label class="relative block mt-8 mb-4">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                </span>
                <input class="py-2 pl-6 pr-3 placeholder:text-sm placeholder:font-light placeholder:text-slate-300 block bg-white w-full border border-slate-500 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter your email..." type="text" name="search"/>
            </label>
            <button class="px-4 py-2 text-sm bg-bright-blue text-white font-semibold rounded-lg w-full border border-light-grayish-blue hover:text-bright-blue hover:bg-light-grayish-blue hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3065f8] focus:ring-offset-2">Get Started</button>
        </div>
    )
    
}