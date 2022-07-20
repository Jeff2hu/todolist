import React,{ useContext , useState } from 'react';
import TodoDataContext from '../../State/TodoDataContext';

const TodoData = () => {
  
  const TodoDataCtx = useContext(TodoDataContext);
  const filterData = []

  const clickHandler = (e) => {
    if(e.target.classList[0]==="delete"){
      const deleteIndex = TodoDataCtx.data.findIndex((item)=>Number(e.target.parentElement.dataset.id)===item.id)
      TodoDataCtx.setData((prev)=>{
        prev.splice(deleteIndex,1)
        return [...prev]
      })
    }else{
      const target = e.target.parentElement.parentElement;
      if(e.target.checked){
        const deleteIndex = TodoDataCtx.data.findIndex((item)=>{return Number(target.dataset.id)===item.id});
        TodoDataCtx.setWorkingData((prev)=>{
          prev.splice(deleteIndex,1)
          return [...prev]
        })
        TodoDataCtx.setDoneData((prev)=>{
          return [...prev,{data:target.textContent,id:target.dataset.id}
        ]})
      }else{
        TodoDataCtx.setWorkingData((prev)=>{
          return [...prev,{data:target.textContent,id:target.dataset.id}
        ]})
        const deleteIndex = TodoDataCtx.doneData.findIndex((item)=>{return Number(target.dataset.id)===item.id})
        TodoDataCtx.setDoneData((prev)=>{
          prev.splice(deleteIndex,1)
          return [...prev]
        })
      }
    }
  }

  return (
    <ul className="list">
      {TodoDataCtx.renderData && TodoDataCtx.renderData.map((item)=>{
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