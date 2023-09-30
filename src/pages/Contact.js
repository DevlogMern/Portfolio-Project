import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <p className="lead" style={{ color: "#eecd60" }}>
          CONTACT
        </p>
        <h1>Get In Touch</h1>
        <hr />
        <div className="container">
          <div style={{ marginTop: "100px", width: "500px" }}>
            <div className="mb-3 ">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First Name
              </label>
              <input
                type="email"
                className="form-control border border-primary"
                id="exampleFormControlInput1"
                placeholder="first name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <input
                type="email"
                className="form-control border border-primary"
                id="exampleFormControlInput1"
                placeholder="last name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control border border-primary"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            {/* <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control border border-primary"
                  id="inputPassword"
                />
              </div>
            </div> */}

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Messages
              </label>
              <textarea
                className="form-control border border-primary"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
