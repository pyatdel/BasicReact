import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function 
Friends() {

  const gjStyle = ({isActive}) =>{
     //console.log("체크:",props)
      const gjs = isActive? {
          textDecoration:"none",
          fontWeight:"bold"
       }: {
        textDecoration:"underline",
        fontWeight:"normal"
       }
       return gjs
    }

  return (
    <div>
      <h1>해양생물</h1>
      <nav>
         <NavLink to={"/friends/1"} style={gjStyle} >해양생물</NavLink>
         <NavLink to={"/friends/2"} style={gjStyle} >해양생생물</NavLink>
         <NavLink to={"/friends/3"} style={gjStyle} >해양생생생물</NavLink>
      </nav>
      <hr />
      <Outlet />
      <hr />
      <hr />
      <h1 style={{backgroundColor:"skyblue"}}>&copy;바다친구들</h1>
    </div>

  )
}

export default Friends