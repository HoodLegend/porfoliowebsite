import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom';


const Navbar = ( { toggle }) => {
    return (
        <div>
            <Router>
                 <nav className='flex items-center justify-between text-gray-500 bg-white font-sans font-bold relative shadow-sm h-16 lg:text-2xl sm:text-lg md:text-xl' role="navigation">
                    <div className='pr-8 md:block hidden'>
                        <a className='p-4' href="/">Home</a>
                        <a className='p-4'href="/About">About</a>
                        <a className='p-4'href="/Contact">Contact</a>
                        <Link className='p-4'to="/Skills"></Link>
                    </div>
                        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                            <path strokeLinecap="round" 
                                strokeLinejoin="round" strokeWidth={2} 
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                         </div>
                </nav>    
      </Router>
            
    </div>
    )
}

export default Navbar
