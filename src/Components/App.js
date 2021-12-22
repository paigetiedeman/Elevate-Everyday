import React from 'react';
import Header from './Header/Header';
import WorkoutControl from './Workout/WorkoutControl';
import Footer from './Footer/Footer';
import Calendar from './Calendar/Calendar';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// WIP: Authentication
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import Profile from './Authentication/Profile';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header />
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <WorkoutControl />
            </Route>
          </Switch>
      <Footer />
    </Router>
  );
}

export default App;
