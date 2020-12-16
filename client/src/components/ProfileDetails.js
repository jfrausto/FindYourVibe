import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import API from '../utils/API';
import "./styles/ProfileDetails.css";


export default function ProfileDetails() {
    const { currentUser } = useAuth()
    const [loggedUser, setLoggedUser] = useState([]);

    useEffect(() => {
        if (currentUser) {
            API.getCurrentUser(currentUser.email).then(res => {
                console.log(res)
            })
        }
    }, [currentUser]);


    return (
        <>
            <Container className="userProfileContainer">
                { (currentUser) ? <h1>{currentUser.email}</h1> : <h1> No User Logged In</h1> }
                {/* {(currentUser != null) ? renderUserName() : <h1> No User Logged In</h1> } */}
            </Container>
        </>
    )
}
