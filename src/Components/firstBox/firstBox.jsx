import React from "react";
import { topDealUsers } from "../Navbar/data";
import "./firstBox.css";
const FirstBox = () => {
  return (
    <div className="container--box">
      <h1 className="box--title">Top Deals</h1>
      {topDealUsers.map((items) => (
        <div className="wrap--all" key={items.id}>
          <div className="users--wrap">
            <img src={items.img} />
            <div className="wrap--container">
              <span className="user--name">{items.username}</span>
              <span className="email--wrap">{items.email}</span>
            </div>
          </div>
          <div className="amount--wrap">${items.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default FirstBox;
