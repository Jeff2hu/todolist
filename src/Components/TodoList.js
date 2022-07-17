import React , { useState , useContext } from 'react';
import TodoDataContext from '../State/TodoDataContext';
import TodoData from './TodoListComponents/TodoData';
import ListTab from './TodoListComponents/ListTab';

import { Container,Row,Col } from 'react-bootstrap';


const Home = () => {

  const TodoDataCtx = useContext(TodoDataContext)

  const [inputData,setInputData] = useState("");
  

  return (
    <Container className="my-5">
      <Row>
        <Col className='col-2'>
        </Col>
        <Col className='col-8'>
          <div className="wrap">
            <div className="card card-input">
              <input 
                className="card-input__text" 
                type="text" 
                placeholder="Please enter your todo" 
                onChange={(e)=>{setInputData(e.target.value)}}
                value={inputData}
              />
              <a
                className="card-input__add"
                onClick={()=>{
                  if(inputData.trim().length===0){
                    alert("Please confirm your input")
                    return;
                  }else{
                    TodoDataCtx.renderHandler(inputData)
                    setInputData("")
                  }}}
              >+</a>
            </div>
            <div className="card card-list">
              <ListTab />
              <div className="cart-content">
                <TodoData />
              </div>
              <div className="card-footer">
                <p className="workNum">Still has {TodoDataCtx.renderData.length} working todo</p>
                <a href="#" id="deleteAll">Clean all done todo</a>
              </div>
            </div>
          </div>
        </Col>
        <Col className='col-2'></Col>
      </Row>
    </Container>
  )
}

export default Home