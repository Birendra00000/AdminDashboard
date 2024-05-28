import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="main--navbar--one">
      <div className="nav--container--two">
        <img src="./assests/nav.png" alt="dash--logo" />
      </div>

      <div className="right-wrapper--three">
        <img src="./assests/search.svg" alt="icon-name" className="icon" />
        <img src="./assests/app.svg" alt="icon-name" className="icon" />
        <img src="./assests/expand.svg" alt="icon-name" className="icon" />

        <div className="notification--wrap--four">
          <img
            src="./assests/notifications.svg"
            alt="icon-name"
            className="notification--icon"
          />
          <span className="notification--container--five">1</span>
        </div>
        <div className="user--wrap--six">
          <img
            src="./assests/userlogo.jpg"
            alt="icon-name"
            className="user--icon"
            height={30}
          />
          <span className="name--wrap--seven">Harry</span>
        </div>
        <img src="./assests/setting.svg" alt="setting-name" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
