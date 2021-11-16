import React from "react";

class Contact extends React.Component {
    render() { 
        return <div>
            <h2 className="font-bold my-5 font-sans">Contact Details</h2>
            <div className="mx-20 flex flex-col  text-sm sm:px-4 md:text-md font-bold font-mono shadow-sm rounded-md">
                <ul>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 my-3 mx-4 inline-block" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                    <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                        <li>
                            <a href="tel:260978826468">Phone Number : <span className="text-gray-500 underline hover:text-gray-900">+260978826468</span></a>
                        </li>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 my-3 mx-4 inline-block" 
                            viewBox="0 0 20 20" 
                            fill="currentColor">
                    <path fillRule="evenodd" 
                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" 
                        clipRule="evenodd" />  
                    </svg>
                    <li className="flex flex-col">
                                <a href="mailto:mofyan39@gmail.com">Email: <span className="text-gray-500 underline hover:text-gray-900">mofyan39@gmail.com</span></a>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 my-3 mx-4 inline-block" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <li>
                        <a href="https://www.linkedin.com/in/mofya-ndabala-10a97b138/">LinkedIn Profile:<span className="text-gray-500 underline hover:text-gray-900">Mofya Ndabala</span></a>
                    </li>
                    <li className="my-10">
                        <a href="https://github.com/HoodLegend"> GitHub: <span className="text-gray-500 underline hover:text-gray-900">Mofya Ndabala</span></a>
                    </li>
                </ul>
            </div>
        </div>
    }
}
 
export default Contact;