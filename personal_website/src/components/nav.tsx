import React from 'react';
import "./styles/nav.css";


export default function Nav() {
    return (
        <nav>
            <ul>
                <li ><a href="about" className="hbtn hb-fill-middle2-bg">About</a></li>
                <li><a href="photography" className="hbtn hb-fill-middle2-bg">Photography</a></li>
                <li><a href="contact" className="hbtn hb-fill-middle2-bg">Contact</a></li>
            </ul>
        </nav>
    )
}