import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import {connect} from "react-redux";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap/Col";
import { verify } from "../../actions/auth";


const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    
    const verify_user = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };

    //If the user authenticated
    //Redirect to the home page

    if (verified) {
        return <Navigate to="/" />
    }

    return (
        <Container className="login-form">
            <Col className = "d-flex flex-column justify-content-center align-items-center">
            <h2>Verify</h2>

            <Button 
            onClick={verify_user}
            className="btn btn-primary"
            >
                Verify
            </Button>
            </Col>
        </Container>
    );
};
export default connect(null,{ verify }) (Activate);
