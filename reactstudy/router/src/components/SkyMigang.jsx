import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SkyMigang() {
  // 주소 표시줄에 ?로 넘어오는 아그들 처리, useParams는 /로 구분되는 걸 처리 
   const [searchParams,setSearchParams] = useSearchParams()
  /*
   console.log("체에킁:",searchParams.get("name"));
   console.log("체에킁:",searchParams.get("age"));
   console.log("체에킁:",searchParams.get("alias"));
  */
  const handleJuso = ()=>{
    setSearchParams({
       name:"곶게",
       age:1,
       alias:"살",
       answer:"가득"
    })
  }

  return (
    <div>
      <h1>비늘</h1>
      <button onClick={handleJuso}>딸깍</button>
      <h3>
          Follower {searchParams.get("name")}에
          {searchParams.get("age")}는
          {searchParams.get("alias")}
      </h3>
    </div>
  )
}

export default SkyMigang