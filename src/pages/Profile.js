// import HomeSideBar from "../components/HomeSideBar";
import { Link } from "react-router-dom";

import './Home.css'
import './Profile.css'
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar"

import Login from '../components/Login/Login';
import React, {useState} from 'react';




export default function Profile() {
    
    const [tokenToSet, setToken] = useState();
    var token = sessionStorage.getItem("token")
    var courses_link = `/${token}/courses`
    var tests = `/${token}/tests`
    console.log(token);
    if(!token) {
        return <Login setToken={setToken} />
    }
        return ( 
    <div>
        {/* <div className='sidebar'><HomeSideBar/></div> */}
        <ProfileSideBar user_id={token}></ProfileSideBar>
        <body className='p_pageContent'>
        <Link to={courses_link}><button className="left_link_thing">мои курсы</button></Link>
        <div className="prekoli">Sapmle text</div>
        <Link to={tests}><button className="left_link_thing">еженедельные тесты</button></Link>
        </body>

    </div>
  );
}