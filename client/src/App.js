import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import BlogsPage from "./Pages/BlogsPage";
import TutorialPage from './Pages/TutorialPage';
import UserStoryPage from './Pages/UserStoryPage';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/blog" component={BlogsPage} />
          <Route exact path="/tutorial-page" component={TutorialPage} />
          <Route exact path="/user-story-page" component={UserStoryPage} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
