import React from 'react'
import Header from './Header/Header'
import WorkoutControl from './Workout/WorkoutControl'
import Footer from './Footer/Footer'
import Calendar from './Calendar/Calendar'
import Blog from './Blog/Blog'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <WorkoutControl />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
