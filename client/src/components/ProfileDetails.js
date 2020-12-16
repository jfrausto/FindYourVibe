import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import API from '../utils/API';
import "./styles/ProfileDetails.css";


export default function ProfileDetails() {
    const { currentUser } = useAuth()
    const [loggedUser, setLoggedUser] = useState([]);

    function renderUserProfile() {
        if (loggedUser) {
            return (
                <>
                    <h1>@{loggedUser.userName}</h1>
                </>
            )
        }
    }

    useEffect(() => {
        if (currentUser) {
            API.getCurrentUser(currentUser.email).then(res => {
                setLoggedUser(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [currentUser]);


    return (
        <>
            <Container className="userProfileContainer">
                {/* { (loggedUser) ? <h1>@{loggedUser.userName}</h1> : <h1> No User Logged In</h1> } */}
                {(currentUser) ? renderUserProfile() : <h1>No User Logged In</h1>}
            </Container>
        </>
    )
}
