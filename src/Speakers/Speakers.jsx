import React from "react";
import Title from "../UI/Title";
import Speaker from "./Speaker";

import { speakersData } from "./speakersdata";

const Speakers = () => {
  
  return (
    <section className="speakers__section" id="speakers">
      <Title
        mainTitle="speakers"
        description="Important people who will be sharing something in the event"
      />
      <div className="speakers__container">
        {speakersData.map((el, i) => (
          <Speaker
            image={el.image}
            name={el.name}
            occupation={el.occupation}
            facebookLink={el.facebookLink}
            twitterLink={el.twitterLink}
            igLink={el.igLink}
            linkedInLink={el.linkedInLink}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
