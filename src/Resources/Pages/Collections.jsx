import React, { useState } from "react";
import PrimaryNavBar from "../Components/PrimaryNavBar/PrimaryNavBar";
import AuxiliarySideNavTree from "../Components/AuxiliarySideNavTree/AuxiliarySideNavTree";
import BreadcrumbPathTrail from "../Components/BreadcrumbPathTrail/BreadcrumbPathTrail";
import TableControlHeader from "../Components/TableControlHeader/TableControlHeader";
import TableContentBody from "../Components/TableContentBody/TableContentBody";
import TablePaginationFooter from "../Components/TablePaginationFooter/TablePaginationFooter";
import { tableResponseData } from "../Constants";

function Collections() {
  const [tableData, setTableData] = useState(tableResponseData);
  const originalData = tableResponseData;

  return (
    <div className="collections-content">
      <PrimaryNavBar />
      <div className="collections-content-primitive-section">
        <AuxiliarySideNavTree />
        <div className="collections-content-primitive-section-info">
          <BreadcrumbPathTrail />
          <div className="collections-content-primitive-section-info-table">
            <TableControlHeader
              tableData={tableData}
              setTableData={setTableData}
              originalData={originalData}
            />
            <TableContentBody
              tableData={tableData}
            />
            <TablePaginationFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Collections;
