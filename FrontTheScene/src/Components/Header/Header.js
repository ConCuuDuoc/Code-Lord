import React, { useState } from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import Avatar from "./images/Allura Avatar.svg";
import Noti from "./images/Notification.svg";
import axios from "axios";
import { Link } from 'react-router-dom';


function Header() {
  const [searchText, setSearchText] = useState("");
  const [videos, setVideos] = useState([]);
  

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchText(query);
    if (query) {
      try {
        // Perform a search query
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              key: 'AIzaSyBXYgQQCIozjytEaHTsbMoxZIOe3JvAy0w',
              part: 'snippet',
              playlistId: 'PLiyEr0aJ6DWfLFx-KvOHlDJiLI-T0YJtk'
            },
            
          }
          
        );
        setVideos(response.data.items.slice(0, 10));
      } catch (error) {
        console.error("Error fetching videos from YouTube:", error);
      }
    } else {
      setVideos([]);
    }
  };

  return (
    <div className='box'>
      
      <div className="header">
        <div className="search-bar">
          <form class="form-inline my-2 my-lg-0">
            <input 
              class="form-control" 
              type="search" 
              value={searchText}
              placeholder="Search Courses, Documents, Activities..." 
              aria-label="Search"
              onChange={handleSearchChange}/>
          </form>
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
            
            <Dropdown>
              <div className="profile">
                <div className="allura-avatar">
                  <div className="allura-avatar-2" />
                  <img
                    className="allura-avatar"
                    alt="Allura avatar"
                    src={Avatar}
                  />
                  <div className="text-wrapper">akwy666</div>
                  <Dropdown.Toggle id="dropdown-basic">
                  </Dropdown.Toggle>
                </div>
              </div>
            
            <Dropdown.Menu>
              {/* Add your dropdown menu items here */}
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Hihi</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>

          {videos.length > 0 && (
            <div className="search-results">
              {videos.map((video) => (
                <Link to={`/learningmode/${video.snippet.resourceId.videoId}`} key={video.snippet.resourceId.videoId}>
                  <div>
                    <p>{video.snippet.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

      </div>
    </div>
  );
}

export default Header;


