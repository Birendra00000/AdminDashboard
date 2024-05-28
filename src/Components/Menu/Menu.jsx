import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { Menu } from "../Navbar/data";
const MenuBar = () => {
  return (
    <>
      {Menu.map((items) => (
        <div className="main--menu--wrapper">
          <div className="menu--container" key={items.id}>
            <span className="wrap--menu">{items.title}</span>
            {items.listItems.map((list) => (
              <Link to={list.url} className="menu--list--items">
                <img src={list.icon} />
                <span className="span--title">{list.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuBar;
