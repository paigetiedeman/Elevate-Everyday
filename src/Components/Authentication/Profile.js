import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signOut, currentUser } from 'firebase/auth';
import { Container } from 'react-bootstrap';

export default function Profile() {

  
  function doSignOut(event) {
    const auth = getAuth();
    console.log(auth);
    signOut(auth)
      .then(function () {
        alert('Successfully signed out!');
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  return (
    <Container
      className="align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-6">Profile</h2>
            <strong>Email: </strong>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={doSignOut}>
            Log Out
          </Button>
          <Link to="/">Workouts</Link>
        </div>
      </div>
    </Container>
  );
}
