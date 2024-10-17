import react from 'react'

// 다른 이름으로 하면 문제가 항상 발생하진 않음
function Sumin(Props) {
    const myName="육수민만세"

    console.log("체크:",Props);

  return (
    <react.Fragment>
      <h1>{myName}</h1>
      {/* 이렇게 주석을 이용함 */}
      <h2>{Props.age}</h2>
      <h3>{Props.alias}</h3>
      </react.Fragment>
  )
}

export default Sumin
