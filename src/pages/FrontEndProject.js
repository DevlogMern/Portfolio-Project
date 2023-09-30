import React from "react";

const FrontEndProject = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <h1>FRONT-END PROJECTS</h1>
        <hr />
        <div className="container">
          <p className="lead" style={{ color: "#eecd60" }}>
            + E - Commerce:
            <a
              href="https://reduxtoolkitstore.netlify.app/"
              className="link-primary"
            >
              Click to Check My First E-Commerce web App
            </a>
            <p className="mt-2" style={{ fontSize: "15px" }}>
              Discription : I’ve created complete website by my own it’s a
              Product stuff related website it also let a user purchase any
              Product, it has very pretty overview and website is so lite with
              attractive transitions and animations.
            </p>
            <p className="mt-2" style={{ fontSize: "15px" }}>
              Technology Used – : HTML 5, CSS 3, JavaScript, Bootstrap, ReactJS,
              Redux-Toolkit.
            </p>
          </p>

          <p className="lead" style={{ color: "#eecd60" }}>
            + E - Commerce:
            <a
              href="https://newe-commere.netlify.app/"
              className="link-primary"
            >
              Click to Check My Second E-Commerce web App
            </a>
            <p className="mt-2" style={{ fontSize: "15px" }}>
              Discription : E- Commerce web app and This app is complete
              responsive on any device.
            </p>
            <p className="mt-2" style={{ fontSize: "15px" }}>
              Technology Used – : – HTML 5, CSS 3, JavaScript, Bootstrap,
              ReactJS, UseCart Hook.
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default FrontEndProject;
