import React from 'react'; 

function Skills () {
    return (<>
     <div className='flex flex-rol flex-col items-center font-bold font-mono  text-md bg-blue-100  shadow-md text-gray-700 p-6 my-10 mx-10'>
                <h2 className='my-5'>Skills</h2>
                <ul>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Boostrap</li>
                    <li>Laravel</li>
                    <li>Spring boot</li>
                    
                </ul>
                <h1 className='my-5'>Projects</h1>
                
                <a href='https://autocarleasing.herokuapp.com/' className='underline hover:text-gray-900'>-Car Leasing System</a>
                <a href='https://github.com/HoodLegend/ZESCO-Issue-Tracking-System' className='underline hover:text-gray-900'>-ZESCO Issue Tracking System</a>
    
                
            </div>

    </>);
}
export default Skills; 