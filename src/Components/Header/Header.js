import React, { useState } from "react";
import "./Header.css";

import Avatar from "./images/Allura Avatar.svg";
import Noti from "./images/Notification.svg";

function Header() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="box">
      <div className="header">
        <div className="search">
          <div className="search-courses">
            <input
              className="text-color"
              type="text"
              placeholder="Search Courses, Documents, Activities..."
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>

        </div>

        <div className="user">
            <div className="notification">
              <div className="overlap-group">
                <img
                  className="iconly-light-outline-2"
                  alt="Iconly light outline"
                  src={Noti}
                />
                <div className="ellipse" />
              </div>
            </div>
            <div className="profile">

                <div className="allura-avatar">
                  <div className="allura-avatar-2" />
                  <img
                    className="allura-avatar"
                    alt="Allura avatar"
                    src={Avatar}
                  />
                <div className="text-wrapper">akwy666</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Header;


