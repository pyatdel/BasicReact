import React, { useState } from 'react'

function Counter() {
    // 되긴 되지만, React를 만든 의도에서 많이 벗어난다1
    // let cnt = 272;
    
    // hook 사용자 편의 프로그램 react에서 제공, 모듈들도 제공
    //      상태변수. 멋진 말로는 reactive 변수 => 이 값이 바뀌면 자동으로 새로 그림
    const [cnt, setCnt] =          useState(0); // 구조분해(중요!!!!!) 반드시 기억하기
    console.log("유정 체크", cnt);

    const handleClick = () => {
        // alert("눌렀나 체크해보기"+cnt);

        // cnt 변수값을 직접 바꾸지 않고, setCnt(setter)를 이용한다
        // setCnt((cnt)=>{ return cnt+1 });
        //=>
        // setCnt(cnt => cnt+2);
        setCnt(100); // 상태가 변하지 않으므로 2번만 실행

        // 되긴 되지만, React를 만든 의도에서 많이 벗어난다2
        // cnt++;

        // 되긴 되지만, React를 만든 의도에서 많이 벗어난다3
        // document.querySelector("#shBtn").innerHTML=`야야${cnt}`; // 달러 표시는 백틱 안에서만...
    }

  return (
    <div  style={{backgroundColor:"blue"}}>    /* style을 만들 때는 중괄호 두개 */ 
        <h1>왜왜{cnt}</h1>
        <button onClick={handleClick} id="shBtn">야야{cnt}</button>
    </div>              // {handleClick()} 이렇게 하면 항상 실행되기 때문에 (x)
  )
}

export default Counter