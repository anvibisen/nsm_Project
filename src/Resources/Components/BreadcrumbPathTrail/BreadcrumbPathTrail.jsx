import React from "react";
import homeIcon from "../../Assets/home.svg";
import arrowIcon from "../../Assets/left-arrow.svg";

function BreadcrumbPathTrail() {
  return (
    <div className="collections-content-primitive-section-info-breadcrumbpathtrail">
      <div className="breadcrumbpathtrail-origin-icon-content flex-center flex-wrap">
        <img
          className="breadcrumbpathtrail-origin-icon"
          src={homeIcon}
          alt=""
        />
      </div>
      <div className="breadcrumbpathtrail-path-content">
        <img
          className="breadcrumbpathtrail-path-content-arrow-icon"
          src={arrowIcon}
          alt=""
        />
        <div className="font-ten-normal-grey">Client</div>

        <img
          className="breadcrumbpathtrail-path-content-arrow-icon"
          src={arrowIcon}
          alt=""
        />
        <div className="font-ten-normal-grey">Matter</div>

        <img
          className="breadcrumbpathtrail-path-content-arrow-icon"
          src={arrowIcon}
          alt=""
        />
        <div className="font-ten-normal-grey">Collections</div>
      </div>
    </div>
  );
}

export default BreadcrumbPathTrail;
