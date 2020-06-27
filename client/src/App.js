import React, {useState, useEffect }from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
//import Axios from 'axios';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import BlogsPage from "./Pages/BlogsPage";
import TutorialPage from './Pages/TutorialPage';
import NewUserPage from './Pages/NewUserPage';
import MainNavbar from './Components/Navbar/Navbar';
import MainFooter from './Components/Footer/Footer';
import UserContext  from './context/UserContext';
import Post from './Components/Post/Post';
import API from './api';
function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });


  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await API.post(
        "/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await API.get("/users", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data
        })
      }
    };
    checkLoggedIn();
  }, []);



  return (
    <div className='App'>
      <div className='page-container'>
        <div className='content-wrap'>
          <Router>
            <UserContext.Provider value={{userData, setUserData}}>
            <MainNavbar />
            <Switch>
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/new-user" component={NewUserPage} />
              <Route exact path="/blog" component={BlogsPage} />
              <Route path="/blog/:slug" render={Post} />
              <Route exact path="/tutorial-page" component={TutorialPage} />
            </Switch>
            <MainFooter />
            </UserContext.Provider>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
