import React from "react";
import SideBar from "../sidebar/SideBar";
import { cardData } from "../../data/Data";
import DashBoardCard from "./DashBoardCard";
import DonutChart from "./DonutChart";
import GraphComponents from "./GraphComponents";
import ProductSell from "./ProductSell";
const DashBoard = () => {
  const data = cardData;
  return (
    <>
      <SideBar activeMenuItem={"dashboard"} />
      <section className="home-section">
        <div className="dashboard-page">
          <div className="d-flex justify-content-between dashboard-container">
            <h3>Hello Shahrukh &#128075;,</h3>

            <span>
              <i class="bi bi-search"></i>
              <input type="text" name="" id="" placeholder="search" />
            </span>
          </div>
          <div className="card_container mt-4 mb-2">
            {data.map((cardsData, index) => (
              <DashBoardCard key={index} cardsData={cardsData} />
            ))}
          </div>
          <div className="mt-4  mb-4 graph d-flex justify-content-between graph-div">
            <GraphComponents />
            <div className="donut-graph">
              <div
                className="bar-graph-overview d-flex flex-column"
                style={{ padding: "20px 20px 0 20px" }}
              >
                <h5>Customers</h5>
                <span style={{ textAlign: "left" }}>
                  Customers that buy products
                </span>
              </div>

              <DonutChart />
            </div>
          </div>
          <div className="product-sell-container mt-4 mb-4">
            <div className="product-sell">
              <ProductSell />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
