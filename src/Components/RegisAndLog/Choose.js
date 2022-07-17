import React,{ useState,useContext } from 'react';
import LoginContext from "../../State/LoginContext"
import Register from './Register';
import Login from './Login';
import { Button,Container,Offcanvas,Card,ListGroup } from 'react-bootstrap';

const Choose = () => {

  const LoginCtx = useContext(LoginContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Container className='my-5'>
        <Card>
          <Card.Body>
            <Card.Title>Todo List Project</Card.Title>
            <Card.Subtitle className="my-3 text-muted">Jeff Zhu</Card.Subtitle>
            <Card.Text className="d-flex justify-content-between align-items-baseline">
              Hello! Welcome here , before you login , please click the button first!
              <Button variant="secondary" onClick={handleShow}>
                Click!
              </Button>
            </Card.Text>
          </Card.Body>
          <ListGroup className='mt-5 text-center'>
            <ListGroup.Item 
              action 
              onClick={()=>{
                if(LoginCtx.page===false){
                  return;
                }else{
                  LoginCtx.setPage(!LoginCtx.page)
                }
              }}>
              Register
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              onClick={()=>{
                if(LoginCtx.page===true){
                  return;
                }else{
                  LoginCtx.setPage(!LoginCtx.page)
                }
              }}>
              Login
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item>Use Skill :</ListGroup.Item>
            <ListGroup.Item>React-Bootstrap , React</ListGroup.Item>
            <ListGroup.Item style={{height:"3rem"}}></ListGroup.Item>
            <ListGroup.Item>The register will not<br></br> remember your mail & password</ListGroup.Item>
            <ListGroup.Item style={{height:"3rem"}}></ListGroup.Item>
            <ListGroup.Item>If there is any bug<br></br>I'm so sorry for any inconvenience.<br></br>This project is still update!<br></br>Or you can click Page-About to contact me</ListGroup.Item>
          </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>

      </Container>
      {!LoginCtx.page && <Register/>}
      {LoginCtx.page && <Login />}
    </React.Fragment>
  )
}

export default Choose