import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Container } from 'react-bootstrap';

export default function Login() {
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(function () {
        alert('Successfully signed in!');
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  function doSignOut() {
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
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div style={{ minWidth: '800px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form onSubmit={doSignIn}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="signInEmail" required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="signInPassword" required />
              </Form.Group>
              <br />
              <Button className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            {/* <div className="w-100 text-center mt-3">
            <Link to="/profile">See Profile?</Link>
          </div> */}
          </Card.Body>
          <Button variant="link" onClick={doSignOut}>
            Log Out
          </Button>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  );
}
