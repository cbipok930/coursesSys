import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile'
import NoPage from './pages/NoPage';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Link } from "react-router-dom";
// import Sidebar from './components/HomeSideBar';

import React, {useState} from 'react';

// import Login from './components/Login/Login';

// function defineToken(){
//   let token = sessionStorage.getItem("token")
//   if (!token){

//   }
// }

function App() {
  // const [tokenToSet, setToken] = useState();
  function doc(){
    console.log("asdasd");
    window.location.replace("http://10.9.54.200:3000");
  }
  // var token = sessionStorage.getItem("token")
  // console.log(token);
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
      {/* <p>Welcome! {token}</p> */}
      {/* <button onClick={doc}>DOC</button> */}
      <BrowserRouter>
      {/* <div className='sidebar'><Sidebar></Sidebar></div> */}
      <div>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='*' element={<NoPage></NoPage>} />
        </Routes>
      </div>
      </BrowserRouter>
      {/* <Message MessageComponentContent="Called from App"/> */}
    </div>
  );
}

export default App;