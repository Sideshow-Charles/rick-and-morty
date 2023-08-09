import React from "react";
import HeroImage from "../assets/images/heroimage.jpeg";
import HeroGif from "../assets/images/rick-and-morty gif.gif"

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse justify-between items-center ml-10 mr-10 mt-48">
            <h1 className="font-indie text-4xl text-emerald-400 w-9/12">Morty: We all remember you as a friend.<br /><br />
                Rick: Oh, really? Well, I remember you as a whiny little piece of shit, Morty.<br /><br />
                Morty: Oh, yeah?<br /><br />
                Rick: Yeah! I've got about a thousand memories of your dumb little ass and about six of them are pleasant. The rest is annoying garbage. So why don't you do us both a favor and pull the trigger? Do it! Do it, motherfucker! Pull the fucking trigger!</h1>

            <img src={HeroGif} alt="Hero Image" className="mb-28 w-9/12" />
        </div>
    )
}

export default HeroSection;