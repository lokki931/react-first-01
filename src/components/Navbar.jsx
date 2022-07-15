import { React } from 'react';

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li><a href="#p">Profile</a></li>
                <li><a href="#m">Messages</a></li>
                <li><a href="#m">News</a></li>
                <li><a href="#m">Music</a></li>
                <li><a href="#m">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;