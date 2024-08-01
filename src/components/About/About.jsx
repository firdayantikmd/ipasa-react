import React from "react";
import "./About.css";
import { IconJetpack, IconTargetArrow } from '@tabler/icons-react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>Gihbor has been a cornerstone in the plastic bag industry <br /> <span>since 1968.</span> </h2>
        <p>Originating from humble beginnings in Guadalajara, Mexico, our founder, Mr. Avelar, ventured into the toy business before recognizing the burgeoning opportunity in plastic bag manufacturing. With a commitment to quality and service, Avelar Plastics has grown to become a leader in the field, known for our vibrant colors, precise craftsmanship, and dedication to sustainability.</p>
        <div className="about-content">
          <div className="content-card">
            <div className="icon">
              <IconJetpack stroke="#FFFFFF" />
            </div>
            <h3>Vision</h3>
            <p>"To be the foremost innovators in the global plastic packaging industry, recognized for pioneering sustainable practices and setting unparalleled standards in quality and customer satisfaction."</p>
          </div>
          <div className="content-card-container">
            <div className="content-card">
              <div className="icon">
                <IconTargetArrow stroke="#FFFFFF" />
              </div>
              <h3>Mission</h3>
              <h4>Innovative Excellence</h4>
              <p>Continuously innovate our plastic packaging solutions to meet and exceed the evolving needs of boutique, retail, and agricultural sectors. Utilize cutting-edge technology and 100% recycled materials to promote environmental sustainability.</p>
            </div>
            <div className="content-card">
              <div className="icon">
                <IconTargetArrow stroke="#FFFFFF" />
              </div>
              <h3>Mission</h3>
              <h4>Customer Commitment</h4>
              <p>Provide exceptional service characterized by flexibility, personalized attention, and on-time delivery. Build enduring partnerships by consistently surpassing customer expectations in product quality and support.</p>
            </div>
            <div className="content-card">
              <div className="icon">
                <IconTargetArrow stroke="#FFFFFF" />
              </div>
              <h3>Mission</h3>
              <h4>Environmental Responsibility</h4>
              <p>Promote sustainable manufacturing practices to reduce our ecological footprint and contribute positively to the circular economy. Aim to set benchmarks for environmental stewardship within the plastic packaging industry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;