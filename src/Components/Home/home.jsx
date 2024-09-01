import React from 'react';
import './home.css';
import HeaderIcons from './HeaderIcons';
import Scroll from './Scroll';
import Me from "../../assets/avatar-2.svg";
import Typewriter from '../Typewriter';
const texts=[
    "Web Developer",
    "Computer Science Undergraduate",
    "Data Analyst"
];

const home = () => {
  return (
        <section className='home container' id='home'>
           
           <div className='intro'>
                
                <img src={Me} alt="profile" className="home_img" />
                <h1 className='home_name'>Kota Shanmukha Kartheek</h1>
                <div>
                    <span className='home_education'> I'm a <Typewriter texts={texts} speed={100} delay={2000} /></span>
                </div>

                <HeaderIcons />

                <a href="https://drive.google.com/file/d/1c8QBIkmkEXd3p0a6R9l2nceoulxL6p0n/view" className='btn' target="_blank"
          rel="noopener noreferrer">Resume</a>

                <Scroll />
            </div>
            
        </section>  
    )
}

export default home;