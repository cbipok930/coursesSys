import { Link } from "react-router-dom";
import logo from '../../logo.svg'
import './HomeSideBar.css'
import Login from '../Login/Login';

export default function HomeSideBar() {
    var token = sessionStorage.getItem("token")
    var profileButton;
    var linkTo;
    if (token){
      linkTo = `/${token}`;
      profileButton = <>профиль</>;
    }
    else{
      linkTo = "/login";
      profileButton = <>вход</>;
    }
    return (
      <div className="sidebar">
        <img className="sidebarElement" src={logo} alt="logo"></img>
      <Link to="/about"><button className="sidebarElement" >о нас</button></Link>
      {/* <br/>  */}
      <Link to="/courses"><button className="sidebarElement">курсы</button></Link>
      {/* <br/> */}
      <Link to="/train"><button className="sidebarElement">тренажер</button></Link>
      {/* <br/> */}
      <Link to={linkTo}><button className="sidebarElement" id="login">{profileButton}</button></Link>
      {/* <br/>
      <Link to="/stop"><button>Stop</button></Link>
      <br/>*/}
      </div>
    );
  }