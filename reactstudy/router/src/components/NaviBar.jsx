import React from 'react'
import { Link } from 'react-router-dom'

function NaviBar() {
  return (
    <nav>
       <Link to={"/"}>불고래</Link>
       <Link to={"/hiphap"}>물고래</Link>
       <Link to={"/manchan"}>풀고래</Link>
       <Link to={"/friends"}>나무고래</Link>
    </nav>
  )
}

export default NaviBar