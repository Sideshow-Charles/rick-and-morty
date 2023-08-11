import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div>
            <p className="text-emerald-400 text-center mt-28 font-indie text-3xl">Not affliated in anyway with Rick and Morty or Adult Swim</p><br/>
            <p className="text-emerald-400 text-center mb-10 font-indie text-3xl">&copy;{currentYear}</p>
        </div>
    )
}

export default Footer;