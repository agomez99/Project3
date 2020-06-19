import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

const MainNavbar = () => {
    return(
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Code-Source</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/blog">Blogs</Nav.Link>
            <Nav.Link href="/tutorial-page">Tutorials</Nav.Link>
            <Nav.Link href="/user-story-page">User Stories</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>);
};

export default MainNavbar; 