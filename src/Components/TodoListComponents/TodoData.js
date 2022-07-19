import React,{ useContext , useState } from 'react';
import TodoDataContext from '../../State/TodoDataContext';

const TodoData = () => {
  
  const TodoDataCtx = useContext(TodoDataContext);
  const [upDateList,setUpDateList] = useState([])

  const clickHandler = (e) => {
    if(e.target.classList[0]==="delete"){
      const deleteIndex = TodoDataCtx.renderData.findIndex((item)=>Number(e.target.parentElement.dataset.id)===item.id)
      TodoDataCtx.setRenderData((prev)=>{
        prev.splice(deleteIndex,1)
        return [...prev]
      })
    }else{
      const target = e.target.parentElement.parentElement;
      // {data:target.textContent,id:target.dataset.id}
      console.dir(target)
      console.log({data:target.textContent,id:target.dataset.id})
      if(e.target.checked){
        setUpDateList((prev)=>{return [...prev,{data:target.textContent,id:target.dataset.id}]})
      }else{
        setUpDateList((prev)=>{
          const deleteIndex = prev.findIndex((item)=>{return (target.dataset.id===item.id)})
          prev.splice(deleteIndex,1);
          console.log(prev)
          return [...prev]
        })
      }
    }
  }
  

  

  return (
    <ul className="list">
      {TodoDataCtx && TodoDataCtx.renderData.map((item)=>{
        return(
          <li 
            key={item.id} 
            data-id={item.id} 
            onClick={clickHandler}
          >
            <label className="checkbox">
              <input type="checkbox"/>
              <span>{item.data}</span>
            </label>
            <a className="delete"></a>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoData