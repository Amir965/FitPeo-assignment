/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const SideBar = ({ activeMenuItem }) => {
  useEffect(() => {
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
      });
    });

    const sidebarBtn = document.querySelector(".bx-menu");
    const sidebar = document.querySelector(".sidebar");

    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    return () => {
      arrows.forEach((arrow) => {
        arrow.removeEventListener("click", () => {});
      });
      sidebarBtn.removeEventListener("click", () => {});
    };
  }, []);
  return (
    <>
      <div class="header-left-container">
        <div class="header-left-content" style={{ height: "25px" }}></div>
      </div>
      <div className="sidebar close">
        <div className="logo-details">
          <img
            src={require("../../assets/icons/header-logo.png")}
            alt="logo"
            className="logo_name"
          />

          <i className="bx bx-menu" id="btn" />
        </div>
        <ul className="nav-links">
          <Link
            className={`${activeMenuItem === "dashboard" ? "active" : ""}`}
            to={"/"}
          >
            <li>
              <div className="iocn-link">
                <a>
                  <i className="bx bx-grid-alt" />

                  <span className="link_name">Dashboard</span>
                </a>
                <i className="bx bxs-chevron-down arrow rotate" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Dashboard</a>
                </li>
                <li>
                  <a>Earning</a>
                </li>
                <li>
                  <a>Orders</a>
                </li>
                <li>
                  <a>Balance</a>
                </li>
              </ul>
            </li>
          </Link>
          <Link
            className={`${activeMenuItem === "product" ? "active" : ""}`}
            to={"/product"}
          >
            <li>
              <div className="iocn-link">
                <a>
                  <i class="bx bxs-cart"></i>

                  <span className="link_name">Product</span>
                </a>
                <i className="bx bxs-chevron-down arrow rotate" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Products</a>
                </li>
                <li>
                  <a>Fitpeo</a>
                </li>
                <li>
                  <a>Fitpeo</a>
                </li>
                <li>
                  <a>Fitpeo</a>
                </li>
              </ul>
            </li>
          </Link>
          <Link
            className={`${activeMenuItem === "customer" ? "active" : ""}`}
            to={"/customer"}
          >
            <li>
              <div className="iocn-link">
                <a>
                  <i class="bx bxs-user"></i>

                  <span className="link_name">Customers</span>
                </a>
                <i className="bx bxs-chevron-down arrow rotate" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name" href="#">
                    Customers
                  </a>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </li>
          </Link>
          <Link
            className={`${activeMenuItem === "income" ? "active" : ""}`}
            to={"/income"}
          >
            <li>
              <div className="iocn-link">
                <a>
                  <i class="bx bxs-coin-stack"></i>

                  <span className="link_name">Income</span>
                </a>
                <i className="bx bxs-chevron-down arrow rotate" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Income</a>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </li>
          </Link>

          <Link
            className={`${activeMenuItem === "promote" ? "active" : ""}`}
            to={"/promote"}
          >
            <li>
              <div className="iocn-link">
                <a>
                  <i class="bx bxs-megaphone"></i>

                  <span className="link_name">Promote</span>
                </a>
                <i className="bx bxs-chevron-down arrow rotate" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Promote</a>
                </li>
                <li>
                  <a>Facebook</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
              </ul>
            </li>
          </Link>
          <Link
            className={`${activeMenuItem === "help" ? "active" : ""}`}
            to={"/help"}
          >
            <li>
              <div className="iocn-link">
                <a>
                  <i class="bx bx-help-circle"></i>

                  <span className="link_name">Help</span>
                </a>
                <i className="bx bxs-chevron-down arrow rotate" />
              </div>
              <ul className="sub-menu">
                <li>
                  <a className="link_name">Help</a>
                </li>
                <li>
                  <a>Email</a>
                </li>
                <li>
                  <a>WhatsApp</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
              </ul>
            </li>
          </Link>
          <li>
            <div className="profile-details">
              <li>
                <div className="iocn-link">
                  <a>
                    <span>
                      <img
                        src={require("../../assets/icons/profile.jpg")}
                        alt="profileImg"
                        style={{ width: 30, height: 30 }}
                      />
                    </span>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className="profile-arrow"
                    >
                      <span className="link_name" style={{ textAlign: "left" }}>
                        Evano
                      </span>
                      <span style={{ color: "#000000", fontSize: "10px" }}>
                        Project Manager
                      </span>
                    </div>
                  </a>
                  <span className="profile-arrow">
                    <i className="bx bxs-chevron-down arrow " />
                  </span>
                </div>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
