// import HomeSideBar from "../components/HomeSideBar";
import './Home.css'
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar"

import Login from '../components/Login/Login';
import React, {useState} from 'react';


export default function Profile() {
    const [tokenToSet, setToken] = useState();
    var token = sessionStorage.getItem("token")
    console.log(token);
    if(!token) {
        return <Login setToken={setToken} />
    }
        return ( 
    <div>
        {/* <div className='sidebar'><HomeSideBar/></div> */}
        <body>
        <h1>Главаная страница</h1>
        <ProfileSideBar></ProfileSideBar>
        </body>

    </div>
  );
}