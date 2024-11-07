
// 이런 것을 컴포넌트라고 부른다
// 재활용성이 중요하다
function Friend({tel,name}) {

  // console.log("정민", props)
  // const fName=props.name
  // const fTel = props.tel

  return (
    <div style={{border:"5px groove pink"}}>
       <h1>{name}</h1>
       <h2 style={{color:"gray"}}>{tel}</h2>
    </div>
  )
}
export default Friend

// 1개 파일에 멀티 컴포넌트
/* 
export function JinChan({answer}){
  return(
    <>
    <h1>진찬</h1>
    <h2>해찬{answer}</h2>
    </>
  )
} 
*/