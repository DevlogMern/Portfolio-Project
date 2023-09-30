import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";

const Introduction = () => {
  return (
    <>
      <p
        className="display-6 text-center mt-5"
        style={{ marginBottom: "100px", color: "#eecd60" }}
      >
        Hello,
        <span
          style={{
            borderBottom: "1px solid white",
            padding: "0px 0px 5px 10px",
            color: "#eecd60",
          }}
        >
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={["I'm Yogesh", "I'm Developer", "This is My Portfolio"]}
          />
          {/* Yogesh */}
        </span>
      </p>
      <div className="container" style={{ height: "400px" }}>
        <div className="col-4" style={{ float: "left", height: "400px" }}>
          <img
            src="./img/introImage.jpg"
            style={{ height: "400px", boxShadow: "-0.5px 0.2px white" }}
          />
          <hr />
        </div>
        <div className="col-6" style={{ float: "right", height: "400px" }}>
          <p className="mt-5 lead" style={{ color: "#eecd60" }}>
            INTRODUCTION
          </p>
          <h1>
            Front-End-Developer
            <hr />
          </h1>
          <p>
            <b className="lead">Hey There,</b> I design and Develop services for
            customerers of all sizes,specializing in creating Stylish, Modern
            Website, web services and online stores.
            <img src="./img/Yogesh signature.png" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
