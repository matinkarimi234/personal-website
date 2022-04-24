import React from "react";
import './Footer.css';
import Icons from '../Icons/Icons'
const Footer = () => {
    return (
        <footer className="Footer">
            <ul>
                <li>
                    <a href="/"><Icons name="Instagram" /></a>
                </li>
                <li>
                    <a href="/"><Icons name="Twitter" /></a>
                </li>
                <li>
                    <a href="/"><Icons name="LinkedIn" /></a>
                </li>
            </ul>
            <span className="copyright">2022. All rights reserved.</span>
        </footer>
    )
}

export default Footer