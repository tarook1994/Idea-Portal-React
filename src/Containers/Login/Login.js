import React, { Component } from 'react'
import Axios from 'axios'
import './Login.css'


class Login extends Component {
    state = {
        username : '',
        password : '',
        error : null
    }

    setUsernameState = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    setPasswordState = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    signIn = () => {
        const bodyFormData = new FormData();
        bodyFormData.set('username',this.state.username)
        bodyFormData.set('password',this.state.password)
        Axios.post({
            method: 'post',
            url: 'http://localhost/',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            }).then(res => {

            })
    }

    render() {
        return (
            <div className="mid-class">
                <div className="art-right-w3ls">
                    <h2>Sign In</h2>
                    <div className="main">
                        <div className="form-left-to-w3l">
                            <input type="text" name="name" placeholder="Username" required="" onChange={(event) => this.setUsernameState(event)}/>
                        </div>
                        <div className="form-left-to-w3l ">
                            <input type="password" name="password" placeholder="Password" required="" onChange = {(event) => this.setPasswordState(event) } />
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="left-side-forget">
                        <input type="checkbox" className="checked" />
                        <span className="remenber-me">Remember me </span>
                    </div>
                    <div className="right-side-forget">
                        <a href="#" className="for">Forgot password...?</a>
                    </div>
                    <div className="clear"></div>
                    <div className="btnn">
                        <button type="submit" onClick={this.signIn}>Sign In</button>
                    </div>
                    <div className="w3layouts_more-buttn">
                        <h3>Don't Have an account..?
                  <a href="#content1">Sign Up Here
                  </a>
                        </h3>
                    </div>
                    <div id="content1" className="popup-effect">
                        <div className="popup">
                            <div className="letter-w3ls">
                                <form >
                                    <div className="form-left-to-w3l">
                                        <input type="text" name="name" placeholder="Username" required="" />
                                    </div>
                                    <div className="form-left-to-w3l">
                                        <input type="text" name="name" placeholder="Phone" required="" />
                                    </div>
                                    <div className="form-left-to-w3l">
                                        <input type="email" name="email" placeholder="Email" required="" />
                                    </div>
                                    <div className="form-left-to-w3l">
                                        <input type="password" name="password" placeholder="Password" required="" />
                                    </div>
                                    <div className="form-left-to-w3l margin-zero">
                                        <input type="password" name="password" placeholder="Confirm Password" required="" />
                                    </div>
                                    <div className="btnn">
                                        <button type="submit">Sign Up</button>
                                    </div>
                                </form>
                                <div className="clear"></div>
                            </div>
                            <a className="close" href="#">&times;</a>
                        </div>
                    </div>
                </div>
                <div class="art-left-w3ls">
                    <h1 class="header-w3ls">
                        Idea Portal
            </h1>
                </div>
            </div>

        )
    }
}

export default Login
