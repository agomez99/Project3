import "./style.css"
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewUserForm = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`this is the your username: ${username} `)
        console.log(`this is the your email: ${email} `)
        console.log(`this is the your password: ${password} `)
    }

    return (
        <Card body className="cardContainer">
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={event => setUsername(event.target.value)} />

                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                </Form.Group>


                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Card>
    )
}

export default NewUserForm;