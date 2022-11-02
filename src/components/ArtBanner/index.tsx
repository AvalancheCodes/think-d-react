import React from "react";
import SvgContainer from "../SvgContainer";
import logo from "../../logo.svg";

const ArtBanner = () => {
  return (
    <div className="artwork-card animated-background row justify-content-between">
      <div className="col-lg-5 ps-5 col-md-4">
        <div
          className={`artwork-text card-img-overlay p-4 d-md-flex flex-md-column`}
        >
          <h1 className="text-white mb-md-2 pt-md-5 p-4 text-start">
            Think...
          </h1>
          <p className="muted-text-background mt-md-5 p-4 mt-5">
            With school turning out more runners, jumpers, racers, tinkerers,
            grabbers, snatchers, fliers, and swimmers instead of examiners,
            critics, knowers, and imaginative creators, the word 'intellectual,'
            of course, became the swear word it deserved to be.
            <br />
            <br />
            <cite title="Source Title pt-2">
              ― Ray Bradbury, Fahrenheit 451
            </cite>
          </p>
        </div>
      </div>
      <div className="col-md-auto p-0">
        {/*<div className="svg-container"></div>*/}
        <SvgContainer svg={logo} />
      </div>
    </div>
  );
};

export default ArtBanner;
