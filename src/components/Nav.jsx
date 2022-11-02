import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from '../assets/Library.svg';

const Nav = () => {
    <nav>
        <div className="nav_container">
            <a href="/">
                <img src={LibraryLogo} alt="" className='logo'/>
            </a>
            <ul className="nav__links">
                <li className="nav__list">
                    <a href="/" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__list">
                    <a href="/" className="nav__link">
                        Books
                    </a>
                </li>
                <button className="btn__menu">
                    <FontAwesomeIcon icon="bars" />
                </button>
                <li className="nav__icon">
                    <a href="/cart" className='nav__link'>
                        <FontAwesomeIcon icon='shopping-cart'/>
                    </a>
                    <span className="cart__length">3</span>
                </li>
            </ul>
            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close">
                    <FontAwesomeIcon icon="times"/>
                </button>
            </div>
        </div>
    </nav>
}

export default Nav;