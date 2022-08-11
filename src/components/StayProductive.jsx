import React from "react";
import illustration2 from "../public/illustration-2.svg";
import arrow from "../public/icon-arrow.svg";



export default function StayProductive() {

    return (
        <div className="flex-col w-4/5 mx-auto my-8 mt-20 text-center ">
            <img src={illustration2} alt="Fylo-logo" />
            <h2 className="my-8 text-sm font-bold tracking-wide">Stay productive, wherever you are</h2>
            <div className="text-sm font-light text-left text-Desaturated-Blue" >
                <p className="mb-4">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required! </p>
            </div>

            <div className="flex items-center justify-center w-1/2 pb-1 mx-auto mt-8 border-b row border-b-Moderate-Cyan ">
                <p className="pr-2 text-xs font-light text-Moderate-Cyan ">See how Fylo works</p>
                <img src={arrow} alt="arrow" />
            </div>
            
            
        </div>
    )
    
}