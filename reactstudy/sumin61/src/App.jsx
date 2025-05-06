import Friend, { JinChan } from './Friend'

// 나중엔 ajax로 가져와야 하는데, 임시로..
// 가짜 데이터, 서버에서 왔대
const jcFriends = [
  {name:"순건",tel:"010-0000-0000"},
  {name:"윤정",tel:"010-1111-1111"},
  {name:"유정",tel:"010-2222-2222"},
  {name:"수민",tel:"010-3333-3333"},
  {name:"원근",tel:"010-4444-4444"},
  {name:"진우",tel:"010-5555-5555"},
]
function App() {
  // return jsx 전에는 반복문을 쓸 수 있음

  // jsx 컴포넌트에선 반복문을 쓸 수 없음
  return (
    // 없어도 되는데, 가독성을 위해..
    <>
      <h1>진찬 친구</h1>
      <JinChan answer={"들"}/>
      {
        /* 중괄호 안에서만 주석 처리가 가능 
           이 형태를 잘 받아들여야 함, filter/map은 아주 많이 사용된다!
        */
      jcFriends.length !=0 
      && jcFriends.filter(frd => {
        // return frd.name == "원근" // 안때
        return frd.name != "원근"; // 뺄때
      } )
                    .map((frd) => (<Friend key={frd.name} name={frd.name} tel={frd.tel} /> ) ) }

      
    </>
  )
}

/*
function JinChan({answer}){
  return(
    <>
    <h1>진찬</h1>
    <h2>해찬{answer}</h2>
    </>
  )
}
*/
export default App
