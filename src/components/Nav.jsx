import React from "react";
import logo from "../public/logo.svg";


export default function Nav() {

    return (
        <div className="container flex justify-around my-8 place-items-center">
            <img src={logo} alt="Fylo-logo" className="w-20"/>
            <nav>
                <ul className="flex gap-4 font-light text-sm">
                    <li>Features</li>
                    <li>Team</li>
                    <li>Sign In</li>
                </ul>
            </nav>
        </div>
    )
    
}