import { Link } from "react-router-dom";
import logo from "../../drawsvg.svg"
import './ProfileSideBar.css'
// import Login from '../Login/Login';
import ProgressBar from "../ProgressBar"

import React, {useState} from 'react';


export default function ProfileSideBar({user_id}) {
  var achivements = `/${user_id}/achivements`;
    return (
      <div className="p_sidebar">
        <img className="p_sidebarElement" src={logo} alt="logo"></img>
      <Link to={achivements}><button className="p_sidebarElement" >достижения</button></Link>
      <Link to="/home"><button className="p_sidebarElement" id="login">главаная</button></Link>
      <div id="p_BARS" className="p_sidebarElement">
        <ProgressBar completed="50" bgcolor="red"></ProgressBar>
        <br></br>
        <ProgressBar completed="23" bgcolor="blue"></ProgressBar>
      </div>      
      {/* <br/>
      <Link to="/stop"><button>Stop</button></Link>
      <br/>*/}
      </div>
    );
  }