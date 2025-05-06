import { Box, Button, IconButton, Typography } from "@mui/material"
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import BackHandTwoToneIcon from '@mui/icons-material/BackHandTwoTone';
import MgSidebar from "./MgSidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import Merong from "./Merong";

function App() {

  return (
    <>
      <Box display={"flex"}>
      <MgSidebar />
      <Box>
        <Outlet />
        <h1>유노 필요없음</h1>
        <Box display={"flex"}>
          <Box display={"flex"}>
            <IconButton>
              <AdbOutlinedIcon />
            </IconButton>
            <Typography variant="h4" color={"white"} bgcolor={"black"}>
              최강 미강
            </Typography>
          </Box>
          <Box display={"flex"}>
            <IconButton>
              <BackHandTwoToneIcon />
            </IconButton>
            <Button variant="outlined">윤정만세</Button>
          </Box>
        </Box>
      </Box>

      </Box>
    </>
  )
}

export default App
