import React, { Component } from 'react'
import './Login.css'


class Login extends Component {
    render() {
        return (
            <div class="mid-class">
                <div class="art-right-w3ls">
                    <h2>Sign In</h2>
                    <div class="main">
                        <div class="form-left-to-w3l">
                            <input type="text" name="name" placeholder="Username" required="" />
                        </div>
                        <div class="form-left-to-w3l ">
                            <input type="password" name="password" placeholder="Password" required="" />
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="left-side-forget">
                        <input type="checkbox" class="checked" />
                        <span class="remenber-me">Remember me </span>
                    </div>
                    <div class="right-side-forget">
                        <a href="#" class="for">Forgot password...?</a>
                    </div>
                    <div class="clear"></div>
                    <div class="btnn">
                        <button type="submit">Sign In</button>
                    </div>
                    <div class="w3layouts_more-buttn">
                        <h3>Don't Have an account..?
                  <a href="#content1">Sign Up Here
                  </a>
                        </h3>
                    </div>
                    <div id="content1" class="popup-effect">
                        <div class="popup">
                            <div class="letter-w3ls">
                                <form >
                                    <div class="form-left-to-w3l">
                                        <input type="text" name="name" placeholder="Username" required="" />
                                    </div>
                                    <div class="form-left-to-w3l">
                                        <input type="text" name="name" placeholder="Phone" required="" />
                                    </div>
                                    <div class="form-left-to-w3l">
                                        <input type="email" name="email" placeholder="Email" required="" />
                                    </div>
                                    <div class="form-left-to-w3l">
                                        <input type="password" name="password" placeholder="Password" required="" />
                                    </div>
                                    <div class="form-left-to-w3l margin-zero">
                                        <input type="password" name="password" placeholder="Confirm Password" required="" />
                                    </div>
                                    <div class="btnn">
                                        <button type="submit">Sign Up</button>
                                    </div>
                                </form>
                                <div class="clear"></div>
                            </div>
                            <a class="close" href="#">&times;</a>
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
