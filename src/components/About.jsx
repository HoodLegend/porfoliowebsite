import React from 'react';
import image from './images/img1.jpg';

class About extends React.Component {
    render() { 
        return <div className='bg-blue-200 my-5 mx-10 font-mono text-size-sm font-bold px-4 py-2 text-gray-700 leading-loose tracking-wide shadow-sm rounded-lg'>
            <div className='font-bold text-xl font-sans-serif text-align-center pt-2 pb-2'>
            <h2>About me</h2>
            <img src={image} alt='profile pic' className='w-36 h-36 rounded-full flex-col inline-flex border-4 border-gray-600 border-solid shadow-sm' />
            </div>
            <div className='flex flex-col px-2 py-2'>
            <p> My name is Mofya Ndabala. I am a Student Studying Computer Science at the Copperbelt University.
                I like to build cool stuff that solve real world problems.
                However, I describe myself as a team player and a fast Learner. 
                <a href="Skills" className='underline hover:text-gray-900'>Here</a> below are my skills and projects so far.
            </p>

            </div>    
        </div>
    }
}
 
export default About;