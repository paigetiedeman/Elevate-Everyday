import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Button, Segment } from 'semantic-ui-react';

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
    <Segment
      textAlign="center"
      color="purple"
      className="align-items-center justify-content-center"
      style={{ maxHeight: '100vh' }}
    >
      <div>
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
              <Button color="teal" type="submit">
                Log In
              </Button>
              {/* <div className="w-100 text-center mt-3">
            <Link to="/profile">See Profile?</Link>
          </div> */}
              <Button color="teal" variant="link" onClick={doSignOut}>
                Log Out
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Segment>
  );
}
