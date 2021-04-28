import React, { useState } from 'react';
import "./style.css";
import profile from '../image/profile.jpg';
const NavigationBar = () => {
    const [width, setWidth] = useState('50px');
    const [widthLogo, setWidthLogo] = useState('0px');
    const [widthProfile, setWidthProfile] = useState('0px');
    const handleOnClick = () => {
      setWidth(prev => prev === '50px' ? "250px" : '50px');
      setWidthLogo(prev => prev === '0px' ? '150px' : '0px');
      setWidthProfile(prev => prev === '0px' ? '150px' : '0px');
    }

    return(
    <div class="container">
      <div class="sidebar" style={{width: width}}>
        <div class="logo_content">
          <div class="logo" style={{width: widthLogo}}>
            <div>
              <i class='bx bxl-c-plus-plus'></i>
            </div>
            <div class="logo_name">CodingLab</div>
          </div>
          <button onClick={handleOnClick} class='btn'>
            <i class='fas fa-bars' id="btn" ></i>
          </button>
        </div>
        <div class="nav_list">
          <div class="list">
            <div class="tooltip right">
              <i class='fas fa-search icon' ></i>
              {/* <span class="tooltip-content">Search</span> */}
            </div>
            <div class="div_input">
            <input type="text" placeholder="Search..." class="input"/>
            </div>
          </div>
          <div class="list">
            <div>
              <i class="fas fa-columns icon"></i>
            </div>
              <div class="links_name" >Dashboard</div>
          </div>
          <div class="list">
              <div>
                <i class='far fa-user icon' ></i>
              </div>
              <span class="links_name">User</span>
          </div>
          <div class="list">
              <div>
                <i class='fab fa-facebook-messenger icon' ></i>
              </div>
              <span class="links_name">Messages</span>
          </div>
          <div class="list">
              <div>
                <i class='fas fa-chart-pie icon' ></i>  
              </div>
              <span class="links_name">Analytics</span>
          </div>
          <div class="list">
              <div>
                <i class='far fa-folder icon' ></i>
              </div>
              <span class="links_name">File Manager</span>
          </div>
          <div class="list">
              <div>
                <i class='fas fa-shopping-cart icon' ></i>
              </div>
              <span class="links_name">Order</span>
          </div>
          <div class="list">
              <div>
                <i class='far fa-heart icon' ></i>
              </div>
              <span class="links_name">Saved</span>
          </div>
          <div class="list">
              <div>
                <i class='fas fa-cog icon' ></i>
              </div>
              <span class="links_name">Setting</span>
          </div>
        </div>
        <div class="profile_content">
          <div class="profile">
            <div class="profile_details" style={{width : widthProfile}}>
              <img src={profile} alt="" class="img"/>
              <div class="name_job">
                <div class="name">Prem Shahi</div>
                <div class="job">Web Designer</div>
              </div>
            </div>
            <i class="fas fa-sign-out-alt" id="log_out"></i>
          </div>
        </div>
      </div>
      <div class="home_content">
        <div class="text">Home Content</div>
      </div>
    </div>
  )
}
export default NavigationBar;