import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Segment, Button } from 'semantic-ui-react';

export default function SignUp() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(function () {
        alert('Successfully signed up!');
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  return (
    <Segment
      color="purple"
      className="align-items-center justify-content-center"
      style={{ maxHeight: '100vh' }}
    >
      <div>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={doSignUp}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" name="password" required />
              </Form.Group>
              <br />
              <Button color="teal" className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Segment>
  );
}
