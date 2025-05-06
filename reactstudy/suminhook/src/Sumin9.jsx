import React, { useRef, useState } from 'react'

function Sumin9() {
    const suminText = useRef(null) // 값을 가리킬 수도 있는데 그렇게는 잘 안씀
    const suminText2 = useRef(null) // 같은 텍스트에 걸면, 좋지 않다
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        console.log("수",e.target)
        console.log("민",suminText.current)
        setValue(suminText.current.value)
    }

  return (
    <div>
      <h1>유정</h1>
        <input type="text" ref={suminText2} defaultValue={value}/>
        <input type="text" ref={suminText} onChange={handleChange}/>
    </div>
  )
}

export default Sumin9