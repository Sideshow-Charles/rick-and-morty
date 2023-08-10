import React from "react";
// import { useEffect } from "react";
import HeroImage from "../assets/images/2294143541-RAMMobileHero.webp"
import Gallery1 from "../assets/images/220917-smith-rick-and-morty-hero_csirl9.jpeg"
import Gallery2 from "../assets/images/Rick-and-Morty-Netflix-Nederland-verwijderd-1068x601.png.webp"
import Gallery3 from "../assets/images/rick-morty-peace-season-5.webp"
import Gallery4 from "../assets/images/hero-image.jpeg"
import Gallery5 from "../assets/images/heroimage.jpeg"
import Gallery6 from "../assets/images/newFile-1.avif"
import Gallery7 from "../assets/images/rick-and-morty-season-6-rick-sanchez.avif"
import Gallery8 from "../assets/images/rick-and-morty-web.jpg"
import Gallery9 from "../assets/images/rick-morty-season-5.jpg"
import Gallery10 from "../assets/images/rick3.webp"

const HeroSection = () => {
    // useEffect(() => {
    //    const Characters = fetch(`https://rickandmortyapi.com/api/character`)
    //         .then((response => response.json()))
    //         .then((data => console.log(data)))

    //         console.log(Characters[1].name);
    // })

    return (
        <div>
            <p className="font-indie text-6xl text-emerald-400 mt-36 ml-16 mr-16">CHECK OUT LOCATIONS, CHARACTERS AND EPISODES OF YOUR FAVORITE TV SHOW, RICK & MORTY<br></br> Wubba Lubba Dub Dub!</p>
            <div className="flex flex-col-reverse justify-between items-center ml-10 mr-10 mt-32">
                <p className="font-indie text-4xl text-emerald-400 w-9/12">Morty: We all remember you as a friend.<br /><br />
                    Rick: Oh, really? Well, I remember you as a whiny little piece of shit, Morty.<br /><br />
                    Morty: Oh, yeah?<br /><br />
                    Rick: Yeah! I've got about a thousand memories of your dumb little ass and about six of them are pleasant. The rest is annoying garbage. So why don't you do us both a favor and pull the trigger? Do it! Do it, motherfucker! Pull the fucking trigger!</p>

                <img src={HeroImage} alt="Hero" className="mb-28 w-10/12 rounded-lg" />
            </div>

            <div className="flex justify-around flex-wrap ml-20 mr-20 mt-48 mb-24">
                <img src={Gallery1} alt="Gallery" className="w-2/6 " />
                <img src={Gallery2} alt="Gallery" className="w-2/6 " />
                <img src={Gallery3} alt="Gallery" className="w-2/6 " />
                <img src={Gallery4} alt="Gallery" className="w-1/6 " />
                <img src={Gallery5} alt="Gallery" className="w-2/6 " />
                <img src={Gallery6} alt="Gallery" className="w-3/6 " />
                <img src={Gallery7} alt="Gallery" className="w-3/6 " />
                <img src={Gallery8} alt="Gallery" className="w-3/6 " />
                <img src={Gallery9} alt="Gallery" className="w-3/6 " />
                <img src={Gallery10} alt="Gallery" className="w-3/6 " />
            </div>
        </div>
    )
}

export default HeroSection;