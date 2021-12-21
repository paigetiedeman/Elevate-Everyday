import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
// import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

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
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  // const { signUp } = useAuth();
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match")
  //   }

  //   try {
  //     setError("")
  //     setLoading(true)
  //     await signUp(emailRef.current.value, passwordRef.current.value)
  //     history.push("/")
  //   } catch {
  //     setError("Failed to create an account")
  //   }

  //   setLoading(false)
  // }

  return (
    <>
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
              <Form.Control type="password" type="password" required />
            </Form.Group>
            <br />
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
