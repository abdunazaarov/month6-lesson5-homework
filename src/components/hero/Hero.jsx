import "./Hero.scss"
import hero from "../../assets/hero.jpg"

import React from 'react'

const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero__wrapper">
            <div className="hero__text">
                <h2 className="hero__title">Making time a good time by making food the good food.</h2>
                <p className="hero__desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                <div className="hero__btns">
                    <button className="hero__btn">Order Now</button>
                    <button className="hero__btn">Food Details</button>
                </div>
            </div>
            <div className="hero__image">
                <img src={hero} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero