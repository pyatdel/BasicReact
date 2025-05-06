import React, { useRef, useState } from 'react'

// 초기값
const initIdol = {
  mgId:0,
  mgName:"",
  mgAge:0
}

function IdolInput({ addIdol }) {
  const txtId = useRef(null);
  const txtName = useRef(null);
  const txtAge = useRef(null);

  const [idol,setIdol] = useState(initIdol) 


  const habinSubmit =(e) =>{
    e.preventDefault();  // form 전송이 안 일어나게
    console.log("확인확인",idol);
    addIdol(idol); // 상위 High-Order 컴포넌트에 전달
  }

  const handleId = (e)=>{
    console.log("체크",txtId.current);
    console.log("체액크",e.target.value);
    // txtId.current = 
    // txtId.current.value = e.target.value; 
    // mgId값만 수정한 새로운 newIdol변수 생성
    const newIdol = {...idol, mgId:e.target.value}
    setIdol(newIdol);
  }

  const handleName = (e)=>{
    //txtName.current.value = e.target.value;
    const newIdol = {...idol, mgName:e.target.value}
    setIdol(newIdol);     
  }

  const handleAge = (e)=>{
    //txtAge.current.value = e.target.value
    const newIdol = {...idol, mgAge:e.target.value}
    setIdol(newIdol);
  }


  return (
    <div>
      <form onSubmit={habinSubmit}>
      <table border={1} width={400}>
        <tbody>
          <tr>
            <td>아이디</td>
            <td><input type='number' ref={txtId} value={idol.mgId} onChange={handleId} /></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><input type='text' ref={txtName} value={idol.mgName} onChange={handleName} /></td>
          </tr>
          <tr>
            <td>나이</td>
            <td><input type='number' ref={txtAge} value={idol.mgAge}  onChange={handleAge} /></td>
          </tr>
          <tr>
            <td colSpan={2}><button>빠튼</button></td>
          </tr>
        </tbody>
       </table>
      </form>
    </div>
  )
}

export default IdolInput