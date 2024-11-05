import "./About.scss"

import about from "../../assets/about.png"
import React from 'react'

const About = () => {
  return (
    <div className="hero container">
        <div className="hero__wrapper">
            <div className="hero__image">
                <img src={about} alt="" />
            </div>
            <div className="hero__text">
                <h2 className="hero__title">Food Stalls with Persons but  to  Product marketing plane
                    catlogues etc to. 
                </h2>
                <p className="hero__desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                equipment  make your marketing plane Effective.</p>
                <div className="hero__btns">
                    <button className="hero__btn">Read More</button>
                    {/* <button className="hero__btn">Food Details</button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About