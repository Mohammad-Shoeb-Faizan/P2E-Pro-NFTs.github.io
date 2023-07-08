import React from "react";
import pic from "../assets/1.png";
import pagesix from "../assets/pagesix.png";
import Navbar from "./Navbar";

const PageOne = () => {
  return (
    <div className="page-one">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Nobile:wght@700&display=swap');
              `}
            </style>
            <div
              className="text-light text-center"
              style={{
                background: `url(${pagesix}) no-repeat center`,
                backgroundSize: "cover",
                zIndex: -1,
              }}
            >
              <h1
                style={{
                  fontFamily: "Monoton",
                  fontSize: "3rem",
                  color: "#FFC107",
                }}
              >
                NFT
                <br />
                MARKETPLACE
              </h1>
              <br />
              <h1
                style={{
                  fontFamily: "Nobile",
                  fontSize: "3rem",
                  color: "#FF6961",
                }}
              >
                BASED ON
                <br />
                KALPTANTRA
              </h1>
              <div className="text-center mt-4">
                <button className="btn btn-warning px-8">Explore NFTs</button>
                <button className="btn btn-outline-dark ms-2 px-8">
                  Create NFT
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <div>
              <img src={pic} alt="Photo" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
