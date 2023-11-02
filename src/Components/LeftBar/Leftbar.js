import React from "react";
import "./Leftbar.css";

import home from "./images/Home.svg";
import mylearning from "./images/3 User.svg";
import categories from "./images/Document.svg";
import cart from "./images/Group.svg";
import setting from "./images/Setting.svg";
import signout from "./images/Logout.svg";



function LeftBar () {
  
  return (
      <div className="box">
          <div className="left-bar">
            <div className="overlap-12">
              <div className="rectangle-6" />
              <div className="profilee">
                <div className="rectangle-7" />
                <div className="group-41">
                  <div className="text-wrapper-93">Profile</div>
                  <img
                    className="iconly-bold-home"
                    alt="Iconly bold home"
                    src={home}
                  />
                </div>
              </div>
              <div className="my-learning">
                <div className="group-42">
                  <div className="text-wrapper-94">My Learning</div>
                </div>
                <img
                  className="iconly-light-outline-6"
                  alt="Iconly light outline"
                  src={mylearning}
                />
              </div>
              <div className="categories">
                <div className="text-wrapper-95">Categories</div>
                <img
                  className="iconly-light-outline-7"
                  alt="Iconly light outline"
                  src={categories}
                />
              </div>
              <div className="course-cart">
                <div className="text-wrapper-96">Course Cart</div>
                <img className="group-43" alt="Group" src={cart} />
              </div>
              <div className="settings">
                <div className="text-wrapper-97">Settings</div>
                <img
                  className="iconly-light-outline-8"
                  alt="Iconly light outline"
                  src={setting}
                />
              </div>
              <div className="sign-out">
                <div className="text-wrapper-98">Sign Out</div>
                <img
                  className="iconly-light-outline-9"
                  alt="Iconly light outline"
                  src={signout}
                />
              </div>
              <p className="codelord-logo">
                <span className="text-wrapper-99">CodeLord</span>
              </p>
              </div>   
        </div>
      </div>
  );
};

export default LeftBar;
