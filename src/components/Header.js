import React from "react";
import Logo from "../assets/images/Logo.png"

const Header = () => {
    return (
        <div className="pl-5 pr-5 mt-3 flex">
            <div className="logo__container">
                <img src={Logo} alt="App Logo" className="w-1/6" />
            </div>
            <ul className="flex items-center justify-around w-4/12 font-indie text-2xl text-emerald-400">
                <li>Locations</li>
                <li>Characters</li>
                <li>Episodes</li>
            </ul>
        </div>
    )
}

export default Header;