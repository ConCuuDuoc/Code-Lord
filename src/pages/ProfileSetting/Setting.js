import React from "react";
import "./style.css";

export const ProfileSetting = () => {
  return (
    <div className="dashboard-profile">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="left-bar">
            <div className="home">
              <div className="group">
                <div className="text-wrapper">Profile</div>
                <img className="iconly-bold-home" alt="Iconly bold home" src="home.png" />
              </div>
            </div>
            <div className="my-learning">
              <div className="div-wrapper">
                <div className="text-wrapper-2">My Learning</div>
              </div>
              <img className="iconly-light-outline" alt="Iconly light outline" src="3-user.png" />
            </div>
            <div className="categories">
              <div className="text-wrapper-3">Categories</div>
              <img className="img" alt="Iconly light outline" src="document.png" />
            </div>
            <div className="course-cart">
              <div className="text-wrapper-4">Course Cart</div>
              <img className="group-2" alt="Group" src="group.png" />
            </div>
            <div className="settings">
              <div className="text-wrapper-5">Settings</div>
              <div className="iconly-light-outline-2">
                <img className="setting" alt="Setting" src="setting.png" />
                <div className="rectangle-2" />
              </div>
            </div>
            <div className="sign-out">
              <div className="text-wrapper-6">Sign Out</div>
              <img className="iconly-light-outline-3" alt="Iconly light outline" src="logout.png" />
            </div>
            <p className="codelord-logo">
              <span className="span">CodeLord</span>
            </p>
          </div>
        </div>
        <header className="header">
          <div className="search">
            <div className="group-3">
              <input className="search-courses" placeholder="Search Courses, Documents, Activities..." type="text" />
              <img className="iconly-light-outline-4" alt="Iconly light outline" src="search.png" />
            </div>
          </div>
          <div className="user">
            <div className="profile">
              <div className="group-4">
                <div className="allura-avatar">
                  <div className="allura-avatar-2" />
                  <img className="allura-avatar" alt="Allura avatar" src="allura-avatar.png" />
                </div>
                <div className="text-wrapper-7">akwy666</div>
              </div>
              <img className="icon-chevron-left" alt="Icon chevron left" src="chevron-left.svg" />
            </div>
            <div className="notification">
              <div className="overlap-group">
                <img className="iconly-light-outline-5" alt="Iconly light outline" src="notification.png" />
                <div className="ellipse" />
              </div>
            </div>
          </div>
        </header>
        <div className="form">
          <div className="form-2">
            <div className="country">
              <div className="input">
                <img className="icon" alt="Icon" src="icon.svg" />
                <div className="text">
                  <div className="text-wrapper-8">United States</div>
                </div>
              </div>
              <div className="text-wrapper-9">Country</div>
            </div>
            <div className="overlap-2">
              <div className="date-time">
                <div className="date">
                  <div className="label">
                    <div className="overlap-group-2">
                      <img className="info-icon" alt="Info icon" src="info-icon.svg" />
                      <div className="text-wrapper-10">Date of Birth</div>
                    </div>
                  </div>
                  <div className="input-2">
                    <div className="text-2">
                      <div className="text-wrapper-8">MM/DD/YYYY</div>
                    </div>
                    <div className="icon-2" />
                  </div>
                </div>
              </div>
              <div className="welcome-message">
                <div className="langauge">
                  <div className="input" />
                  <div className="text-wrapper-11">Email</div>
                </div>
              </div>
            </div>
            <div className="name">
              <div className="input">
                <div className="text-wrapper-12">Morty Smith</div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <img className="info-icon-2" alt="Info icon" src="image.svg" />
                  <div className="text-wrapper-13">Name</div>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="remove">
                <img className="icon-2" alt="Icon" src="icon-2.svg" />
                <div className="text-wrapper-14">Remove</div>
              </div>
              <div className="update">
                <div className="text-wrapper-14">Update</div>
              </div>
              <img className="allura-avatar-3" alt="Allura avatar" src="image.png" />
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="date-2">
                  <div className="label">
                    <div className="overlap-group-2">
                      <img className="info-icon" alt="Info icon" src="info-icon-2.svg" />
                      <div className="text-wrapper-10">Language</div>
                    </div>
                  </div>
                  <div className="input-2">
                    <div className="text-2">
                      <div className="text-wrapper-8">MM/DD/YYYY</div>
                    </div>
                    <div className="icon-2" />
                  </div>
                </div>
                <img className="icon-3" alt="Icon" src="icon-3.svg" />
              </div>
            </div>
          </div>
          <div className="actions">
            <button className="button">
              <div className="text-wrapper-15">Delete Account</div>
            </button>
            <button className="button-2">
              <div className="text-wrapper-15">Cancel</div>
            </button>
            <button className="button-3">
              <div className="text-wrapper-16">Save Changes</div>
            </button>
          </div>
        </div>
        <div className="resources">Account Settings</div>
        <div className="links">
          <div className="text-wrapper-17">Change Password</div>
          <div className="text-wrapper-18">Profile</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSetting;