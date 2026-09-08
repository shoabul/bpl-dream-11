// import React from 'react';
import Logo from "../assets/logo.png"

const Nav = () => {
    return (
        <nav className="mt-10">
            <div className="flex justify-between container mx-auto">
            <img src={Logo} alt="Logo" />
            
            <ul className="flex gap-6 items-center">
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                <button className="btn btn-active">0 Coin</button>
            </ul>
            
            </div>
        </nav>
    );
};

export default Nav;