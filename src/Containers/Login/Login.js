import React, { Component } from 'react'
import Axios from 'axios'
import './Login.css'
import { FormControl } from 'react-bootstrap'


class Login extends Component {
    state = {
        username: '',
        password: '',
        error: null
    }

    setUsernameState = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    setPasswordState = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    signIn = () => {
        const bodyFormData = new FormData();
        bodyFormData.set('username', this.state.username)
        bodyFormData.set('password', this.state.password)
        Axios.post({
            method: 'post',
            url: 'http://localhost/',
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(res => {

        })
    }

    render() {
        return (
            <div className="login-container">
                <div class="wrapper fadeInDown">
                    <div id="formContent">

                        <div class="fadeIn first">
                            <h2> Sign In </h2>
                        </div>

                        <form>
                            <FormControl className="fadeIn second" 
                                type="text"
                                value={this.state.value}
                                placeholder="Username"
                                onChange={this.handleChange}
                            />

                            <FormControl className="fadeIn third" 
                                type="text"
                                value={this.state.value}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
                            <button id = 'button' class="fadeIn fourth"  onClick={this.props.login}>Login</button>
                        </form>

                        <div id="formFooter">
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

export default Login
