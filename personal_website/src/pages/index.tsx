import React from 'react';
import Nav from "../components/nav";
import "./styles/index.css";

export default function Index() {
    return (
        <div id="main">
            <Nav />
            <div id="content">
                <h1>Lionel Hu</h1>
                <p>My life's quest is to traverse the vast tapestry of the world, </p>
                <p>both inner and outer, </p>
                <p>all while seeking a deeper comprehension of humanity and the fabric of society.</p>
            </div>
        </div>
    )
}