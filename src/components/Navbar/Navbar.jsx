import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to="/profile" className={navData => navData.isActive ? s.active : ''}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : ''}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={navData => navData.isActive ? s.active : ''}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={navData => navData.isActive ? s.active : ''}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={navData => navData.isActive ? s.active : ''}>Settings</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" className={navData => navData.isActive ? s.active : ''}>Users</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;