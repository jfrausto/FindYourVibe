import React, { useState } from "react";
import "../App.css";
import LandingSplash from "./LandingSplash";
import BlurbInput from "./BlurbInput";
import { useAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      {/* Card should eventually be replaced with nav functionality */}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Card>
      <Container>
        <LandingSplash />
        <BlurbInput />
      </Container>
    </>
  );
}
