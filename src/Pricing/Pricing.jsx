import React from "react";
// import Title from "../UI/Title";
import { Star } from "../Icons/Icons";

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      {/* <Title mainTitle="Pricing" description="The event is free but do you want to get exclusive benefits including catering, accomodation and personal mentorship? Then choose your plan" /> */}
      <div className="pricing-cards-container">
        {/* first pricing */}
        <div className="pricing-card">
          <h4 className="pricing-type">1 day pass</h4>
          <div className="price-box">
            <h4 className="price">
              <sup>$</sup>129
            </h4>
          </div>
          <div className="benefits">
            <ol className="pricing-benefits-list">
              <li className="pricing-benefits-list__item">
                One day conference ticket
              </li>
              <li className="pricing-benefits-list__item">coffee breaks</li>
              <li className="pricing-benefits-list__item">
                free lunch and networking
              </li>
              <li className="pricing-benefits-list__item">keynote talk</li>
              <li className="pricing-benefits-list__item">
                talk to the editorial team
              </li>
            </ol>
          </div>
          <a href="/" className="pricing__book">
            Get ticket &rarr;
          </a>
        </div>
        {/* end of first pricing */}

        {/* second pricing card */}
        <div className="pricing-card pricing-card__scaled">
          <div className="pricing-badge">
            <Star />
          </div>
          <h4 className="pricing-type">full pass</h4>
          <div className="price-box">
            <h4 className="price">
              <sup>$</sup>429
            </h4>
          </div>
          <div className="benefits">
            <ol className="pricing-benefits-list">
              <li className="pricing-benefits-list__item">
                All days conference ticket
              </li>
              <li className="pricing-benefits-list__item">unlimited coffee</li>
              <li className="pricing-benefits-list__item">
                free lunch and networking
              </li>
              <li className="pricing-benefits-list__item">keynote talk</li>
              <li className="pricing-benefits-list__item">
                talk to the editorial team
              </li>
            </ol>
          </div>
          <a href="/" className="pricing__book">
            Get ticket &rarr;
          </a>
        </div>
        {/* end of second pricing card */}

        {/* Third pricing card */}
        <div className="pricing-card">
          <h4 className="pricing-type">group pass</h4>
          <div className="price-box">
            <h4 className="price">
              <sup>$</sup>229
            </h4>
          </div>
          <div className="benefits">
            <ol className="pricing-benefits-list">
              <li className="pricing-benefits-list__item">
                One day conference ticket
              </li>
              <li className="pricing-benefits-list__item">coffee breaks</li>
              <li className="pricing-benefits-list__item">
                free lunch and networking
              </li>
              <li className="pricing-benefits-list__item">keynote talk</li>
              <li className="pricing-benefits-list__item">
                talk to the editorial team
              </li>
            </ol>
          </div>
          <a href="/" className="pricing__book">
            Get ticket &rarr;
          </a>
        </div>
        {/* end of Third pricing card */}
      </div>
    </section>
  );
};
export default Pricing;
