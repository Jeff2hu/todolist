import React,{ useContext , useReducer , useState } from 'react';
import { Button,Form,Container,FloatingLabel } from 'react-bootstrap';
import LoginContext from "../../State/LoginContext"

const Login = () => {

  const LoginCtx = useContext(LoginContext)
  const [formIsValid,setFormIsValid] = useState(null);

  const emailReducer = (state,action) => {
    switch (action.type) {
      case "emailInput":
        return{value:action.val,isValid:action.val.includes("@")}
      case "emailBlur":
        return{value:state.value,isValid:state.value.includes("@")}
      default:
        break;
    }
  }
  const passwordReducer = (state,action) => {
    switch (action.type) {
      case "passwordInput":
        return{value:action.val,isValid:action.val.trim().length>5}
      case "passwordBlur":
        return{value:state.value,isValid:state.value.trim().length>5}
      default:
        break;
    }
  }
  const nameReducer = (state,action) => {
    switch (action.type) {
      case "nameInput":
        return{value:action.val,isValid:action.val.trim().length>0}
      case "nameBlur":
        return{value:state.value,isValid:state.value.trim().length>0}
      default:
        break;
    }
  }
  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value:"",
    isValid:null
  })
  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
    value:"",
    isValid:null
  })
  const [nameState,dispatchName] = useReducer(nameReducer,{
    value:"",
    isValid:null
  })

  const emailHandler = (e) => {
    dispatchEmail({type:"emailInput",val:e.target.value})
    setFormIsValid(e.target.value.includes("@") && passwordState.isValid && nameState.isValid)
  }
  const passwordHandler = (e) => {
    dispatchPassword({type:"passwordInput",val:e.target.value})
    setFormIsValid(emailState.isValid && e.target.value.trim().length>5 && nameState.isValid)
  }
  const nameHandler = (e) => {
    dispatchName({type:"nameInput",val:e.target.value})
    setFormIsValid(emailState.isValid && passwordState.isValid && e.target.value>0)
  }

  const validEmailHandler = () => {
    dispatchEmail({type:"emailBlur"})
  };
  const validPasswordHandler = () => {
    dispatchPassword({type:"passwordBlur"})
  };
  const validNameHandler = () => {
    dispatchName({type:"nameBlur"})
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginApi()
  }

  const loginApi = () => {
    fetch("https://hexschool-tutorial.herokuapp.com/api/signin",{
      method: 'POST',
      body: JSON.stringify({
        email:emailState.value,
        password:passwordState.value
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      if(res.success===true){
        alert("恭喜登入成功!")
        LoginCtx.setIsLogged(true);
        LoginCtx.onLogin(nameState.value,emailState.value)
      }else{
        alert(res.message)
      }
    })
  }
  
  return (
    <Form onSubmit={submitHandler} className="m-5 bg-light p-3">
      <Container>
        <Form.Group className="my-4" controlId="floatingName">
          <Form.Label>Name :</Form.Label>
          <FloatingLabel controlId="floatingName" label="Jeff">
          <Form.Control 
            type="text" 
            placeholder="Jeff"
            className={nameState.isValid===false?"isValid":""}
            onChange={nameHandler}
            onBlur={validNameHandler}
          />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4" controlId="floatingEmail">
          <Form.Label>Email address :</Form.Label>
          <FloatingLabel
            controlId="floatingEmail"
            label="name@example.com"
            className="mb-3"
          >
            <Form.Control 
              type="email" 
              placeholder="name@example.com"
              className={emailState.isValid===false?"isValid":""}
              onChange={emailHandler}
              onBlur={validEmailHandler}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-5" controlId="floatingPassword">
          <Form.Label>Password :</Form.Label>
          <FloatingLabel controlId="floatingPassword" label="******">
          <Form.Control 
            type="password" 
            placeholder="******"
            className={passwordState.isValid===false?"isValid":""}
            onChange={passwordHandler}
            onBlur={validPasswordHandler}
          />
          </FloatingLabel>
        </Form.Group>

        <Button 
          variant="warning" 
          type="submit"
          disabled={!formIsValid}
        >
          Login
        </Button>

    </Container>
  </Form>
  )
}

export default Login