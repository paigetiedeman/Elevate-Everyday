import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {

  const navStyle = {
    backgroundColor: '#008080',
    color: 'white',
    display: 'flex',
    padding: '20px',
    marginBottom: '30px',
  };

  const linkStyle = {
    color: 'white',
    padding: '6px',
    fontSize: '18px',
  }

  // const title = {
  //   fontSize: '30px',
  // }

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" style={navStyle}>
      <Navbar.Brand className="elevate" style={{color: 'white'}}>Elevate Everyday</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Link className="link" to="/" style={linkStyle}>
          Workouts
        </Link>
        <Link className="link" to="/calendar" style={linkStyle}>
          Calendar
        </Link>
        <Link className="link" to="/signup" style={linkStyle}>
          Sign Up
        </Link>
        <Link className="link" to="/login" style={linkStyle}>
          Login
        </Link>
        <Link className="link" to="/profile" style={linkStyle}>
          Profile
        </Link>
        {/* 
              <Link className="disabled" to="/blog">Blog</Link>
             */}
        {/* 
              <Link className="nav-link disabled" to="#">Meal Plan</Link>
             */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
