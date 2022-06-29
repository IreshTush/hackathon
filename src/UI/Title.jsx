import React from "react";

const Title = ({ mainTitle, description }) => {
  return (
    <div className="title-box">
      <h2 className="title__title">{mainTitle}</h2>
      <p className="title__description">{description}</p>
    </div>
  );
};
export default Title;