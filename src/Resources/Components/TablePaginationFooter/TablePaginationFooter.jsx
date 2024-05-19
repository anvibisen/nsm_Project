import React from "react";
import rightArrow from "../../Assets/right-arrow.svg";
import leftArrow from "../../Assets/left-arrow.svg";
import downArrow from "../../Assets/down-arrow.svg";

function TablePaginationFooter() {
  return (
    <div className="collections-content-primitive-section-info-table-tablepaginationfooter">
      <p className="footer-pagination-dropdown" >
        <b>10</b> per page <img src={downArrow} alt="Icon" class="icon" />
      </p>

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" href="/" tabindex="-1">
              <img src={leftArrow} alt="Icon" class="icon" />
            </a>
          </li>

          <li className="page-item active">
            <a className="page-link" href="/">
              1<span className="sr-only"></span>
            </a>
          </li>

          <li className="page-item">
            <a className="page-link" href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              <img src={rightArrow} alt="Icon" class="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TablePaginationFooter;
