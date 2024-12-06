import { Routes, Route } from "react-router-dom"
import WhiteSumin from "./components/WhiteSumin"
import SkyMigang from "./components/SkyMigang"
import BlueChan from "./components/BlueChan"
import NaviBar from "./components/NaviBar"
import NotFound from "./NotFound"
import Friends from "./components/Friends"
import OnlyOne from "./components/OnlyOne"
import { Button } from "@mui/material"
function App() {

  return (
    <>
      <NaviBar />
      <hr />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Routes>
        <Route path="/" element={<WhiteSumin />} />
        <Route path="/hiphap" element={<SkyMigang />} />
        <Route path="/manchan" element={<BlueChan />} />
        <Route path="/friends" element={<Friends />} >
            <Route path="/friends/:fid" element={<OnlyOne />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
