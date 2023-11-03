import React from "react";
import "./Categories.css";

import Cyber from "./images/cyber-security-icon.svg";
import FE from "./images/front-end-icon.svg";
import BE from "./images/back-end-icon.svg";
import ai from "./images/ai-ml-icon.svg";
import data from "./images/data-science-icon.svg";
import networking from "./images/networking-icon.svg";
import left from "./images/arrow_left_iconsvg.svg";
import right from "./images/right.svg"


const Category = ({ className, image, label, skills }) => (
    <div className={`category-container ${className}`}>
      <img className="icon" alt="" src={image} />
      <b>{label}</b>
      {skills && <span className="skills-youll-gain">{`Skills you'll gain: ${skills}`}</span>}
      <div className="button-base">
        <b className="text1">Join</b>
      </div>
    </div>
  );
  

  const CategoryItem = ({ image, label, title }) => {
    return (
      <div className={`category-item ${title}`}>
        <img className="icon" alt="" src={image} />
        <div className={`group-${title}-banner-child`} />
        <div className={`group-${title}-banner-item`} />
        <b className={title}>{label}</b>
      </div>
    );
  };
  
const Categories = () => {
  return (
    <div className="dashboard-categories">
      <div className="all-courses">Career Paths</div>
      <div className="all-courses1">{`Back - End `}</div>
      <div className="group-transition-banner">
        <CategoryItem className="group-cyber-sec-banner" image={Cyber} label="Cyber Security" />
        <CategoryItem className="group-frontend-banner" image={FE} label="Front-end" />
        <CategoryItem className="group-backend-banner" image={BE} label="Back-end" />
        <CategoryItem className="group-aiml-banner" image={ai} label="AI & ML" />
        <CategoryItem className="group-datascience-banner" image={data} label="Data Science" />
        <CategoryItem className="group-networking-banner" image={networking} label="Networking" />
        <img className="arrow-left-icon-1-4" alt="" src={left} />
        <img className="arrow-left-icon-1-3" alt="" src={right} />
      </div>
      <Category
        className="group-dev-backend"
        image="/polygon-12.svg"
        label="Developing Back-End Apps with Node.js and Express"
        skills="Computer Programming, Web Development"
      />
      <Category 
      className="group-introduce-front-end" 
      image="/polygon-9.svg" 
      label="Introduction to Back - End Development" 
      skills="Web Development" />
    </div>
  );
};

export default Categories;

