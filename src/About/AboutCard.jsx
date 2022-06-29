import React from "react";

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="about-card">
      <div className="about-card__icon">
        <span className="about-card--bubble"></span>
        {icon}
      </div>
      <h4 className="about__title">{title}</h4>
      <p className="about__description">{description}</p>
    </div>
  );
};

export default AboutCard;
