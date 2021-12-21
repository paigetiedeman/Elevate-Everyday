import React from 'react'
import Header from './Header/Header'
import WorkoutControl from './Workout/WorkoutControl'
import Footer from './Footer/Footer'
import Calendar from './Calendar/Calendar'
import Blog from './Blog/Blog'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

// WIP: Authentication
import SignUp from './Authentication/SignUp'
// import Login from './Authentication/Login'
// import Profile from './Authentication/Profile'
// import UpdateProfile from './Authentication/UpdateProfile'
// import PrivateRoute from './Authentication/PrivateRoute'
// import ForgotPassword from './Authentication/ForgotPassword'
// import { AuthProvider } from '../contexts/AuthContext';
// import { Container } from "react-bootstrap"

function App() {

  return (
    <Router>
        <Header />
        {/* <AuthProvider>
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}> 
          <div className="w-100" style={{ maxWidth: "400px" }}>
          <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
          </div>
        </Container>
      </AuthProvider> */}
            <Switch>
            <Route path="/">
              <WorkoutControl />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            </Switch>
          <Footer />
    </Router>
  );
}

export default App;
