import React from 'react'; 
import { BrowserRouter as Router } from 'react-router-dom';


const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className= {isOpen ? 'grid grid-rows-4 text-center items-center bg-blue-200 font-bold font-mono text-md shadow-sm' : 'hidden'} 
        onClick={toggle} >
            <Router>
            <a className='p-4' href="/">Home</a>
            <a className='p-4'href="/About">About</a>
            <a className='p-4'href="/Contact">Contact</a>
            </Router>
        </div>
    )
}

export default Dropdown
