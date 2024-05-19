import React from "react";
//import sampleIcon from "../../Assets/icon.png";
import logoIcon from "../../Assets/muellif-logo.svg";
import dashboard from "../../Assets/dashboard.svg";
import collections from "../../Assets/collections.svg";
import templates from "../../Assets/templates.svg";
import works from "../../Assets/works.svg";
import reports from "../../Assets/reports.svg";
import adminPanel from "../../Assets/admin-panel.svg";
import profile from "../../Assets/woman.png";


function PrimaryNavBar() {
  return (
    <div className="collections-content-navbar-section">
      <div className="collections-content-navbar-section-upper">
        <div>
          <img
            className="collections-content-navbar-section-upper-Muellif-icon"
            src={logoIcon}
            alt="Icon"
          />
          <div className="font-eleven-normal-white mt-1">
            Muellif
          </div>
        </div>

        <div className="collections-content-navbar-section-upper-cells flex-column-center" style={{ opacity: 0.5 }}>
          <img
            className="collections-content-navbar-section-upper-icon"
            src={dashboard}
            alt="Icon"
          />
          <div className="font-ten-normal-white">
            Dashboard
          </div>
        </div>

        <div className="collections-content-navbar-section-upper-cells active flex-column-center">
          <img
            className="collections-content-navbar-section-upper-icon"
            src={collections}
            alt="Icon"
          />
          <div className="font-ten-normal-white">
            Collections
          </div>
        </div>

        <div className="collections-content-navbar-section-upper-cells flex-column-center">
          <img
            className="collections-content-navbar-section-upper-icon"
            src={templates}
            alt="Icon"
          />
          <div className="font-ten-normal-white">
            Tempaltes
          </div>
        </div>

        <div className="collections-content-navbar-section-upper-cells flex-column-center">
          <img
            className="collections-content-navbar-section-upper-icon"
            src={works}
            alt="Icon"
          />
          <div className="font-ten-normal-white">
            Works
          </div>
        </div>

        <div className="collections-content-navbar-section-upper-cells flex-column-center">
          <img
            className="collections-content-navbar-section-upper-icon"
            src={reports}
            alt="Icon"
          />
          <div className="font-ten-normal-white">
            Reports
          </div>
        </div>

        <div className="collections-content-navbar-section-upper-cells flex-column-center">
          <img
            className="collections-content-navbar-section-upper-icon"
            src={adminPanel}
            alt="Icon"
          />
          <div className="font-ten-normal-white">
            Admin Panel
          </div>
        </div>
      </div>

      <div className="collections-content-navbar-section-lower">
      <img
            className="collections-content-navbar-section-lower-profile-icon"
            src={profile}
            alt="Icon"
          />
      </div>
    </div>
  );
}

export default PrimaryNavBar;
