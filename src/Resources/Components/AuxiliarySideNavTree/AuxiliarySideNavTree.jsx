import React, { useState } from "react";
import allTemplates from "../../Assets/all-templates.svg";
import contractTemplates from "../../Assets/contract-templates.svg";
import documentTemplates from "../../Assets/document-templates.svg";
import petitionTemplates from "../../Assets/petition-templates.svg";
import upArrow from "../../Assets/down-arrow.svg";

function AuxiliarySideNavTree() {
  const [isFirmCollectionOpen, setIsFirmCollectionOpen] = useState(true);
  const [isMuellifCollectionOpen, setIsMuellifCollectionOpen] = useState(true);

  const toggleFirmCollection = () => {
    setIsFirmCollectionOpen(!isFirmCollectionOpen);
  };

  const toggleMuellifCollection = () => {
    setIsMuellifCollectionOpen(!isMuellifCollectionOpen);
  };

  return (
    <div className="collections-content-primitive-section-auxiliarysidenavtree">
      <div className="auxiliarysidenavtree-header mt-2">Collections</div>
      <div className="auxiliarysidenavtree-content mt-4">
        <div className="auxiliarysidenavtree-content-firm-collections">
          <div
            className="auxiliarysidenavtree-content-firm-collections-header"
            onClick={toggleFirmCollection}
          >
            <div className="auxiliarysidenavtree-content-firm-collections-header-text">
              Firm Collection
            </div>
            <img
              className="auxiliarysidenavtree-content-firm-collections-header-icon"
              src={upArrow}
              alt=""
              style={{
                transform: isFirmCollectionOpen ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s",
              }}
            />
          </div>
          {isFirmCollectionOpen && (
            <div>
              <div className="auxiliarysidenavtree-content-firm-collections-all">
                <img className="firm-collections-all-icon" src={allTemplates} alt="" />
                <div className="firm-collections-all-text">All Templates</div>
              </div>
              <div className="auxiliarysidenavtree-content-firm-collections-contract">
                <img
                  className="firm-collections-contract-icon"
                  src={contractTemplates}
                  alt=""
                />
                <div className="firm-collections-contract-text">
                  Contract Templates
                </div>
              </div>
              <div className="auxiliarysidenavtree-content-firm-collections-document">
                <img
                  className="firm-collections-document-icon"
                  src={documentTemplates}
                  alt=""
                />
                <div className="firm-collections-document-text">
                  Document Templates
                </div>
              </div>
              <div className="auxiliarysidenavtree-content-firm-collections-petition">
                <img
                  className="firm-collections-petition-icon"
                  src={petitionTemplates}
                  alt=""
                />
                <div className="firm-collections-petition-text">
                  Petition Templates
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="auxiliarysidenavtree-content-muellif-collections">
          <div
            className="auxiliarysidenavtree-content-muellif-collections-header"
            onClick={toggleMuellifCollection}
          >
            <div className="auxiliarysidenavtree-content-muellif-collections-header-text">
              Muellif Collection
            </div>
            <img
              className="auxiliarysidenavtree-content-muellif-collections-header-icon"
              src={upArrow}
              alt=""
              style={{
                transform: isMuellifCollectionOpen ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s",
              }}
            />
          </div>
          {isMuellifCollectionOpen && (
            <div>
              <div className="auxiliarysidenavtree-content-muellif-collections-all">
                <img
                  className="muellif-collections-all-icon"
                  src={allTemplates}
                  alt=""
                />
                <div className="muellif-collections-all-text">All Templates</div>
              </div>
              <div className="auxiliarysidenavtree-content-muellif-collections-contract">
                <img
                  className="muellif-collections-contract-icon"
                  src={contractTemplates}
                  alt=""
                />
                <div className="muellif-collections-contract-text">
                  Contract Templates
                </div>
              </div>
              <div className="auxiliarysidenavtree-content-muellif-collections-document">
                <img
                  className="muellif-collections-document-icon"
                  src={documentTemplates}
                  alt=""
                />
                <div className="muellif-collections-document-text">
                  Document Templates
                </div>
              </div>
              <div className="auxiliarysidenavtree-content-muellif-collections-petition">
                <img
                  className="muellif-collections-petition-icon"
                  src={petitionTemplates}
                  alt=""
                />
                <div className="muellif-collections-petition-text">
                  Petition Templates
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuxiliarySideNavTree;
