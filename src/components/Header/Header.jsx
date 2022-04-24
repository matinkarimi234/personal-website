import React from "react";
import './Header.css';
import logo from './logo.png';
import Button from "../Button/Button"
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div className="Header">
            <img alt='logo' src={logo} />
            <nav>
                <ul>
                    <li className={location.pathname === '/' && 'active'}>
                        <Link to="/"> Home </Link>
                    </li>
                    <li className={location.pathname === '/about' && 'active'}>
                        <Link to="/about"> About </Link>
                    </li>
                    <li className={location.pathname === '/portfolio' && 'active'}>
                        <Link to="/portfolio"> Portfolio </Link>
                    </li>
                    <li className={location.pathname === '/contact' && 'active'}>
                        <Link to="/contact"> Contact </Link>
                    </li>
                </ul>
            </nav>
            <Button>
                Download Resume
            </Button>
        </div>
    )
}

export default Header