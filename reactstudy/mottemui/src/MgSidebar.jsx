import React from 'react'
import { Sidebar, SubMenu } from 'react-pro-sidebar'
import { Route, useNavigate } from 'react-router-dom'

function MgSidebar() {
    const navigate = useNavigate()
    const navMG = () => {
        navigate("/merong")
    }
    const navS6 = () => {
        navigate("/sumin6")
    }

    return (
        <Box>
            {/*
            a 태그를 직접 쓰는 것과 Link, NavLink, useNavigate들 쓰는 것은 근본 동작이 다름
            */}
        <MgSidebar bgcolor={"green"} sx={{height:"98vh"}}>
            <a href="/merong">메롱</a>
          <h1>돌고래도 하나</h1>
          <SubMenu label="고래">
          <MenuItem> 자갈고래 </MenuItem>
          <MenuItem> 바위고래 </MenuItem>
          </SubMenu>
          <a href="/merong">메롱</a>
          <MenuItem component={<Link to="/documentation" />}> 바늘고래 </MenuItem>
          <MenuItem> 실고래 </MenuItem>
          </MgSidebar>
        </Box>
      )
}

export default MgSidebar