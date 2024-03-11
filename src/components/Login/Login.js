import React, {useState} from 'react';
import PropTypes from 'prop-types';

import "./Login.css"

function get_token(user){
  if (user["username"] && user["password"])
    return user["username"];
  else
    return null;
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = e => {
        const token = get_token({
          username,
          password
        });
        if (!token)
          alert("Wrong login!");
        else{
          setToken(token);
          sessionStorage.setItem("token", token)
        }
      }
    
  return(
    <form onSubmit={handleSubmit} className='login'>
      <label>
        <p>Имя</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
        <p>Пароль</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
