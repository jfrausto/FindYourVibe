import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import API from '../utils/API';


export default function ProfileDetails() {
    const { currentUser } = useAuth()

    async function renderUserName() {
        await API.getCurrentUser(currentUser.email).then(res => {
            console.log("THE USER IS HERE")
            console.log(res)
            console.log(currentUser)
            return <h1>{currentUser.email}</h1>
        })
    }
    
    return (
        <>
            <Container className="userProfileContainer">
                { (currentUser) ? <h1>{currentUser.email}</h1> : <h1> No User Logged In</h1> }
                {/* {(currentUser != null) ? renderUserName() : <h1> No User Logged In</h1> } */}
            </Container>
        </>
    )
}
