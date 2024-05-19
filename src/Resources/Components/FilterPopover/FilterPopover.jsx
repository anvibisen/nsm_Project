import React, { useState } from "react";
import { Popover, Button, MultiSelect } from "@mantine/core";
import filter from "../../Assets/filter.svg";

function FilterPopover({ onToggle, tableData, setTableData, originalData }) {
  const [opened, setOpened] = useState(false);
  const [filters, setFilters] = useState({
    id: [],
    templateName: [],
    modelType: [],
    modelUsagePreferences: [],
    sectoralTheme: []
  });

  const handleToggle = () => {
    setOpened((prev) => {
      const newOpened = !prev;
      onToggle(newOpened);
      return newOpened;
    });
  };

  const handleClose = () => {
    setOpened(false);
    onToggle(false);
  };

  const handleFilterChange = (field, values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: values
    }));
  };

  const handleApplyFilters = () => {
    const filteredData = originalData.filter(item => {
      return (
        (filters.id.length === 0 || filters.id.includes(item.id)) &&
        (filters.templateName.length === 0 || filters.templateName.includes(item.templateName)) &&
        (filters.modelType.length === 0 || filters.modelType.includes(item.modelType)) &&
        (filters.modelUsagePreferences.length === 0 || filters.modelUsagePreferences.includes(item.modelUsagePreferences)) &&
        (filters.sectoralTheme.length === 0 || filters.sectoralTheme.includes(item.sectoralTheme))
      );
    });
    setTableData(filteredData);
    handleClose();
  };

  const handleClearFilters = () => {
    setFilters({ id: [], templateName: [], modelType: [], modelUsagePreferences: [], sectoralTheme: [] });
    setTableData(originalData);
  };

  // Extract unique values for the filters and format them correctly for MultiSelect
  const formatDataForSelect = (data) => {
    return data.filter(item => item !== undefined && item !== null).map(item => ({ value: item, label: item }));
  };

  const ids = formatDataForSelect([...new Set(originalData.map(item => item.id))]);
  const templateNames = formatDataForSelect([...new Set(originalData.map(item => item.templateName))]);
  const modelTypes = formatDataForSelect([...new Set(originalData.map(item => item.modelType))]);
  const modelUsagePreferences = formatDataForSelect([...new Set(originalData.map(item => item.modelUsagePreferences))]);
  const sectoralThemes = formatDataForSelect([...new Set(originalData.map(item => item.sectoralTheme))]);

  return (
    <Popover
      opened={opened}
      onClose={handleClose}
      position="left"
      offset={{ mainAxis: 1, crossAxis: 50 }}
      withArrow
      shadow="md"
      width={570}
      closeOnClickOutside={false}
    >
      <Popover.Target>
        <Button className="tablecontrolheader-filter-button" onClick={handleToggle}>
          <img className="tablecontrolheader-filter-button-img" src={filter} alt="filter" />
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ padding: "0", top: "140px" }}>
        <div className="collections-fliter-section-modal flex-column-center">
          <div className="collections-fliter-section-modal-header flex-space-between">
            <div className="flex-center gap-2">
              <img src={filter} alt="filter" />
              <div className="font-fourteen-normal-black ml-2">Filters</div>
            </div>
            <button
              className="collections-fliter-section-modal-header-close flex-center"
              onClick={handleClose}
            >
              x
            </button>
          </div>
          <div className="collections-fliter-section-modal-body flex-column w-100">
            <div className="flex-space-between w-100 col-12 gap-2">
              <div className="multi-select-wrapper">
                <MultiSelect
                  label="ID"
                  placeholder="Choose"
                  data={ids}
                  value={filters.id}
                  onChange={(values) => handleFilterChange('id', values)}
                  style={{ width: "255px", height: "35px" }}
                />
              </div>
              <div className="multi-select-wrapper">
                <MultiSelect
                  label="Template Name"
                  placeholder="Choose"
                  data={templateNames}
                  value={filters.templateName}
                  onChange={(values) => handleFilterChange('templateName', values)}
                  style={{ width: "255px", height: "35px" }}
                />
              </div>
            </div>
            <div className="multi-select-wrapper flex-space-between w-100 col-12 gap-2">
              <MultiSelect
                label="Model Type"
                placeholder="Choose"
                data={modelTypes}
                value={filters.modelType}
                onChange={(values) => handleFilterChange('modelType', values)}
                style={{ width: "530px", height: "35px" }}
              />
            </div>
            <div className="flex-space-between w-100 col-12 gap-2">
              <div className="multi-select-wrapper">
                <MultiSelect
                  label="Model Usage Preferences"
                  placeholder="Choose"
                  data={modelUsagePreferences}
                  value={filters.modelUsagePreferences}
                  onChange={(values) => handleFilterChange('modelUsagePreferences', values)}
                  style={{ width: "255px", height: "35px" }}
                />
              </div>
              <div className="multi-select-wrapper">
                <MultiSelect
                  label="Sectoral Theme"
                  placeholder="Choose"
                  data={sectoralThemes}
                  value={filters.sectoralTheme}
                  onChange={(values) => handleFilterChange('sectoralTheme', values)}
                  style={{ width: "255px", height: "35px" }}
                />
              </div>
            </div>
          </div>
          <div className="collections-fliter-section-modal-footer flex-space-between">
            <button
              className="collections-fliter-section-modal-footer-clear font-thirteen-normal-black"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
            <div className="collections-fliter-section-modal-footer-cancel-save flex-space-between gap-2">
              <button
                className="collections-fliter-section-modal-footer-cancel font-thirteen-normal-black"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="collections-fliter-section-modal-footer-save font-thirteen-normal-black"
                onClick={handleApplyFilters}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

export default FilterPopover;
