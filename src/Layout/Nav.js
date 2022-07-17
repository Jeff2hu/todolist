import React,{ useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container,Nav,Navbar,Button } from 'react-bootstrap';

import LoginContext from '../State/LoginContext';

const Navigation = () => {

  const LoginCtx = useContext(LoginContext)

  return (
    <Navbar bg="secondary" variant="dark">
        <Container className={`d-flex fs-5 ${LoginCtx.isLogged?"justify-content-between":"justify-content-around"}`}>
          <LinkContainer to="/">
            <Navbar.Brand className='fs-1'>Todo List</Navbar.Brand>
          </LinkContainer>
          {LoginCtx.isLogged && 
            <Nav>
              <LinkContainer to="/todoList/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <Button variant="outline-warning ms-5" onClick={LoginCtx.onLogout}>Logout</Button>
          </Nav>}
        </Container>
      </Navbar>
  )
}

export default Navigation