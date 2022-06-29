import React from "react";

import { LinkedIn, Twitter, Instagram, Facebook } from "../Icons/Icons";

const Speaker = ({
  image,
  name,
  occupation,
  facebookLink,
  twitterLink,
  linkedInLink,
  igLink,
}) => {
  return (
    <div className="speaker">
      <div className="speaker__social">
        <a href={linkedInLink} className="speaker__social--link">
          <LinkedIn />
        </a>
        <a href={twitterLink} className="speaker__social--link">
          <Twitter />
        </a>
        <a href={igLink} className="speaker__social--link">
          <Instagram />
        </a>
        <a href={facebookLink} className="speaker__social--link">
          <Facebook />
        </a>
      </div>
      <img src={image} alt={name} className="speaker__image" />
      <div className="speaker__details">
        <h4 className="speaker__details--name">{name}</h4>
        <p className="speaker__details--occupation">{occupation}</p>
      </div>
    </div>
  );
};

export default Speaker;
