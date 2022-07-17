import React from 'react';
import { Card,Container,Row,Col } from 'react-bootstrap';
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';

const About = () => {
  return (
    <Container className='my-5 d-flex align-items-center' style={{height:"100vh"}}>
      <Row>
        <Col className='col-5 bg-light'>
          <Card className="text-white m-4">
              <Card.Img src="https://images.unsplash.com/photo-1499159058454-75067059248a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="Card image" />
          </Card>
        </Col>
        <Col className='col-7 bg-dark text-light'>
          <Container className='p-2'>
            <Card.Body className='d-flex justify-content-center mt-5'>
              <Card.Text className='d-flex align-items-start flex-column fs-5 justify-content-between'>
                <p>Author: <span className='spanStyle'>Jeff Zhu</span></p>
                <p>Github: <span className='spanStyle'>Jeff Zhu</span></p>
                <p>Phone: <span className='spanStyle'>0983165571</span></p>
                <p>Email: <span className='spanStyle'>lovezhu661991@gmail.com</span></p>
              </Card.Text>
              <Card.Text className='d-flex flex-column justify-content-between ms-5' style={{marginTop:"-30px"}}>
                <a className="icons__icon icon--ins" href="https://www.instagram.com/b_wo.ow_d/"><AiFillInstagram /></a>
                <a className="icons__icon icon--face" href="https://www.facebook.com/profile.php?id=100002560997969"><AiFillFacebook /></a>
                <a className="icons__icon icon--git" href="https://github.com/Jeff2hu"><AiFillGithub /></a>
              </Card.Text>
            </Card.Body>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default About