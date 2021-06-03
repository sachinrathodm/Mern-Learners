import React from 'react'
import { Form, Button, Row, Col, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const MemberRegistrationScreen = () => {
  return (
    <Row>
      <Col md={5} />
      <Col md={3}>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='primary' type='submit' className='m-2'>
            Submit
          </Button>
          <LinkContainer to='/forgotpassword'>
            <Nav.Link>
              Forgot <i className='forgot-password'></i> password?
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/signup'>
            <Nav.Link>
              <i className='ms-auto'></i> Create New Account?
            </Nav.Link>
          </LinkContainer>
        </Form>
      </Col>
    </Row>
  )
}

export default MemberRegistrationScreen
