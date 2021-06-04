import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Row, Col, Button, Nav } from 'react-bootstrap'

const SignUpScreen = () => {
  return (
    <Row>
      <Col md={5} />
      <Col md={3}>
        <Form method='POST' action='http://localhost:5000/members'>
          <Form.Group controlId='FirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder='First Name' />
          </Form.Group>
          <Form.Group controlId='LastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder='Last Name' />
          </Form.Group>
          <Form.Group controlId='mobileNumber'>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type='text' placeholder='Mobile No.' />
          </Form.Group>
          <Form.Group controlId='Email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='Password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='primary' type='submit' className='m-2'>
            Submit
          </Button>
          <LinkContainer to='/signin'>
            <Nav.Link>
              <i className='ms-auto'></i> Sign In?
            </Nav.Link>
          </LinkContainer>
        </Form>
      </Col>
    </Row>
  )
}

export default SignUpScreen
