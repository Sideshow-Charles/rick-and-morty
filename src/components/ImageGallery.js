import React from "react";
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


const ImageGallery = () => {
    return (
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
    )
}

export default ImageGallery;