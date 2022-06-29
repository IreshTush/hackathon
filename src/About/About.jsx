import React from "react";
import AboutCard from "./AboutCard";
import { Transport, Catering, Hotel, Map } from "../Icons/Icons";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <AboutCard
          icon={<Map />}
          title="date and venue"
          description="18th - 24th 2030 Kirinyaga University Kenya, mess 1st floor from 8:00am to 6:00pm "
        />
        <AboutCard
          icon={<Transport />}
          title="transport"
          description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
        />
        <AboutCard
          icon={<Catering />}
          title="catering"
          description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
        />
        <AboutCard
          icon={<Hotel />}
          title="accomodation"
          description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
        />
      </div>
    </section>
  );
};

export default About;
