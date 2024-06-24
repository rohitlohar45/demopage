import React from "react";

const PageHeader = ({ title, image }) => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!image ? "/assets/img/pg1.jpg" : image})`,
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
