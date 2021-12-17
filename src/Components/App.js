import React from 'react'
import Header from './Header/Header'
import WorkoutControl from './Workout/WorkoutControl'
import ReusableForm from './Workout/ReusableForm'
import Footer from './Footer/Footer'
import Calendar from './Calendar/Calendar'
import Blog from './Blog/Blog'
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'
import Profile from './Authentication/Profile'
import UpdateProfile from './Authentication/UpdateProfile'
import PrivateRoute from './Authentication/PrivateRoute'
import ForgotPassword from './Authentication/ForgotPassword'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import { Container } from "react-bootstrap"
import './App.css';

function App() {

  return (
    <Router>
        <Header />
        <AuthProvider>
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}> 
          <div className="w-100" style={{ maxWidth: "400px" }}>
          <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/">
              {/* <WorkoutControl /> */}
              <ReusableForm />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
          </div>
          <Footer />
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
