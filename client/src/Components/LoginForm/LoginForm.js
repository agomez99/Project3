import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"


const LoginForm = () => {
   const [email, setEmail]= useState()
   const [password, setPassword]= useState()

    const handleLogin = event => {
        event.preventDefault();
        console.log("email is " + email);
        console.log("password is " + password);
    }

    return (
        <Card body className="cardContainer">
            <Form onSubmit={handleLogin}>
               
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange= {event=> setPassword(event.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>
                <br/>              
                    <NavLink to="/new-user" >Register</NavLink>
               
                

            </Form>
        </Card>
    )
}

export default LoginForm;