import { useDispatch, useSelector } from "react-redux"
import { dec, inc, incByVal } from "./app/counterSlice"


function Counter() {
  const suminVal = useSelector((state) => state.counter.value) 
  const dispatch = useDispatch()
  
  const hadd = ()=>{
     dispatch(inc())
  }
  
  const hdec = ()=>{
    dispatch(dec())
  }
  
  const h3add = ()=>{
    dispatch(incByVal(3))
  }

  return (
    <div>
      <button onClick={hadd}>증가</button>
      {suminVal}
      <button onClick={hdec}>감소</button>
      <button onClick={h3add}>3씩증가</button>
    </div>
  )
}

export default Counter