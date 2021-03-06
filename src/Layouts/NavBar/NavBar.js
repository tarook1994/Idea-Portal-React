import React from 'react';
import './NavBar.css';
import HeadRoom from 'react-headroom'

const navBar = (props) => {
    return (
            <div class="topnav" id="myTopnav">
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#news">News</a>
                <a href="#home" class="active">Home</a>
                <a href="javascript:void(0);" class="icon" onClick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
    )
}
export default navBar;