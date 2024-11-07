import { useState } from "react"
import Counter from "./Counter"
import Sumin6 from "./Sumin6"
import Counter2 from "./Counter2"
import Sumin8 from "./Sumin8"
import Sumin9 from "./sumin9"

function App() {

  const [sum,setSum] = useState(0)

  const suminc = () => {
    console.log("체크",sum)
    setSum(sum+1)
  }

  return (
    <>
    <h1>시작</h1>
    {/* <h1>합은<span style={{color:"red",fontWeight:""}}>{sum}번</span></h1> */}
    <Sumin6 />
    </>
  )
}


export default App
