import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './Header.css';

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
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" style={navStyle}>
      <Navbar.Brand className="elevate" style={{ color: 'white' }}>
        Elevate Everyday
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavDropdown.Item>
          <Nav.Link as={Link} className="link" to="/" style={linkStyle}>
            Workouts
          </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Nav.Link as={Link} className="link" to="/blog" style={linkStyle}>
            Blog
          </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Nav.Link as={Link} className="link" to="/calendar" style={linkStyle}>
            Calendar
          </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Nav.Link as={Link} className="link" to="/signup" style={linkStyle}>
            Sign Up
          </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Nav.Link as={Link} className="link" to="/login" style={linkStyle}>
            Login
          </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Nav.Link as={Link} className="link" to="/profile" style={linkStyle}>
            Profile
          </Nav.Link>
        </NavDropdown.Item>
        {/* 
              <Nav.Link as={Link} className="nav-link disabled" to="#">Meal Plan</Nav.Link>
             */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
