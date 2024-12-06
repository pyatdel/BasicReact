import React from 'react'
import { useParams } from 'react-router-dom'

function OnlyOne() {
  const params = useParams()
  console.log("fid",params.fid)

  return (
    <div>
      <h3>고래 {params.fid}</h3>
    </div>
  )
}

export default OnlyOne