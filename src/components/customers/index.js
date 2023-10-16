import React from "react";
import SideBar from "../sidebar/SideBar";
const Customers = () => {
  return (
    <>
      <SideBar activeMenuItem={"customer"} />
      <section className="home-section p-4">
        <h3>Customers</h3>
      </section>
    </>
  );
};

export default Customers;
