import React, { Component } from 'react'
import Login from '../Login/Login';
import MainPage from '../MainPage/MainPage';

class PageSelector extends Component {

    state = {
        current: 'login'
    }
    pressLoginHander = () => {
        this.setState({
            current: 'main'
        })
    }


    render() {
        let page = null
        this.state.current !== 'login' ? page = <MainPage /> : page = <Login login={this.pressLoginHander} />
        return (
            <React.Fragment>
                {page}
            </React.Fragment>

        )
    }
}
export default PageSelector;