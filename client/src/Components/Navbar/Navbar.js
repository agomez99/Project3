import React, {useContext, Fragment}  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
//import AuthOptions from '../../Components/AuthOptions/AuthOptions';
import { Link } from 'react-router-dom'
import AuthContext from '../../context/authContext/authContext'

import './style.css';

const MainNavbar = () => {
    const {logout, clearErrors, userAuth, user} = useContext(AuthContext)
  const handleLogout = () => {
    logout()
    clearErrors()
  }

    const userLinks = (
        <Fragment >
        <li className="user">  Hello, {user && user.name} </li>
            <span className="sm-hide">|</span>
            <li>
              <a href="#!" onClick={handleLogout}>
                <span className="sm-hide">Logout</span>
                <i className="fas fa-sign-out-alt"></i>
              </a>
            </li>
        </Fragment>
        )
    
        const authLinks = (
          <Fragment>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <span className="sm-hide">|</span>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          </Fragment>
        )
    

    return(
        <div>
    <Navbar variant="dark" className="navbar">
        <Navbar.Brand>Code-Source</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/blog">Blogs</Nav.Link>
            <Nav.Link href="/tutorial-page">Tutorials</Nav.Link>
        </Nav>
        <Form inline>
                    <div className="auth">
                            {userAuth ? userLinks : authLinks}
                        </div>
            <FormControl type="text" placeholder="Search" className="mx-auto" />
            <Button variant="outline-info" className="search-button">Search</Button>
        </Form>
    </Navbar>
    </div>
    );
};

export default MainNavbar; 