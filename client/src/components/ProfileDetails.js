import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";


export default function ProfileDetails() {
    const { currentUser } = useAuth()
    return (
        <>
            <Container className="userProfileContainer">
                { (currentUser) ? <h1>{currentUser.email}</h1> : <h1> No User Logged In</h1> }
            </Container>
        </>
    )
}
