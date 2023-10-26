import React from "react";
import "./Header.css";

import search from "./images/Search.svg";
import avatar from "./images/Allura Avatar.svg";
import noti from "./images/Notification.svg";

function Header () {
  return (
    <div className="box">
      <header className="header">
        <div className="search">
          <div className="group">
            <input className="search-courses" placeholder="Search Courses, Documents, Activities..." type="text" />
            <img
              className="iconly-light-outline"
              alt="Iconly light outline"
              src={search}
            />
          </div>
        </div>
        <div className="user">
            <div className="div">
              <div className="overlap-group">
                <div className="allura-avatar" />
                <img
                  className="overlap-group"
                  alt="Allura avatar"
                  src={avatar}
                />
              </div>
              <div className="text-wrapper">akwy666</div>
            </div>
          </div>
          <div className="notification">
            <div className="overlap">
              <img
                className="img"
                alt="Iconly light outline"
                src={noti}
              />
              <div className="ellipse" />
            </div>
            </div>
     </header>
     </div>
  )}
export default Header;
