import React, {useState} from "react";
import {Navigate, Link} from "react-router-dom";
import {connect} from "react-redux";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { signup } from "../../actions/auth";


const Register = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: '' 
    });
    
    const {name, email, password, re_password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password === re_password) {
            signup(name, email, password, re_password);
            setAccountCreated(true);
        }    
    };



    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    if (accountCreated){
        return <Navigate to="/login" />
    }

    return (
        <Container className="login-form">
            <h2>Sign Up</h2>
            <p>Sign up here</p>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <FormControl 
                        type="text" 
                        placeholder="Name*" 
                        name='name'
                        value={name}
                        onChange={e=>onChange(e)}
                        required
                        />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <FormControl 
                        type="email" 
                        placeholder="Email*" 
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

                <Form.Group className="mb-3">
                    <Form.Label>Re Password</Form.Label>
                    <FormControl 
                        type="password" 
                        placeholder="Confirm Password" 
                        name='re_password'
                        value={re_password}
                        onChange = { e => onChange(e)}
                        minLength='6'
                        required
                        />
                </Form.Group>

                <Button class='btn btn-primary' type="submit">Register</Button>
            </Form>
            <p className='mt3'>
                Already have account? <Link to='/login'>Login</Link>
            </p>
        </Container>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ signup }) (Register);
