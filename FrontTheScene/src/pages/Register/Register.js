import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import { Image } from "react-bootstrap";

import { signup } from "../../actions/auth";

import axios from "axios";

import facebook from "../../pages/Login/images/facebook.svg";
import google from "../../pages/Login/images/google.svg";
import github from "../../pages/Login/images/github.svg";
import line1 from "../../pages/Login/images/line-1.svg";
import "./Register.css"
require('dotenv').config();

const Register = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '' 
    });
    
    const {first_name, last_name, email, password, re_password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }    
    };
    
    const continuewithGoogle = async() => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/dashboard`)
            window.location.replace(res.data.authorization_url);
        } catch (err) {
            console.error('Error during Google OAuth request:', err);
        }
    };
    const continuewithFacebook = async() => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/dashboard`);
     
            window.location.replace(res.data.authorization_url);
        } catch (err) {
            console.error('Error during Google OAuth request:', err);
        }
    };


    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    if (accountCreated){
        return <Navigate to="/login" />
    }

    return (
        <div className="auth">
            <div className="div">
                <div className="signupoverlap">
                    <div className="signuptext-wrapper">Join Everyone!</div>
                    <div className="frame">
                        <p className="code-lord">
                            <span className="span">Code</span>
                            <span className="text-wrapper-2">Lord</span>
                        </p>
                    </div>
                </div>
            <div className="resellipse" />
                <div className="overlap-group">
                    <div className="resellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Sign up</div>
                                            <div className="text-wrapper-4">Just some details to get you in!</div>
                                        </div>
                                    <div className="credentials">
                                        <form onSubmit={e=>onSubmit(e)}>
                                            <div className="form-group name">
                                                <input type="name" className="form-control" placeholder="First name" name="first_name" value={first_name} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <div className="form-group name">
                                                <input type="name" className="form-control" placeholder="Last name" name="last_name" value={last_name} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <div className="form-group emailres">
                                                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <div className="form-group passwdres">
                                                <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} minlength="6" required/>
                                            </div>
                                            <div className="form-group repasswdres">
                                                <input type="password" className="form-control" placeholder="Enter Password Again" name="re_password" value={re_password} onChange={e=>onChange(e)} minlength="6" required/>
                                            </div>
                                            <button class="btn auth-bt-fp resdiv-wrapper" type="submit">
                                                <p className="text-wrapper-5">Sign up</p>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="other-auths">
                                <div className="or">
                                    <Image className="line" alt="Line" src={line1} />
                                    <div className="text-wrapper-8">Or</div>
                                    <Image className="line" alt="Line" src={line1} />
                                </div>
                                <div className="social">
                                    <Image className="frame-4" alt="google" src={google} onClick={continuewithGoogle}/>
                                    <Image className="frame-4" alt="facebook" src={facebook} onClick={continuewithFacebook} />
                                    <Image className="frame-4" alt="github" src={github} />
                                </div>
                            
                            </div>
                        </div>
                    <div className="frame-5">
                        <p className="resdon-t-have-an">
                            <span className="text-wrapper-9">Already registered?</span>
                            <span> 
                                <a className="text-wrapper-10" href="/login"> Log in</a>
                            </span>
                        </p>
                    </div>
                    <div className="rescustomer-care">
                        <div className="text-wrapper-11">Terms & Conditions</div>
                        <div className="text-wrapper-11">Support</div>
                        <div className="text-wrapper-11">Customer Care</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ signup }) (Register);
