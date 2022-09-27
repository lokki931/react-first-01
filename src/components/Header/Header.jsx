import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
        width="50"
        height="50"
        alt="logo"
      />
      <div className={s.login}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>log out</button>
          </div>
        ) : (
          <NavLink to="/login">login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
