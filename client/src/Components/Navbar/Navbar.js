import React, { useContext, Fragment } from "react";
//import Navbar from "react-bootstrap/Navbar";
//import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import image from "../../img/dummy.png";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typist from 'react-typist';



import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));





const MainNavbar = () => {

  const classes = useStyles();


  const { logout, clearErrors, userAuth, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    clearErrors();
  };

  const userLinks = (
    <Fragment>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/tutorial-page">Tutorials</Link>
      </li>
      <img src={image} alt="me" className="profile-img" />
      <li className="user"> Hello, {user && user.name} </li>
      <span className="sm-hide">|</span>
      <li>
        <a href="/" onClick={handleLogout}>
          <span className="sm-hide">Logout</span>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>

    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
        <i className="fa fa-user-plus" aria-hidden="true"></i>
      </li>
      <span className="sm-hide">|</span>
      <li>
        <Link to="/">Login</Link>
        <i className="fa fa-user" aria-hidden="true"></i>
      </li>
    </Fragment>
  );

  return (
    
    <div>

<AppBar position="static" className="app-bar">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h5" className={classes.title}>
    <Typist>
    <Typist.Delay ms={1000} />

      CodeSource
      </Typist>
    </Typography>
    <div className="auth">{userAuth ? userLinks : authLinks}</div>
  </Toolbar>
</AppBar>

{/* 


      <Navbar variant="dark" className="navbar">
        <Navbar.Brand className="logo">Code-Source</Navbar.Brand>
        <Form inline>
          <div className="auth">{userAuth ? userLinks : authLinks}</div>
        </Form>
      </Navbar> */}
    </div>
  );
};

export default MainNavbar;
