import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './app/friendSlice'

function Friend() {
  const frdNames = useSelector((state)=> state.friend.names)
  const dispatch = useDispatch()

  const handleAdd = ()=>{
     dispatch(add("지영"))
  }

  const handleRemove = ()=>{
    dispatch(remove("지영"))
  }

  return (
    <div>
       <button onClick={handleAdd}>친구추가</button>
       {frdNames}
       <button onClick={handleRemove}>친구삭제</button>
    </div>
  )
}

export default Friend