import React from "react";
import SideBar from "../sidebar/SideBar";
const Help = () => {
  return (
    <>
      <SideBar activeMenuItem={"help"} />
      <section className="home-section p-4">
        <h3>Help</h3>
      </section>
    </>
  );
};

export default Help;
