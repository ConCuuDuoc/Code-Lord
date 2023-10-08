import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { reset_password } from "../../actions/auth";


const Resetpassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });
    
    const {email} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    //If the user authenticated
    //Redirect to the home page

    if (requestSent) {
        return <Navigate to="/" />
    }

    return (
        <Container className="login-form">
            <h2>Email to reset passwd</h2>
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
                    <Form.Text className="text-muted">
                    Make sure nhap email dung
                    </Form.Text>
                </Form.Group>
                <Button class='btn btn-primary' type="submit">Forg0nt</Button>
            </Form>
        </Container>
    );
};

export default connect(null,{ reset_password }) (Resetpassword);
