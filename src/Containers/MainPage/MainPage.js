import React, { Component } from 'react';
import NavBar from '../../Layouts/NavBar/NavBar'
import SideNav from '../../Layouts/SideNav/SideNav';

class MainPage extends Component {
    state = {

    }


    render() {
        return (
            <div className = 'main-page-container'>
                <NavBar />
                <SideNav/>

            </div>
        )
    }
}
export default MainPage