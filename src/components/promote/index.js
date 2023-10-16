import React from "react";
import SideBar from "../sidebar/SideBar";
const Promote = () => {
  return (
    <>
      <SideBar activeMenuItem={"promote"} />
      <section className="home-section p-4">
        <h3>Promote</h3>
      </section>
    </>
  );
};

export default Promote;
