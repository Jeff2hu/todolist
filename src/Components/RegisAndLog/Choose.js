import React,{ useState,useContext } from 'react';
import LoginContext from "../../State/LoginContext"
import Register from './Register';
import Login from './Login';
import { Button,Container,Offcanvas,Card,ListGroup,Row,Col } from 'react-bootstrap';

const Choose = () => {

  const LoginCtx = useContext(LoginContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Container className='my-5'>
        <Card
          onClick={(e)=>{
            if(e.target.tagName==="BUTTON"){
              e.target.parentNode.parentNode.parentNode.classList.add("none")
            }
          }}>
          <Card.Body>
            <Card.Text className="d-flex justify-content-between align-items-baseline">
              Hello! Welcome here , before you login , please click the button first!
              <Button 
                variant="secondary" 
                onClick={handleShow}>
                Click!
              </Button>
            </Card.Text>
          </Card.Body>
          {/* <ListGroup className='text-center'>
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
          </ListGroup> */}
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
      <Row className="loginPage m-5 gx-0">
        <Col className='col-8'>
          <div className="loginPage-bg bg-dark text-dark" style={{height:"85vh"}}>
            <div className="loginPage-btn d-flex flex-column">            
              <Button 
                variant="secondary"
                onClick={()=>{
                  if(LoginCtx.page===false){
                    return;
                  }else{
                    LoginCtx.setPage(!LoginCtx.page)
                  }
                }}>Register</Button>
              <Button 
                variant="secondary"
                onClick={()=>{
                  if(LoginCtx.page===true){
                    return;
                  }else{
                    LoginCtx.setPage(!LoginCtx.page)
                  }
                }}>Login</Button>
            </div>
          </div>
        </Col>
        <Col className='col-4'>
          {!LoginCtx.page && <Register/>}
          {LoginCtx.page && <Login />}
        </Col>
      </Row>

      </Container>
    </React.Fragment>
  )
}

export default Choose