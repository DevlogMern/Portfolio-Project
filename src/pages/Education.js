import React from "react";

const Education = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <p className="mt-5 lead">
          <h1>EDUCATION</h1>
        </p>
        <hr />
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{
            width: "400px",
            height: "50px",
            borderRadius: "100px 250px",
          }}
        >
          CLICK TO KNOW ABOUT MY EDUCATION
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{ backgroundColor: "black", border: "1px solid white" }}
            >
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="staticBackdropLabel"
                  style={{ color: "#eecd60" }}
                >
                  Education...
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <p style={{ paddingLeft: "10px" }}>
                <img src="./img/boy.png" style={{ width: "20px" }} />
                I've Completed my 10th Class in 2016 from C.B.S.E Board, New
                Delhi.
              </p>
              <p style={{ paddingLeft: "10px" }}>
                <img src="./img/boy.png" style={{ width: "20px" }} />
                I've Completed my 12th Class in 2018 from C.B.S.E Board, New
                Delhi.
              </p>
              <p style={{ paddingLeft: "10px" }}>
                <img src="./img/university.png" style={{ width: "20px" }} />
                I've Completed my Graduation in 2021 from I.G.N.O.U University.
              </p>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
