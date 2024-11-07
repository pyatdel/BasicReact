import { useReducer } from "react";

// 무조건 만들어야 한다
function reducer(count, action) {
    switch (action.type) {
      case 'inc1': {
        return count + 1
      }

      case 'de1': {
        return count - 1
      }

      case 'double': {
        return count * 2
      }
    }
  }

function Counter2() {

    // useState 사용보다 조금 복잡하거나 경우의 수가 많을 때 사용
    const [count, dispatch] = useReducer(reducer,0);

const unoInc = () => {
    dispatch({type: 'inc1'})
}

const unoDec = () => {
    dispatch({type: 'dec1'})
}

const unoDouble = () => {
    dispatch({type: 'double'})
}
  return (
    <div>
        <h1>낯설어{count}</h1>
        <button onClick={unoInc}>+</button>
        <button onClick={unoDec}>-</button>
        <button onClick={unoDouble}>x2</button>
    </div>
  )
}

export default Counter2