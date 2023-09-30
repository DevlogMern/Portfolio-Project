import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="container" style={{ width: "60%", marginTop: "200px" }}>
        <p className="mt-5 lead" style={{ color: "#eecd60" }}>
          ABOUT ME
        </p>
        <h1>
          Biograohy
          <hr />
        </h1>
        <p>
          <b className="lead">Well,</b> I'm a Fresher Web Developer.
        </p>
        <p className="lead" style={{ marginTop: "100px" }}>
          <div className="row ">
            <div className="col-4">
              <p>NAME</p>
              <p>BIRTHDAY</p>
              <p>PHONE</p>
              <p>EMAIL</p>
              <p>ADDRESS</p>
            </div>

            <div className="col-4" style={{ width: "200px" }}>
              <p>Yogesh</p>
              <p>12th August 2000</p>
              <p>(+91) 8287341503</p>
              <p>yogesh94555@gmail.com</p>
              <p>Bijwasan, Near_by Sec-21 Dwarka</p>
            </div>
          </div>
        </p>
      </div>
    </>
  );
};

export default AboutMe;
