import React from 'react';
import './About.css';
import about from '../../assets/about.jpeg'

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          Welcome to our platform! We are dedicated to bringing people together through exciting events and activities.
          Our team works hard to ensure you have the best experience, whether you’re here for a music concert, a technical
          workshop, or a dance performance. We believe in fostering a community that supports creativity, innovation, and fun.
        </p>
        <p className="about-us-text">
          Our platform is designed to help you find events that match your interests, connect with like-minded individuals, 
          and make unforgettable memories. Thank you for being a part of our community, and we look forward to having you 
          with us at future events!
        </p>
        <p className="about-us-signature">- The EventQuill Team</p>
      </div>
      <div className="about-us-image-container">
        <img 
          src={about} 
          alt="About Us" 
          className="about-us-image"
        />
      </div>
    </div>
  );
};

export default About;
