import React,{ useRef , useContext } from 'react';
import TodoDataContext from '../../State/TodoDataContext';


const ListTab = () => {

  const Tab_ul = useRef("")
  const TodoDataCtx = useContext(TodoDataContext);

  return (
    <ul 
      className="card-list__tab"
      ref={Tab_ul}
      onClick={(e)=>{
        Tab_ul.current.childNodes.forEach((item)=>{item.classList.remove("active")})
        e.target.classList.toggle("active")
      }}>
      <li 
        className="active"
        onClick={()=>{
          TodoDataCtx.setRenderData(TodoDataCtx.data)
        }}>All</li>
      <li
        onClick={()=>{
        TodoDataCtx.setRenderData(TodoDataCtx.doneData)
        }}>Done</li>
    </ul>
  )
}

export default ListTab