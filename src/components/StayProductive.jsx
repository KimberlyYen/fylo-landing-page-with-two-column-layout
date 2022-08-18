import React from "react";
import illustration2 from "../public/illustration-2.svg";
import arrow from "../public/icon-arrow.svg";
import quotes from "../public/icon-quotes.svg";
import avatarTestimonial from "../public/avatar-testimonial.jpg";



export default function StayProductive() {

    return (
        <div className="flex-col w-4/5 mx-auto my-8 mt-20 text-center ">
            <img src={illustration2} alt="Fylo-logo" />
            <h2 className="my-8 text-xl font-bold tracking-wide">Stay productive, wherever you are</h2>
            <div className="text-sm font-light text-left text-Desaturated-Blue" >
                <p className="mb-4">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required! </p>
            </div>

            <div className="flex items-center justify-center w-1/3 pb-1 mx-auto mt-8 border-b row border-b-Moderate-Cyan ">
                <p className="pr-2 text-xs font-light text-Moderate-Cyan ">See how Fylo works</p>
                <img src={arrow} alt="arrow" />
            </div>

        <Card/>
            
            
        </div>
    )
    
}

function Card() {
    return (<>
        <div className="mx-2 my-10 bg-white shadow-md rounded-xl shadow-gray-300-400">
            <p className="px-8 py-2 text-sm leading-loose text-left text-Desaturated-Blue">
            <img className="my-4" src={quotes} alt="quotes" />
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            
            <div className="flex place-items-center">
                <img className="w-10 my-4 rounded-full" src={avatarTestimonial} alt="avatar-testimonial" />
                <div className="pl-4 leading-normal">
                    <h3 className="font-bold text-md text-very-dark-Blue">Kyle Burton</h3>
                    <p className="text-[10px]"> Founder & CEO, Huddle</p>
                </div>
            </div>
            </p>

        </div>
    </>    
    )
}