import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { reset_password_confirm } from "../../actions/auth";


const Resetpasswordconfirm = ({match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });
    
    const {new_password, re_new_password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to="/" />
    }

    return (
        <Container className="login-form">
            <h2>Enter new passwd</h2>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group className="mb-3">
                    <FormControl 
                        type="password" 
                        placeholder="New Password" 
                        name='new_password'
                        value={new_password}
                        onChange = { e => onChange(e)}
                        minLength='6'
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <FormControl 
                        type="password" 
                        placeholder="Confirm New Password" 
                        name='re_new_password'
                        value={re_new_password}
                        onChange = { e => onChange(e)}
                        minLength='6'
                        required
                        />
                </Form.Group>
                <Button class='btn btn-primary' type="submit">Reset password</Button>
            </Form>
        </Container>
    );
};

export default connect(null,{ reset_password_confirm }) (Resetpasswordconfirm);
