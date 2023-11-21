import React from "react";
import { useParams } from 'react-router-dom';
import "./LearningMode.css";
import LeftBar from "../../Components/LeftBar/Leftbar";

const LearningMode = () => {

  const { videoID } = useParams(); 
  console.log("Video ID:", videoID);

  return (
    <div className="dashboard-profile-settings">
      <div className="dashboard-profile-settings-child">
        {/* Embed YouTube video */}
        
        <div className="youtube">
          <iframe 
            title="YouTube Video"
            width="1280"
            height="720"
            src={`https://www.youtube.com/embed/${videoID}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <LeftBar />
    </div>
  );
};

export default LearningMode;
