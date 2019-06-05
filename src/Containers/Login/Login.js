import React, { Component } from 'react'
import Axios from 'axios'
import './Login.css'


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
                            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
                            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                            <input type="submit" class="fadeIn fourth" value="Log In" />
                        </form>

                        <div id="formFooter">
                            <a class="underlineHover" href="#">Forgot Password?</a>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

export default Login
