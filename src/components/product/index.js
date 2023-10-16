import React from "react";
import SideBar from "../sidebar/SideBar";

const Product = () => {
  return (
    <>
      <SideBar activeMenuItem={"product"} />
      <section className="home-section p-4">
        <h3>Product</h3>
      </section>
    </>
  );
};

export default Product;
