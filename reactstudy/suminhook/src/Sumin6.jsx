import { useState } from 'react'
import { Faker, ko } from '@faker-js/faker';
import Friend from './Friend';

const fakerKO = new Faker({
  locale: [ko],
});

const smFrds = [
  {name:"윤호",age:23,merit:"안웃김",avt:"uno"},
  {name:"정민",age:28,merit:"안가수",avt:"jm"},
  {name:"원근",age:23,merit:"아이돌",avt:"far"},
  {name:"진찬",age:24,merit:"욕심꾼",avt:"greedy"}
]


function Sumin6() {

  console.log("눈에 이게 보이면 이 함수 컴포넌트가 다시 실행 된 것임")
  const [friends,setFriends] = useState(smFrds)
  
  const addFriend = ()=>{
    const newFriend = {
       name:`${fakerKO.person.firstName()}`,
       age:  Math.round(Math.random()*10) + 20,
       merit: `${fakerKO.company.name()}`,
       avt: `${fakerKO.person.firstName()}`
    }

    // 배열에 새 값 추가하는 방식!  중요!
    // 이렇게 하는 건 값의 변화를 알아야 하기 때문에, 그래서 메모리 낭비
    const newFrds = [newFriend,...friends];  // 새로운 배열이어야 함, 기존 배열이면 안됨

    setFriends(newFrds)
  } 

  // 친구 지우기, 부모 컴포넌트의 함수를 자식에게 props를 이용해서 전달하고
  // 자식이 호출하면 부모의 함수가 호출된다.  윤호 OK!!!!
  // sum 하고 오늘 한거 꼭 확인
  const minusFriend = (pname) =>{
     alert(`다시할까요 ${pname}`)
     const newFrds  = friends.filter( uho => uho.name != pname);
     setFriends(newFrds);  // setXXX로 상태변수 값을 바꾸면 다시 그리게 됨!
     //friends = newFrds;
  }

  // 테스트 나이 순으로 정렬해보기
  const agesort = ()=>{
    const newFrds  = friends.filter( uho => uho.age)
                            .sort((a,b)=>a.age - b.age)

    setFriends(newFrds);  // setXXX로 상태변수 값을 바꾸면 다시 그리게 됨!    
  }

  const over25 = () =>{
    alert(`다시 `)
    const newFrds  = friends.filter( uho => uho.age >= 25)
    setFriends(newFrds);  // setXXX로 상태변수 값을 바꾸면 다시 그리게 됨!
    //friends = newFrds;
 }

 const under28 = () =>{
  alert(`할까요 `)
  const newFrds  = friends.filter( uho => uho.age < 28)
  setFriends(newFrds);  // setXXX로 상태변수 값을 바꾸면 다시 그리게 됨!
  //friends = newFrds;
}

const upperMe = (age)=>{
  const newFrds  = friends.filter( uho => uho.age >= age  )
  setFriends(newFrds);  // setXXX로 상태변수 값을 바꾸면 다시 그리게 됨!    
}

const lowerMe = (age)=>{
  const newFrds  = friends.filter( uho => uho.age <= age)
  setFriends(newFrds);  // setXXX로 상태변수 값을 바꾸면 다시 그리게 됨!    
}

  return (
    <div>
       <button onClick={addFriend}>insert coin</button>
       <button onClick={over25}>나이가 25세 이상만 가져오기</button>
       <button onClick={under28}>나이가 28세 미만만 가져오기</button>
       <button onClick={agesort}>나이순으로 정렬해보기</button>
       {/* <button onClick={()=>{under28()}}>나이가 28세 미만만 가져오기</button> */}
       { friends.length == 0 &&  <h1>continue</h1>}
       { friends.length != 0 &&  
            friends.map(frd => 
               <Friend
               upperMe = {upperMe}
               lowerMe = {lowerMe}
                  minusFriend={minusFriend}
                  // removeFriend={removeFriend}
                  key={frd.name} 
                  name={frd.name} 
                  age={frd.age} 
                  merit={frd.merit} 
                  avt={frd.avt} 
               />
            )
        }
    </div>
  )
}

export default Sumin6