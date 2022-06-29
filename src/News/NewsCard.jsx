import React from "react";
import { Clock } from "../Icons/Icons";

const NewsCard = ({ linkToFullRed, image, tag, subtitle }) => {
  return (
    <a href={linkToFullRed} className="news-card">
      <p className="news-tag">{tag}</p>
      <img src={image} alt="news background _image" className="news__image" />
      <div className="news__main">
        <h5 className="news__main--subtitle">{subtitle}</h5>
        <p className="news__date">
          {" "}
          <Clock /> <span>{new Date().toLocaleDateString()}</span>
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
