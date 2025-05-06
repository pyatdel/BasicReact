import React, {useEffect, useState} from 'react'

function Sumin8() {

    console.log("Sumin8")

    const [count, setCount] = useState(100)
    const [flag, setFlage] = useState(false)

    const handleChange = () => {
        // flag = true; // 나쁜 방식
        setFlage(!flag) // 누를 때마다 토글, 리렌더링
    }

    const handleCount = () =>{
        setCount(count + 3)
    }

    // 사이드 이펙트라고 부른다. 무슨일이 생기면 실행
    // 사람과 환경에 따라 많이 사용할 수도, 안 쓸 수도 있다. tanstack query때문에
    useEffect(()=>{
        alert("누가 숫자를 조")
        document.title=`수민 ${count}`
        console.log("useEffect")
    },[count]) // 두번째 매개변수를 dependecies라 부르는데, []을 주면 딱 한번만 실행된다

  return (
    <div>
        <h1>윤호{count}</h1>
        <button onClick={handleChange}>체인지</button>
        <button onClick={handleCount}>9회말</button>
    </div>
  )
}

export default Sumin8