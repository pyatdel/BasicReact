import React from 'react'

const avtURL = "https://api.dicebear.com/9.x/adventurer/svg?seed="

function Friend({name,age,merit,avt,minusFriend, upperMe, lowerMe}) {
  const imgURL = `${avtURL}${avt}`

  // 헷갈리지 않도록, 일부러 화살표 함수를 사용. 
  const jcRich = ()=>{
     alert(`${name}콜렉트콜`)
     // filter를 사용해서 remove 버튼(중요한 부분, sum을 처리했던 흐름 잘 되집어보기)
     minusFriend(name);  // 호출
  }

  const jcUpper = () => {
    upperMe(age)
  }

  const jcLower = () => {
    lowerMe(age)
  }

  return (
    <div style={{border:"5px groove gold"}}>
      <img src={imgURL} alt="아바타" width={150} height={150} />
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{merit}</h3>
      <button onClick={jcRich}>딜리트</button>
      <button onClick={jcUpper}>나포함 내 나이 이상인 사람들</button>
      <button onClick={jcLower}>나포함 내 나이 이하인 사람들</button>
    </div>
  )
}

export default Friend