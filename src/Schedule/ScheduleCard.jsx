import React from "react";
import { Envelope, Clock, Map } from "../Icons/Icons";

const ScheduleCard = ({
  image,
  theme,
  speakerName,
  speakerMail,
  startTime,
  endTime,
  speakerAddress,
}) => {
  return (
    <div className="schedule-card">
      <div className="schedule-card__image">
        <img src={image} alt="speaker" className="shedule-card__image--img" />
      </div>
      <div className="schedule-card__middle">
        <h4 className="schedule-card__theme">{theme}</h4>
        <div className="shedule-card__speaker-details">
          <p className="speaker-card__speaker--name">
            <Envelope /> {speakerName}
          </p>
          <p className="speaker-card__speaker--name">
            <Envelope /> {speakerMail}
          </p>
        </div>
      </div>
      <div className="speaker-card__right">
        <p className="speaker-card__right--dt speaker-card__time">
          <Clock /> {startTime} - {endTime}
        </p>
        <p className="speaker-card__right--dt speaker-card__location">
          <Map /> {speakerAddress}
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
