import { useEffect, useState } from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import axios from 'axios'

const HabinContainer = styled.div`
   width:300px;
   height:300px;
   margin:10px auto;
   background-color:pink;
`

const JinwooTitle = styled.h1`
  background-color:black;
  color:yellow;
  font-size:2em;
`

const YjungButton = styled.button`
  width:150px;
  height:100px;
  border-radius:10%;
  background-color:blue;
  color:white;
  font-size:1.5em;

${props =>
    props.$primary &&
    css`
      background: #BF4F74;   
      color: black;
    `};

  
  ${props =>
  props.$secondary &&
  css`
    background: yellow;
    color: black;
  `};
`

function App() {

  const [frds,setFrd] = useState([])

  // 사이드 효과
  useEffect(()=>{
    // 버튼 클릭으로 아래 내용을 부르면 계속 re-rendering이 예상됨. 해결책은?
    axios.get("http://localhost:8080/habin/friends").then(resp => {
      console.log("스캔 ",resp.data)
      setFrd(resp.data);
    })
  },[])

  return (
    <HabinContainer>
      {
        frds.length && frds.map((frd,inx) => (<h1 key={inx}>{frd}</h1>))
      }
      <JinwooTitle>돌고래도 하나</JinwooTitle>
      <YjungButton>상어도 둘</YjungButton>
      <YjungButton $primary>고래도 셋</YjungButton>
      <YjungButton $secondary>해마도 넷</YjungButton>
    </HabinContainer>
  )
}

export default App
