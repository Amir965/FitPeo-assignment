import React from "react";
import ColumnChart from "./ColumnChart";

const GraphComponents = () => {
  return (
    <>
      <div className="bar-graph-container">
        <div className="bar-graph-header">
          <div className="bar-graph-overview">
            <h5>Overview</h5>
            <span>Monthly Earning</span>
          </div>
          <div class="custom-select">
            <select>
              <option value="option1">Quarterly</option>
              <option value="option2">weekly</option>
              <option value="option3">monthly</option>
            </select>
          </div>
        </div>
        <ColumnChart />
      </div>
    </>
  );
};

export default GraphComponents;
