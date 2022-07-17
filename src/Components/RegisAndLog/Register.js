import React,{ useState,useContext } from 'react';
import LoginContext from "../../State/LoginContext";
import { Button,Form,Container,FloatingLabel } from 'react-bootstrap';

const Register = (props) => {

  const LoginCtx = useContext(LoginContext)

  const [register,setRegister] = useState({
    email:"",
    password:""
  })

  const RegisterApi = () => {
    fetch("https://hexschool-tutorial.herokuapp.com/api/signup",{
      method: 'POST',
      body: JSON.stringify(register),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((res)=>{
      console.log(res)
      if(res.success===true){
        alert("恭喜註冊成功")
        LoginCtx.setPage(true);
      }else{
        alert(res.message)
      }
    })
  }

  const registerHandler = (e) => {
    e.preventDefault()
    RegisterApi()
  }

  return (
    <Form 
      className="m-5 bg-light p-3"
      onSubmit={registerHandler}>
      <Container>

        <Form.Group className="my-4" controlId="floatingEmail">
          <Form.Label>Email address :</Form.Label>
          <FloatingLabel
            controlId="floatingEmail"
            label="name@example.com"
            className="mb-3"
          >
            <Form.Control 
              type="email" 
              placeholder="name@example.com"
              onChange={(e)=>{
                setRegister((prev)=>{
                  return{...prev,email:e.target.value}
                })
              }}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-5" controlId="floatingPassword">
          <Form.Label>Password :</Form.Label>
          <FloatingLabel controlId="floatingPassword" label="******">
          <Form.Control 
            type="password" 
            placeholder="******"
            onChange={(e)=>{
              setRegister((prev)=>{
                return{...prev,password:e.target.value}
              })
            }}
          />
          </FloatingLabel>
        </Form.Group>

        <Button 
          variant="warning" 
          type="submit"
        >
          Register
        </Button>

      </Container>
    </Form>
  )
}

export default Register