import React from "react";
import { tableData } from "../../data/TableData";
const ProductSell = () => {
  const data = tableData;
  return (
    <div>
      <div className="table-header d-flex justify-content-between">
        <div>
          <h5>Product Sell</h5>
        </div>
        <div className="search-container">
          <span className="product-search">
            <i class="bi bi-search"></i>
            <input type="text" name="" id="" placeholder="search" />
          </span>
          <select>
            <option value="option1">Last 30 days</option>
            <option value="option2">Last 20 days</option>
            <option value="option3">Last 10 days</option>
          </select>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col" className="abstract-th">
                Product Name
              </th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row" className="abstract-container">
                    <img src={item.image} alt="img1" />
                    <div className="abstract-part">
                      <span className="abstract-span1">{item.title}</span>
                      <span className="abstract-span2">{item.para}</span>
                    </div>
                  </th>
                  <td>{item.stock}</td>
                  <td style={{ fontWeight: "600" }}>{item.price}</td>
                  <td>{item.sell}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSell;
