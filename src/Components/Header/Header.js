import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3>Elevate Everyday</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Workouts <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">Calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link disabled" to="#">Meal Plan</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link disabled" to="#">Create User</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}
