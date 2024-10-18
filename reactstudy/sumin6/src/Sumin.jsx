import react from 'react'
import "./Sumin.css"

// 다른 이름으로 하면 문제가 항상 발생하진 않음
// 매개변수 Props에 구조 분해 적용
// {name, age, alias } = Props
function Sumin({name,age,alias}) {

    // console.log("체크:",Props);

    const handleClick = ()=> {
      alert("나 눌렀어?");
    }

    /* 아래 2개를 잘 구분해야 진도 나가는데 어려움이 없음! (중요중요)
      { handleClick }
      { () => handleClick() }
    */

  return (
    <div onClick= { ()=> {return handleClick() } }  style={{border:"20px groove black",color:"blue"}}>
      <h1 className='sumin1'>{name}</h1>
      {/* 이렇게 주석을 이용함! */}
      <h2>{age}</h2>
      <h3>{alias}</h3>
    </div>
  )
}

export default Sumin
