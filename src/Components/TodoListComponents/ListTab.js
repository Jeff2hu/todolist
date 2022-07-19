import React,{ useRef , useReducer , useContext } from 'react';
import TodoDataContext from '../../State/TodoDataContext';


const ListTab = () => {

  const Tab_ul = useRef("")
  const TodoDataCtx = useContext(TodoDataContext);
  const tabReducer = (state,action) => {
    switch(action.type){
      case "all":
        return{}
      case "working":
        return{}
      case "done":
        return{}
      default:
      break;
    }
  }
  const [tabState,dispatchTab] = useReducer(tabReducer,{
    arr:[]
  })

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
          dispatchTab({type:"all"})
        }}>All</li>
      <li
        onClick={()=>{
          dispatchTab({type:"all"})
        }}>Working</li>
      <li
        onClick={()=>{
          dispatchTab({type:"all"})
        }}>Done</li>
    </ul>
  )
}

export default ListTab