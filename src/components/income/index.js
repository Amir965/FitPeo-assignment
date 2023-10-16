import React from "react";
import SideBar from "../sidebar/SideBar";
const Income = () => {
  return (
    <>
      <SideBar activeMenuItem={"income"} />
      <section className="home-section p-4">
        <h3>Income</h3>
      </section>
    </>
  );
};

export default Income;
