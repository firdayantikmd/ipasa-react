import React from "react";
import "./Hero.css";
import { IconSquareArrowDown } from '@tabler/icons-react';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>GIHBOR Plastics: <br /> <span className="hero-span">Innovating Packaging Solutions</span></h1>
        <p>Crafting Excellence in Plastic Bag Manufacturing Since 1968</p>
        <button className="learn-more-button">
          <a href="#about">Learn More</a> <IconSquareArrowDown size={16} />
        </button>
      </div>
      <div className="hero-image">
        <img src="/assets/images/hero.png" alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;