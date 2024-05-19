import React, { useState } from "react";
import downArrow from "../../Assets/down-arrow.svg";
import preview from "../../Assets/preview.svg";
import continues from "../../Assets/continue.svg";
import information from "../../Assets/information.svg";
import url from "../../Assets/copyurl.svg";
import starEmpty from "../../Assets/star-empty.svg";
import starFilled from "../../Assets/star-filled.svg";

const Icon = ({ src }) => (
  <img
    className="collections-content-table-last-row1-icon"
    src={src}
    alt="Icon"
  />
);

function TableContentBody({ tableData }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const toggleDrawer = (index) => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  return (
    <div className="collections-content-table">
      <table className="table" style={{ margin: 0 }}>
        <thead>
          <tr>
            <th
              className="font-thirteen-bold-black col-1 col-md-1"
              scope="col"
              style={{ width: "50px" }}
            ></th>
            <th
              className="font-thirteen-bold-black col-2 col-md-2 text-start"
              scope="col"
            >
              ID
            </th>
            <th
              className="font-thirteen-bold-black col-2 col-md-2 text-start"
              scope="col"
            >
              Template Name
            </th>
            <th
              className="font-thirteen-bold-black col-2 col-md-2 text-start"
              scope="col"
            >
              Model Type
            </th>
            <th
              className="font-thirteen-bold-black col-2 col-md-2 text-start"
              scope="col"
            >
              Date/Time
            </th>
            <th
              className="font-thirteen-bold-black col-2 col-md-2 text-start"
              scope="col"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => (
            <React.Fragment key={row.id}>
              {selectedRow === index ? 
              (
                <tr>
                  <td className="p-0" colSpan="12">
                    <div
                      className="collection-model-detail-info-section pb-4"
                      style={{ minHeight: "100px" }}
                    >
                      <div className="row py-2">
                        <div className="col-1 flex-space-between collection-model-detail-info-section-favourite">
                          <img
                            src={downArrow}
                            onClick={() => toggleDrawer(index)}
                            className="collection-model-detail-info-section-arrow icon-chevron-up mr-2"
                          />
                          <img
                            className={`collections-content-table-second-row${
                              index + 1
                            }-icon`}
                            src={row.starred ? starFilled : starEmpty}
                            alt="Icon"
                            style={{ position: "absolute", left: "65px" }}
                          />
                        </div>
                        <div className="col-11 text-start collection-model-detail-info-section-id">
                          {row.id}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11 d-flex align-items-center justify-content-between px-4">
                          <div
                            className="d-flex align-items-center flex-column"
                            style={{ width: "40%" }}
                          >
                            <div className="d-flex align-items-start justify-content-between flex-column w-100 mb-3">
                              <div className="collection-model-detail-info-section-contract-name font-thirteen-normal-grey">
                                Model Contract Name
                              </div>
                              <div className="font-thirteen-bold-black">
                                {row.templateName}
                              </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-between flex-column w-100 mb-3">
                              <div className="font-thirteen-normal-grey">
                                Contract Type
                              </div>
                              <div className="font-thirteen-bold-black">
                                {row.modelType}
                              </div>
                            </div>
                          </div>
                          <div
                            className="d-flex flex-column mb-3"
                            style={{ width: "60%", height: "100%" }}
                          >
                            <div className="font-thirteen-normal-grey text-start">
                              About Model
                            </div>
                            <div className="font-thirteen-bold-black text-start">
                              {row.modelDescription}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11 d-flex align-items-center justify-content-between px-4">
                          <div
                            className="d-flex align-items-center flex-column mb-3"
                            style={{ width: "40%" }}
                          >
                            <div className="d-flex align-items-start justify-content-between flex-column w-100">
                              <div className="font-thirteen-normal-grey">
                                Date / Time
                              </div>
                              <div className="font-thirteen-bold-black">
                                {row.dateTime}
                              </div>
                            </div>
                          </div>
                          <div
                            className="d-flex align-items-start justify-content-between flex-column mb-3"
                            style={{ width: "60%" }}
                          >
                            <div className="font-thirteen-normal-grey">
                              Model Usage Preferences
                            </div>
                            <div className="font-thirteen-bold-black">
                              {row.modelPreference}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-100 d-flex justify-content-end gap-3">
                        <button className="model-info-view-model font-thirteen-normal-black">View Model</button>
                        <button className="model-info-model-details font-thirteen-normal-white">Model Details</button>
                        <button className="model-info-select-continue font-thirteen-normal-white">Select and Continue</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr className="table-data-row">
                  <th
                    className="col-1 col-md-1 text-start table-arrow-data-cell td-data-row"
                    scope="row"
                  >
                    <div className="d-flex gap-4">
                      <img
                        className={`collections-content-table-first-row${
                          index + 1
                        }-icon`}
                        src={downArrow}
                        alt="Icon"
                        onClick={() => toggleDrawer(index)}
                        style={{ cursor: "pointer" }}
                      />
                      <img
                        className={`collections-content-table-second-row${
                          index + 1
                        }-icon`}
                        src={row.starred ? starFilled : starEmpty}
                        alt="Icon"
                      />
                    </div>
                  </th>
                  <td className="font-thirteen-bold-black text-start overflow-ellipsis td-data-row">
                    {row.id}
                  </td>
                  <td className="font-thirteen-normal-grey text-start overflow-ellipsis td-data-row">
                    {row.templateName}
                  </td>
                  <td className="font-thirteen-normal-grey text-start overflow-ellipsis td-data-row">
                    {row.modelType}
                  </td>
                  <td className="font-thirteen-bold-black text-start overflow-ellipsis td-data-row">
                    {row.dateTime}
                  </td>
                  <td className="table-actions-data-cell td-data-row">
                    <div className="icon-container">
                      <Icon src={preview} />
                      <Icon src={continues} />
                      <Icon src={information} />
                      <Icon src={url} />
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableContentBody;
