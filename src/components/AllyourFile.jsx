import React from "react";
import illustration from "../public/illustration-1.svg";
import ButtonEmail from "./ButtonEmail";

export default function AllyourFile() {

    return (
        <div className="flex-col w-4/5 mx-auto my-8 text-center ">
            <img src={illustration} alt="Fylo-logo"/>
            <h1 className="my-8 text-xl font-bold tracking-wide">All your files in one secure location, accessible anywhere.</h1>
            <p className="text-sm font-light text-Desaturated-Blue">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
            <ButtonEmail
            placeholder="Enter your email..."
            
            />
        </div>
    )
    
}