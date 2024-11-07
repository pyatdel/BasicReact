import Jinmo from "./jinmo"
import Sumin7 from "./Sumin7"

function App2() {
  return (
    <div>
        <h1>이건 App2</h1>
        <Sumin7 author={"수민"} insa={"hello"}>
            <Jinmo name="고래" how="수염"/>
            <Jinmo name="상어" how="수염"/>
            <Jinmo name="가재" how="수염"/>
            <Jinmo name="아귀" how="수염"/>
        </Sumin7>
    </div>
  )
}

export default App2