import React, { useContext } from 'react'
import { YjContext } from './main'

function Gangdae() {
  // 구조 분해를 잘 활용해야 멋진 사람!
  const {name, special, insa} = useContext(YjContext)
  console.log("체크:",name)

  const handleClick = ()=>{
      insa();
  }

  return (
    <div onClick={handleClick}>{name}{special}</div>
  )
}

export default Gangdae