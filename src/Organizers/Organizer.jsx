import React from "react";
import {
  Envelope,
  PaperPlane,
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
} from "../Icons/Icons";

const Organizer = ({
  image,
  occupation,
  orgnizerName,
  description,
  email,
  messageNumber,
}) => {
  return (
    <div className="organizer">
      <div className="organizer__image">
        <img src={image} alt={orgnizerName} className="organizer__image--img" />
      </div>
      <div className="organizer__details">
        <p className="organizer__details--occupation">{occupation}</p>
        <h4 className="organizer__name">{orgnizerName}</h4>
        <p className="organizer__details--description">{description}</p>
        <div className="organizer__details--social-main">
          <Envelope />
          <p className="organizer__details--social-text">{email}</p>
        </div>
        <div className="organizer__details--social-main">
          <PaperPlane />
          <p className="organizer__details--social-text">{messageNumber}</p>
        </div>
        <div className="organizer__social-links">
          <a href="/" className="organizer__social-links--link">
            {" "}
            <LinkedIn />
          </a>
          <a href="/" className="organizer__social-links--link">
            {" "}
            <Twitter />
          </a>
          <a href="/" className="organizer__social-links--link">
            {" "}
            <Instagram />
          </a>
          <a href="/" className="organizer__social-links--link">
            {" "}
            <Facebook />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Organizer;
