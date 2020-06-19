import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import BlogsPage from "./Pages/BlogsPage";
import TutorialPage from './Pages/TutorialPage';
import UserStoryPage from './Pages/UserStoryPage';
import NewUserPage from './Pages/NewUserPage';
import MainNavbar from './Components/Navbar/Navbar';
import MainFooter from './Components/Footer/Footer';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Router>
          <MainNavbar />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/new-user" component={NewUserPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/blog" component={BlogsPage} />
            <Route exact path="/tutorial-page" component={TutorialPage} />
            <Route exact path="/user-story-page" component={UserStoryPage} />
          </Switch>
          <MainFooter />
        </Router>
      </div>
    </div>

  );
}

export default App;
