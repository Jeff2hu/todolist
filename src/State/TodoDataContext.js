import React,{ useEffect, useState } from "react";

const TodoDataContext = React.createContext({
  renderData:[],
  setRenderData:()=>{},
  renderHandler:()=>{},
})

export const TodoDataContextProvider = (props) => {
  
  const [data,setData] = useState([]);
  const [renderData,setRenderData] = useState([])
  const [doneData,setDoneData] = useState([])
  const [workingData,setWorkingData] = useState([])

  const dataHandler = (input) => {
    setData([...data,{
        data:input,
        id:new Date().getTime()
      }]
    )
  }

  useEffect(()=>{
    setRenderData(data)
    setWorkingData(data)
  },[data])

  return(
    <TodoDataContext.Provider
      value={{
        renderData:renderData,
        data:data,
        setData:setData,
        dataHandler:dataHandler,
        setRenderData:setRenderData,
        setDoneData:setDoneData,
        setWorkingData:setWorkingData,
        doneData:doneData,
        workingData:workingData
      }}
    >
      {props.children}
    </TodoDataContext.Provider>
  )
}

export default TodoDataContext