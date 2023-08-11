import React from "react";
import HeroImage from "../assets/images/2294143541-RAMMobileHero.webp"

const HeroSection = () => {
    return (
        <div>
            <p className="font-indie text-6xl text-emerald-400 mt-48 ml-10 mr-10 max-sm:ml-5 max-sm:ml-5 max-sm:mr-5">CHECK OUT LOCATIONS, CHARACTERS AND EPISODES OF YOUR FAVORITE TV SHOW, RICK & MORTY<br></br> Wubba Lubba Dub Dub!</p>
            <div className="flex flex-col-reverse justify-between items-center ml-10 mr-10 mt-32 max-sm:ml-5 max-sm:mr-5">
                <p className="font-indie text-4xl text-emerald-400 text-center">Morty: We all remember you as a friend.<br /><br />
                    Rick: Oh, really? Well, I remember you as a whiny little piece of shit, Morty.<br /><br />
                    Morty: Oh, yeah?<br /><br />
                    Rick: Yeah! I've got about a thousand memories of your dumb little ass and about six of them are pleasant. The rest is annoying garbage. So why don't you do us both a favor and pull the trigger? Do it! Do it, motherfucker! Pull the fucking trigger!</p>

                <img src={HeroImage} alt="Hero" className="mb-28 w-10/12 rounded-lg max-sm:w-full" />
            </div>
        </div>
    )
}

export default HeroSection;