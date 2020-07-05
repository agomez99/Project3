import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import image2 from "./red.png" ;
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
  <img src={image2} alt="" className="logo" />
    <Typography variant="h4" className={classes.title}>
    <Typist>
    <Typist.Delay ms={1000} />
      CodeSource
      </Typist>
    </Typography>
    <div className="auth">{userAuth ? userLinks : authLinks}</div>
  </Toolbar>
</AppBar>
    </div>
  );
};

export default MainNavbar;
