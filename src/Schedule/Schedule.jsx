import React, { useRef } from "react";
import ScheduleCard from "./ScheduleCard";
import speaker1 from "../assets/images/speaker9.jpg";
import speaker2 from "../assets/images/speaker7.jpg";
import speaker3 from "../assets/images/speaker6.jpg";
import speaker4 from "../assets/images/speaker3.jpg";
import speaker5 from "../assets/images/speaker4.jpg";
import speaker6 from "../assets/images/speaker2.jpg";
import speaker7 from "../assets/images/speaker1.jpg";
import speaker8 from "../assets/images/speaker5.jpg";
import speaker9 from "../assets/images/speaker10.jpg";
import speaker10 from "../assets/images/speaker8.jpg";

const Schedule = () => {
  const mainSchedulesContainerRef = useRef(null);
  const buttonsContainerRef = useRef(null);
  const handleTabination = function (e) {
    // taking the button that was clicked itself and not the children of the button
    const clicked = e.target.closest(".schedule__button");

    // Reading the data attribute of the button and matching it to the corresponing day
    const dayClicked = clicked.dataset.day;

    // Removing the active class from any button that might have previously been having it
    const buttons = Array.from(buttonsContainerRef.current.children);
    buttons.forEach((button) => {
      button.classList.remove("schedule__button--active");
    });

    // adding the active class to the button that has been clicked
    clicked.classList.add("schedule__button--active");

    // selecting the children (i.e individual tab children) from the parent and creating an array out of them
    const childrenTabbed = Array.from(
      mainSchedulesContainerRef.current.children
    );

    // Looping through all of those children and removing the active class in case any of them has it so that it can be given to the required one
    childrenTabbed.forEach((child) => {
      child.classList.remove("shedule-active");
    });

    // Adding the active class to the required tab that matches the button that was clicked
    childrenTabbed.forEach((child) => {
      const dayName = child.dataset.day;
      if (dayClicked === dayName) {
        child.classList.add("shedule-active");
      }
    });
  };
  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule__container-main">
        <div className="schedule__container--buttons" ref={buttonsContainerRef}>
          <button
            className="schedule__button schedule__button--active"
            data-day="day 1"
            onClick={handleTabination}
          >
            <p className="shedule__button--day">day 1</p>
            <span className="shedule__button--date">february 18, 2023</span>
          </button>
          <button
            className="schedule__button"
            data-day="day 2"
            onClick={handleTabination}
          >
            <p className="shedule__button--day">day 2</p>
            <span className="shedule__button--date">february 18, 2023</span>
          </button>
          <button
            className="schedule__button"
            data-day="day 3"
            onClick={handleTabination}
          >
            <p className="shedule__button--day">day 3</p>
            <span className="shedule__button--date">february 18, 2023</span>
          </button>
          <button
            className="schedule__button"
            data-day="day 4"
            onClick={handleTabination}
          >
            <p className="shedule__button--day">day 4</p>
            <span className="shedule__button--date">february 18, 2023</span>
          </button>
          <button
            className="schedule__button"
            data-day="day 5"
            onClick={handleTabination}
          >
            <p className="shedule__button--day">day 5</p>
            <span className="shedule__button--date">february 18, 2023</span>
          </button>
        </div>

        <div
          className="schedule__container--schedules"
          ref={mainSchedulesContainerRef}
        >
          {/* first day schedule */}
          <div className="shedule shedule-active" data-day="day 1">
            <ScheduleCard
              image={speaker1}
              theme="getting started as a programmer"
              speakerName="humphrey muriungi"
              speakerMail="hismail@server.com"
              startTime="08:00 am"
              endTime="10:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker2}
              theme="your first html/css website"
              speakerName="Dennis otwoma"
              speakerMail="hismail@server.com"
              startTime="10:00 am"
              endTime="12:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker3}
              theme="no javascript no web"
              speakerName="Abubakar ali"
              speakerMail="hismail@server.com"
              startTime="02:00 pm"
              endTime="05:00 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker4}
              theme="deploy your first site to azure"
              speakerName="felix omuok"
              speakerMail="hismail@server.com"
              startTime="06:00 pm"
              endTime="08:30 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
          </div>
          {/* end of first day schedule */}

          {/* second event day */}
          <div className="shedule" data-day="day 2">
            <ScheduleCard
              image={speaker5}
              theme="why programming is hard to you"
              speakerName="bethany jepchumba"
              speakerMail="hermail@server.com"
              startTime="08:00 am"
              endTime="10:00 am"
              speakerAddress="Nairobi kenya, westlands"
            />
            <ScheduleCard
              image={speaker6}
              theme="overcoming imposter syndrome as a programmer"
              speakerName="ann wangari"
              speakerMail="hermail@server.com"
              startTime="10:00 am"
              endTime="12:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker7}
              theme="how to ask for help when you can't figure it out"
              speakerName="winnie mandela"
              speakerMail="hermail@server.com"
              startTime="02:00 pm"
              endTime="05:00 pm"
              speakerAddress="Nairobi kenya, karen"
            />
            <ScheduleCard
              image={speaker8}
              theme="how to help others who can't figure it out"
              speakerName="ivy mbogo"
              speakerMail="hermail@server.com"
              startTime="06:00 pm"
              endTime="08:30 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
          </div>
          {/* end of second event day */}

          {/* third event day */}
          <div className="shedule" data-day="day 3">
            <ScheduleCard
              image={speaker9}
              theme="introduction to data structures and algorithms"
              speakerName="stephen tharua"
              speakerMail="hismail@server.com"
              startTime="08:00 am"
              endTime="10:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker10}
              theme="all sorting algorithms marathon"
              speakerName="samuel okoth"
              speakerMail="hismail@server.com"
              startTime="10:00 am"
              endTime="12:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker1}
              theme="all data structures marathon"
              speakerName="humphrey muriungi"
              speakerMail="hismail@server.com"
              startTime="02:00 pm"
              endTime="05:00 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker2}
              theme="become a master in dynamic programming"
              speakerName="otwoma dennis"
              speakerMail="hismail@server.com"
              startTime="06:00 pm"
              endTime="08:30 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
          </div>
          {/* end of third event day */}

          {/* fourth event day */}
          <div className="shedule" data-day="day 4">
            <ScheduleCard
              image={speaker6}
              theme="crack the coding interview for FANG"
              speakerName="ann wangari"
              speakerMail="hermail@server.com"
              startTime="08:00 am"
              endTime="10:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker4}
              theme="How to analyze the Big O notation of your solution"
              speakerName="felix omuok"
              speakerMail="hismail@server.com"
              startTime="10:00 am"
              endTime="12:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker3}
              theme="demistifying common interview questions at FANG"
              speakerName="Abubakar ali"
              speakerMail="hismail@server.com"
              startTime="02:00 pm"
              endTime="05:00 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker5}
              theme="live sample codility interview"
              speakerName="bethany jepchumba"
              speakerMail="hermail@server.com"
              startTime="06:00 pm"
              endTime="08:30 pm"
              speakerAddress="Nairobi kenya, westlands"
            />
          </div>
          {/* end of fourth event day */}

          {/* fifth event day */}
          <div className="shedule" data-day="day 5">
            <ScheduleCard
              image={speaker1}
              theme="surviving your work environment"
              speakerName="humphrey muriungi"
              speakerMail="hismail@server.com"
              startTime="08:00 am"
              endTime="10:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker2}
              theme="establishing good relationhip with other programmers"
              speakerName="Dennis otwoma"
              speakerMail="hismail@server.com"
              startTime="10:00 am"
              endTime="12:00 am"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker3}
              theme="resolving issues at code work environment"
              speakerName="Abubakar ali"
              speakerMail="hismail@server.com"
              startTime="02:00 pm"
              endTime="05:00 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
            <ScheduleCard
              image={speaker4}
              theme="close up and networking"
              speakerName="felix omuok"
              speakerMail="hismail@server.com"
              startTime="06:00 pm"
              endTime="08:30 pm"
              speakerAddress="kirinyaga county kutus, morry hostels"
            />
          </div>
          {/* end of fifth event day */}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
