import React from 'react';
import Header from './Header/Header';
import WorkoutControl from './Workout/WorkoutControl';
import Footer from './Footer/Footer';
import Calendar from './Calendar/Calendar';
import DisplayList from './Blog/DisplayList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import Profile from './Authentication/Profile';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container className="align-items-center">
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
              <DisplayList />
            </Route>
            <Route path="/">
              <WorkoutControl />
            </Route>
          </Switch>
        </Container>
      </Router>
      <Footer />
    </>
  );
}

export default App;
