import React from "react";
import speaker from "../assets/images/speaker-main-home.png";
// import speaker from '../assets/images/speaker-main2.png';
import ButtonTicket from "../UI/ButtonTicket";

const Home = () => {
  return (
    <section className="home">
      {/* <div className="helper"> */}
      <div className="home__box home__left-text">
        <div className="home__textbox">
          <h1 className="home__title">
            <span className="home__title--sub">developers</span>
            <span className="home__title--main">conference 2023</span>
          </h1>
          <p className="home__title--venue-dt">
            February 18<sup>th</sup> - 24<sup>th</sup>, 2030 Kirinyaga
            university kenya
          </p>

          <div className="countdown">
            <div className="countdown__element">
              <span className="countdown__element-count">999</span>
              <span className="countdown__element--desc">days</span>
            </div>
            <div className="countdown__element">
              <span className="countdown__element-count">99</span>
              <span className="countdown__element--desc">hours</span>
            </div>
            <div className="countdown__element">
              <span className="countdown__element-count">56</span>
              <span className="countdown__element--desc">minutes</span>
            </div>
            <div className="countdown__element">
              <span className="countdown__element-count">44</span>
              <span className="countdown__element--desc">seconds</span>
            </div>
          </div>
          <ButtonTicket
            text="book ticket"
            to={"https://www.linkedin.com/in/otwoma"}
          />
        </div>
      </div>
      {/* </div> */}
      <div className="home__box home__right-image">
        <div className="home__image">
          <img src={speaker} alt="event speaker" className="home__image--img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
