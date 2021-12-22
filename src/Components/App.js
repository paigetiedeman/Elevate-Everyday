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
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div style={{ minWidth: '800px' }}>
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
        </div>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
