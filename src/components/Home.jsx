import React from 'react';
import Typical from 'react-typical';


class Home extends React.Component {
    render() { 
        return(
        <div>
            <div className='lg:text-5xl sm:text-3xl md:text-5xl text-3xl  my-14'>
                <h1 className='text-gray-700 font-bold'>My Portfolio</h1>
                <br />
                <div className='text-gray-600 flex flex-col flex-row font-mono font-bold  p-4 mr-5 ml-2'>
                <h2>Hi I am Mofya Ndabala.</h2>
                <strong> I am {' '}
                    <Typical
                        steps={[
                            'a vibrant person', 
                            1000, 
                            'an Enthusiastic person', 
                            1000, 
                            'Creative',
                            1000, 
                            'a Constant Learning Machine', 
                            1000, 
                            'a Developer that loves to Learn New things and Work with other people.', 
                            1000
                        ]}
                        wrapper= "p"
                        loop={Infinity}
                        />
                     </strong>
                </div>
               
            
            </div>
            </div>
        );
    }
}
 
export default Home;