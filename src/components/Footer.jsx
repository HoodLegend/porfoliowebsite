import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


function Footer () {
    const getYear = () => {
        return new Date().getFullYear(); 
    }

    
    return (
    <div>
        <Router> 
        <footer className="bg-gray-700
            text-lg text-white text-center
            border-t-4 border-black-500
            fixed
            inset-x-0
            bottom-0
            font-bold 
            font-mono
            text-center 
            p-4 
            lg:text-2xl sm:text-lg md:text-xl
            shadow-sm
             ">
              <div className="my-5 py-2 font-bold relative">
                <a className="pr-4 hover:text-gray-900" href="/" >Home</a>
                <a className="pr-4 hover:text-gray-900" href="/About">About</a>
                <a className="pr-4 hover:text-gray-900" href="/Contact">Contact</a>
            </div>
            &copy; Mofya Ndabala <span>{ getYear() }</span> Production.
             
              </footer>
        </Router>

    </div>

    ); 
    
}

export default Footer; 