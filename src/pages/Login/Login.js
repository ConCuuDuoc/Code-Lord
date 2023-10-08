import React, {useState} from "react";
import {Navigate, Link} from "react-router-dom";
import {connect} from "react-redux";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { login } from "../../actions/auth";


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });
    
    const {email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    //If the user authenticated
    //Redirect to the home page

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <Container className="login-form">
            <h2>Sign In</h2>
            <p>Sign in here</p>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <FormControl 
                        type="email" 
                        placeholder="Email" 
                        name='email'
                        value={email}
                        onChange={e=>onChange(e)}
                        required
                        />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <FormControl 
                        type="password" 
                        placeholder="Password" 
                        name='password'
                        value={password}
                        onChange = { e => onChange(e)}
                        minLength='6'
                        required
                        />
                    <Form.Text className="text-muted">
                    We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button class='btn btn-primary' type="submit">Login</Button>
            </Form>
            <p className='mt3'>
                Not yet registered? <Link to='/signup'>Sign up</Link>
            </p>
            <p className="mt-3">
                Forgot your password? <Link to='/reset_password'>Reset Password</Link>
            </p>
        </Container>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ login }) (Login);
