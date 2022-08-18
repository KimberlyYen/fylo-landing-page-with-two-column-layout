import React from "react";

export default function ButtonEmail(props) { 
    return (   
        <>        
        <label class="relative block mt-8 mb-4">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            </span>
                <input class="py-2 pl-6 pr-3 placeholder:text-sm placeholder:font-light placeholder:text-slate-300 block bg-white w-full border border-slate-500 rounded-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder={props.placeholder} type="text" name="search"/>
        </label>
        <button class="px-4 py-2 text-sm bg-bright-blue text-white font-semibold rounded-sm w-full border-light-grayish-blue hover:text-bright-blue hover:bg-light-grayish-blue hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3065f8] focus:ring-offset-2">Get Started</button>
        </>
    )

}

