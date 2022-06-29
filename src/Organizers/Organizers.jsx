import React, { useRef } from "react";
import Title from '../UI/Title'
import Organizer from "./Organizer";
import organizer1 from "../assets/images/speaker3.jpg";
import organizer2 from "../assets/images/speaker10.jpg";
import organizer3 from "../assets/images/speaker6.jpg";
import organizer4 from "../assets/images/speaker7.jpg";
import organizer5 from "../assets/images/speaker9.jpg";
import organizer6 from "../assets/images/speaker8.jpg";

const Organizers = () => {
  const mainScrollContainerRef = useRef();
  let childrenToScroll;
  let currentIndex = 0;

  React.useEffect(() => {
    childrenToScroll = Array.from(
      mainScrollContainerRef.current.children
    );
    childrenToScroll.forEach((child, index) => {
      child.style.transform = `translateX(${index * 100}%)`;
    });
  });

  const handleRightScroll = () => {
    currentIndex++;
    if(currentIndex === childrenToScroll.length){
      currentIndex = 0
    }
    childrenToScroll.forEach((child,index) => {
      child.style.transform = `translateX(${(index-currentIndex) * 105}%)`;
    })
  };

  const handleLeftScroll = () => {
    currentIndex--;
    if(currentIndex < 0){
      currentIndex = childrenToScroll.length-1;
    }
    childrenToScroll.forEach((child, index) => {
      child.style.transform = `translateX(${(index-currentIndex) * 100}%)`;
    })
  };
  return (
    <section className="organizers-section" id="organizers">
      <Title mainTitle="organizers" description="people who have been working tirelessy for this event to be a success"/>
      <div className="organizers__container">
        <div
          className="organizers__cards--scroll-help"
          ref={mainScrollContainerRef}
        >
          <Organizer
            image={organizer1}
            occupation="software engineer"
            orgnizerName="felix omuok"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />

          <Organizer
            image={organizer2}
            occupation="software engineer"
            orgnizerName="stephen tharua"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />
          <Organizer
            image={organizer4}
            occupation="software engineer"
            orgnizerName="dennis otwoma"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />
          <Organizer
            image={organizer3}
            occupation="software engineer"
            orgnizerName="abubakar ali"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />
          <Organizer
            image={organizer5}
            occupation="software engineer"
            orgnizerName="humphrey muriungi"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />
          <Organizer
            image={organizer6}
            occupation="software engineer"
            orgnizerName="samuel ochiel"
            description="Were he beginning green said them rule face, in have heaven every he midst deep third give us night, creepeth.daily"
            email="hisemail@server.com"
            messageNumber="+254743487923"
          />
        </div>
      </div>
      <div className="organizers-button-container">
        <button
          className="organizers__scrollbtn scrollbtn-left"
          onClick={handleLeftScroll}
        >
          <span>&larr;</span>
        </button>
        <button
          className="organizers__scrollbtn scrollbtn-right"
          onClick={handleRightScroll}
        >
          <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default Organizers;
