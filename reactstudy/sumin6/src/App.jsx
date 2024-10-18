import './App.css'
import Sumin from './Sumin.jsx'

function App() {

  const suminFriends = [
      {name:"진모",age:24,alias:"주진모"},
      {name:"승민",age:24,alias:"E7E"},
      {name:"진찬",age:24,alias:"수민"},
      {name:"윤호",age:23,alias:"지영"},
      {name:"광제",age:27,alias:"완희"},
      {name:"완희",age:27,alias:"미강"},
  ];

// 전개 연산자 이용 친구 추가
// {name:"수민",age:24,alias:"자전"}

const suminFriends2 = [{name:"수민",age:24,alias:"자전"},...suminFriends];


  return (
    <div>
      <h1>뭘봐</h1>
      {
        /* if문 사용 불가 그래서 숙제 && */
        /* suminFriends && suminFriends.map(
          sf => (<Sumin name={sf.name} age={sf.age} alias={sf.alias} />
          )
          
        ) */

          /*
          suminFriends && suminFriends.filter(sf => {
            if(sf.name == "윤호") return false
            return true;
          }) .map(
            sf => (<Sumin name={sf.name} age={sf.age} alias={sf.alias} />)
            )
            */

            // 중요!!!
            suminFriends2 && suminFriends2.filter(sf => sf.name != "윤호"
            ) .map(
              sf => (<Sumin name={sf.name} age={sf.age} alias={sf.alias} />)
              )
      }
    </div>
  )
}

export default App
