import React,{ useContext , useState } from 'react';
import LoginContext from '../State/LoginContext';
import TodoDataContext from '../State/TodoDataContext';
import { Card,ListGroup,Container,Row,Col,FloatingLabel,Form,Button } from 'react-bootstrap';

const Profile = () => {

  const LoginCtx = useContext(LoginContext)
  const TodoDataCtx = useContext(TodoDataContext);
  const [text,setText] = useState("")

  return (
    <Container className='my-5'>
      <Row>
        <Col className='col-8'>
          <Card className='p-3'>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Title><h2>TodoList!</h2></Card.Title>
              <Card.Text>
                You can write down anything you want to do , It's all depends on you!
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Name : <span className='spanStyle'>{LoginCtx.userName}</span></ListGroup.Item>
              <ListGroup.Item>Email : <span className='spanStyle'>{LoginCtx.userEmail}</span></ListGroup.Item>
            </ListGroup>
          </Card>
          <div className="d-flex flex-column">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
                style={{height: '100px'}}
              />
            </FloatingLabel>
            <Button
              variant="dark"
              className='mt-4'
              onClick={()=>{alert("Thanks your comments!")
                            setText("")}}
              >Send</Button>
          </div>
        </Col>
        <Col className="col-4">
          <Card>
            <Card.Body>
              <Card.Title className='text-center'>Your Todo List</Card.Title>
              <Card.Subtitle className="my-3 text-muted text-center">{LoginCtx.userName}</Card.Subtitle>
              <Card.Text className="mt-5">
                <ul>
                  {TodoDataCtx && TodoDataCtx.renderData.map((item)=>{
                    return <li key={item.id} style={{listStyle:"decimal",marginTop:"15px"}}>{item.data}</li>
                  })}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile