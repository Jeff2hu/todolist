import React,{ useRef } from 'react'

const ListTab = () => {

  const Tab_ul = useRef("")

  return (
    <ul 
      className="card-list__tab"
      ref={Tab_ul}
      onClick={(e)=>{
        Tab_ul.current.childNodes.forEach((item)=>{item.classList.remove("active")})
        e.target.classList.toggle("active")
      }}>
      <li className="active" data-tab="all">All</li>
      <li data-tab="work">Working</li>
      <li data-tab="done">Done</li>
    </ul>
  )
}

export default ListTab