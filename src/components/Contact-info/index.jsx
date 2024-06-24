import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item border-box call-us-box">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">Call Us</h6>
                <p>99211 03007</p>
                {/* <p>+1 (000) 9876 54321</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item border-box email-us-box">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">Email Us</h6>
                <p>peaceinteriors@gmail.com</p>
                {/* <p>Username@website.com</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item border-box address-box">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">Address</h6>
                <p>
                  Shop no 5 jamuna chambers opposite Union bank Of india, Aundh
                  Rd, Khadki, Pune, Maharashtra 411020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
