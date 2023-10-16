import React from "react";

const DashBoardCard = ({ cardsData }) => {
  return (
    <div className="card1">
      <div className="card-inner">
        <div
          className="card-inner1"
          style={{ background: cardsData.imageBackground }}
        >
          <img src={cardsData.image} alt="1st-icon" />
        </div>
        <div className="card-inner2">
          <span className="card-inner2-span1">{cardsData.title}</span>
          <span className="card-inner2-span2">{cardsData.income}</span>
          <span className="card-inner2-span3">
            <b style={{ color: cardsData.statusColor, fontWeight: 700 }}>
              {cardsData.status}
            </b>{" "}
            {cardsData.month}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
