import { React } from 'react';
import s from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a href="#p">Profile</a></li>
                <li className={s.item}><a href="#m">Messages</a></li>
                <li className={s.item}><a href="#m">News</a></li>
                <li className={s.item}><a href="#m">Music</a></li>
                <li className={s.item}><a href="#m">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;