import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import WorkoutControl from './Workout/WorkoutControl'
import Footer from './Footer/Footer'
import Calendar from './Calendar/Calendar'
import Blog from './Blog/Blog'
import SignUp from './Authentication/SignUp'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'



function App() {

  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);
  {/* {users.map((user) => {
return <div><h1>Welcome {user.email}!</h1></div>;
})} */}

  return (
    <AuthProvider>
      <Router>
        <Header />
      <div className="container"> 
        <Switch>
          <Route exact path="/">
            <WorkoutControl />
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
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
