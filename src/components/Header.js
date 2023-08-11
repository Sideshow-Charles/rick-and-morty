import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from "../assets/images/Logo.png";
import Location from "../components/Location"

const Header = () => {
    return (
        <Router>
            <div className="pl-5 pr-5 mt-3 flex justify-between">
                <div className="logo__container">
                    <img src={Logo} alt="App Logo" className="w-1/6" />
                </div>
                <ul className="flex items-center justify-around w-4/12 font-indie text-2xl text-emerald-400 max-sm:hidden">
                    <li><Link to={'/location'}>Locations</Link></li>
                    <li>Characters</li>
                    <li>Episodes</li>
                </ul>
                <Routes>
                    <Route path='/location' element={<Location />}></Route>
                </Routes>
            </div>
        </Router>

    )
}

export default Header;