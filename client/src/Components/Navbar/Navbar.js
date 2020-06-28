import React, { useContext, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import image from "../../img/dummy.png";

import "./style.css";

const MainNavbar = () => {
  const { logout, clearErrors, userAuth, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    clearErrors();
  };

  const userLinks = (
    <Fragment>
      <li>
        <Link to="/blog">blog</Link>
      </li>
      <li>
        <Link to="/tutorial-page">tutorials</Link>
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
      <FormControl type="text" placeholder="Search" className="mx-auto" />
          <Button variant="outline-info" className="search-button">
            Search
      </Button>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
        <i class="fa fa-user-plus" aria-hidden="true"></i>
      </li>
      <span className="sm-hide">|</span>
      <li>
        <Link to="/">Login</Link>
        <i class="fa fa-user" aria-hidden="true"></i>
      </li>
    </Fragment>
  );

  return (
    
    <div>
      <Navbar variant="dark" className="navbar">
        <Navbar.Brand className="logo">Code-Source</Navbar.Brand>



        <Form inline>
          <div className="auth">{userAuth ? userLinks : authLinks}</div>
        </Form>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
