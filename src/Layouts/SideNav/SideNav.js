import React from 'react';
import './SideNav.css'
import { Button } from 'react-bootstrap'

const sideNav = (props) => {
    return (
        <div className="sidenav">
            <h1>Dashboard</h1>
        
            <div className="button-container">
                <Button variant="primary" block onClick={props.addClick}>Add Idea</Button>
            </div>
            <a href="#about" className="active-side">All Ideas</a>
            <a href="#services" >My Ideas</a>



        </div>
    )
}

export default sideNav;