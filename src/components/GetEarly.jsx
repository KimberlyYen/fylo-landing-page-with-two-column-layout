import React from "react";
import ButtonEmail from "./ButtonEmail";

export default function GetEarly() {

    return (
        <div className="w-full ">
            
            <div className="flex-col py-2 mx-auto text-center text-white mt-14 bg-Desaturated-Blue">
               
                <div className="flex-col w-4/5 mx-auto my-20">
                    <div>
                        <h2 className="text-xl font-bold tracking-wide ">Get early access today</h2>
                        <p className="py-10 mx-auto text-lg font-light leading-relaxed tracking-wide">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                    </div>
                    <div className="w-4/5 mx-auto">
                        <ButtonEmail
                        placeholder="email@example.com"   
                        />
                    </div>
                </div>
                

            </div>
        </div>
    )
    
}