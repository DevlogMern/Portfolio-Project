import React from "react";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column h-100">
        <footer className="w-100 py-4 flex-shrink-0 mt-5">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5
                  className="h1 text-white"
                  style={{ fontFamily: "Audiowide, sans-serif" }}
                >
                  PORTFOLIO
                </h5>
                <p className="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a
                    className="text-primary"
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Bootstrapious.com
                  </a>
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Get started
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Get started
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted">Write Comment Down Below.</p>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Comment"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      style={{
                        border: "1px solid white",
                        borderRadius: "250px 420px",
                      }}
                    />
                    <button
                      className="btn btn-dark"
                      id="button-addon2"
                      type="button"
                      style={{
                        border: "1px solid white",
                        borderRadius: "210px 20px",
                      }}
                    >
                      <i className="fas fa-paper-plane">Post</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
