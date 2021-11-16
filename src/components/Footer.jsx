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
            p-4
            shadow-sm
             ">
            &copy; Mofya Ndabala <span>{ getYear() }</span> Production.
             
              </footer>
        </Router>

    </div>

    ); 
    
}

export default Footer; 