import React from 'react'
import Image from "../../assets/avatar-1.svg"
import "./About.css"

const About = () => {
  return (
    <section className="about container section" id="about">
        <h2 className='section_title'>About Me</h2>
        <div className='about_container grid'>
            <img src={Image} alt="" className='about_img'/>
            <div className='about_data grid'>
                <div className='about_info'>
                    <p className='about_description'>Hi, I'm Kota Shanmukha Kartheek , currently pursuing B.Tech in Computer Science and Engineering at SASTRA University, Thanjavur. I have a deep passion for emerging technologies, with a particular interest in Machine Learning(ML) , Data Science. My enthusiasm for tech extends to Artificial Intelligence (AI), where I am eager to contribute and innovate.</p>
                    <p className='about_description'>In addition to my interests in ML and AI, I am actively involved in Web Development projects. This hands-on experience has honed my skills in creating dynamic and responsive web applications. I am constantly exploring new advancements in technologies to stay updated with industry trends.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About