import React from "react";
import { Link } from 'react-router-dom';
import "./Leftbar.css";

import home from "./images/Home.svg";
import mylearning from "./images/3 User.svg";
import categories from "./images/Document.svg";
import cart from "./images/Cart.svg";
import setting from "./images/Setting.svg";
import signout from "./images/Logout.svg";



function LeftBar () {
  
  return (
    <div className="box">
      <div className="left-bar">
        <div className="overlap">
          <div className="rectangle" />

          <div className="codelord-logo">
            <span className="code">Code</span> 
            <span className="lord">Lord</span>
          </div>
          
          <div className="profilee">
            <div className="text-wrapper-lb">Profile</div>
            <img
              className="iconly-bold-home"
              alt="Iconly bold home"
              src={home}
            />
          </div>

          <div className="my-learning">
            <div className="text-wrapper-lb">My Learning</div>
            <img
              className="iconly-light-outline"
              alt="Iconly light outline"
              src={mylearning}
            />
          </div>

          <Link to="/categories">
            <div className="categories">
              <div className="text-wrapper-lb">Categories</div>
              <img
                className="iconly-light-outline"
                alt="Iconly light outline"
                src={categories}
              />
            </div>
          </Link>

          <div className="course-cart">
            <div className="text-wrapper-lb">Course Cart</div>
            <img
              className="iconly-light-outline"
              alt="Iconly light outline"
              src={cart}
            />
          </div>

          <Link to="/settings">
            <div className="settings">
              <div className="text-wrapper-lb">Settings</div>
              <img
                className="iconly-light-outline"
                alt="Iconly light outline"
                src={setting}
              />
            </div>
          </Link>

          <div className="sign-out">
            <div className="text-wrapper-lb">Sign Out</div>
            <img
              className="iconly-light-outline"
              alt="Iconly light outline"
              src={signout}
            />
          </div>
        </div>   
      </div>
    </div>
  );
};

export default LeftBar;
