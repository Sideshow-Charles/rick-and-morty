import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div>
            <p className="text-emerald-400 text-right mt-28 font-indie text-3xl">&copy;{currentYear}</p>
        </div>
    )
}

export default Footer;