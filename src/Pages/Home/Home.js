import React from 'react';
import backgroundImage from '../../images/background-2.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='background overflow-hidden'>
            <h1 className='text-3xl font-semibold text-center'>Welcome to MediAid</h1>
            <img src={backgroundImage} alt="backgroundImage" />
        </div>
    );
};

export default Home;