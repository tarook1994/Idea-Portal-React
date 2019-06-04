import React from 'react';
import './SideNav.css'
import { Button } from 'react-bootstrap'

const sideNav = (props) => {
    return (
        <div className="sidenav">
            <h1>39</h1>
            <p>Ideas</p>

            <div className="button-container">
                <Button variant="primary" block >Add Idea</Button>
            </div>
            <a href="#about">All Ideas</a>
            <a href="#services">My Idea</a>



        </div>
    )
}

export default sideNav;