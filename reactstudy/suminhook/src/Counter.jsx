import { useState } from "react";

function Counter({suminc}) {


  // 내부 함수는 표현식을 이용하면 가독성이 조금 좋아짐
  // let count = 0;

  // reactive 변수, 곧 react가 모니터링 해주는 변수선언과, 그 값을 바꾸는 함수를 돌려줌(구조분해) 
  const [count,setCount] = useState(0)

  console.log("지영이는 E가 맞음",count);


  const inc = () =>{
      //alert(`눌렀어 ${count}`)
      setCount((count)=> { return count +1});
      suminc()                       // 엄칭 중요, 부모로 부터 넘겨 받은 함수를 호출
      //setCount(count +1);

      //cnt++;
      // 억지롱롱, 안타깝지만 react가 원하는 스타일이 아님!
      //document.querySelector("#mgY").innerHTML = `${count}번`;
  }

  const dec = () => {
    // 0보다 작아지지 않게 해보시
     count >= 1  && setCount(count - 1)  // 억지로 배운거 활용

  }

  return (
    <div>
      <h1 id="mgY">{count}번</h1>
      <button onClick={ ()=>{ inc() } }>증가</button>
      <button onClick={ dec } >감소</button>
    </div>
  )
}

export default Counter