import React,{ useState } from "react";

const TodoDataContext = React.createContext({
  renderData:[],
  setRenderData:()=>{},
  renderHandler:()=>{},
})

export const TodoDataContextProvider = (props) => {
  
  const [renderData,setRenderData] = useState([]);
  const [filterData,setFilterData] = useState([])

  const renderHandler = (input) => {
    setRenderData((prev)=>{
      return[...prev,{
        data:input,
        id:new Date().getTime()
      }]
    })}

  return(
    <TodoDataContext.Provider
      value={{
        renderData:renderData,
        setRenderData:setRenderData,
        renderHandler:renderHandler,
        setFilterData:setFilterData
      }}
    >
      {props.children}
    </TodoDataContext.Provider>
  )
}

export default TodoDataContext