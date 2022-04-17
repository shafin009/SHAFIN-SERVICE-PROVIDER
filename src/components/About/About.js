import React from 'react';
import shafin from './shafin.JPG'

const About = () => {
    return (
        <div>
            <div className="text-center">
                <img src={shafin} className="rounded w-50 mx-auto d-block" alt="..." />
            </div>
            <br />
            <h1 className='text-center text-2xl'><span className='text-center text-xl font-serif fw-bold'>Name:</span> Tanvir Rahman Shafin</h1>
            <br />
            <p className='text-center text-xl fw-bold'>Hello! This year is so special and memorable for me. Because I am learning web development this year. My goal is so high and one day I will build a website like Facebook, Twitter etc. I believe in myself and any situation I don't give up. Hardworking is my real keynote and one day I will achieve my dream. </p>
        </div>
    );
};

export default About;