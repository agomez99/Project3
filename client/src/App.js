import React from 'react';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';

//import ProfilePage from "./Pages/ProfilePage";
import BlogsPage from "./Pages/BlogsPage";
import TutorialPage from './Pages/TutorialPage';
import MainNavbar from './Components/Navbar/Navbar';
import Post from './Components/Post/Post';


import Register from './Pages/Register'
import Login from './Pages/Login'
import AuthState from './context/authContext/AuthState'
import setToken from './utils/setToken'


if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  return (

        <AuthState>
          <Router>
            <MainNavbar />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/blog" component={BlogsPage} />
              <Route path="/blog/:slug" render={Post} />
              <Route exact path="/tutorial-page" component={TutorialPage} />
            </Switch>
          </Router>
          </AuthState>
  );
}

export default App;
