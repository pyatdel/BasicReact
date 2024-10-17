import './App.css'
import Sumin from './Sumin.jsx'
function App() {

  

  return (
    <div>
      <h1>뭘봐</h1>
      <Sumin name={"육수민"} age={20} alias={"노잼"}/>
      <hr/ >
      <Sumin name={"승민"} age={24} alias={"원래재미없지"} />
    </div>
  )
}

export default App
