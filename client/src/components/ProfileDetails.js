import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import API from '../utils/API';
import "./styles/ProfileDetails.css";


export default function ProfileDetails() {
    const { currentUser } = useAuth()
    const [loggedUser, setLoggedUser] = useState([]);

    function renderUserProfile() {
        if (currentUser) {
            return (
                <>
                    <img src="https://i.imgur.com/2MNpqfV.png" alt="Cartoon Goose" className="profilePic"/>
                    <h1 id="displayName">{loggedUser.firstName} {loggedUser.lastName}</h1>
                    <h2 id="username">@{loggedUser.userName}</h2>
                    <p id="bio">I can't wait to update my bio with something really interesting to say!</p>
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
