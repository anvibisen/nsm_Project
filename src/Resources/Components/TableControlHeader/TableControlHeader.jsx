import React, { useState, useEffect } from "react";
import search from "../../Assets/search.svg";
import { Popover, Button, MultiSelect } from "@mantine/core";
import FilterPopover from "../FilterPopover/FilterPopover";

function TableControlHeader({ tableData, setTableData, originalData }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const element = document.querySelector(
      ".collections-content-primitive-section-info"
    );
    if (element) {
      element.style.overflow = isFilterOpen ? "hidden" : "";
    }
  }, [isFilterOpen]);

  useEffect(() => {
    if (searchTerm === "") {
      setTableData(originalData);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filteredData = originalData.filter(item => 
        item.id.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.templateName.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.modelType.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.dateTime.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.modelDescription.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.modelPreference.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setTableData(filteredData);
    }
  }, [searchTerm, originalData, setTableData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="collections-section-search-table-tablecontrolheader">
      <div className="flex-space-between w-100">
        <div className="position-relative">
          <img src={search} alt="Search Icon" className="search-icon" />
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Write something about the template you want to find"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <FilterPopover
          tableData={tableData}
          setTableData={setTableData}
          originalData={originalData}
          onToggle={setIsFilterOpen}
        />
      </div>
      <div className="collections-section-search-table-tablecontrolheader-text font-thirteen-normal-black">
        <b className="font-thirteen-bold-black">{tableData.length}</b> Records Found
      </div>
    </div>
  );
}

export default TableControlHeader;
