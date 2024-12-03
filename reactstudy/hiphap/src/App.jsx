import axios from "axios"
import Idol from "./components/Idol";
import { useEffect, useState } from "react";
import IdolInput from "./components/IdolInput";

// 자꾸 써야 하는 건 짧게
// 프론트 프레임워크 왜?  규모가 커져서 프론트(vue, react, angular) / 백엔드 
// jsp는 생산성이 시대적 흐름상 

const serverURL = "http://localhost:8272/mg/idols"; 

function App() {

  const [idols,setIdols] = useState([])
  const [ujenny,setUjenny] = useState(false);

  const addIdol = (idol)=>{
    // restful post 생성
      axios.post(serverURL,idol).then(resp =>{
         if(resp.data){
           console.log("잘 됐는지 체크");
           setUjenny(!ujenny); // 토글!!
         }
      }) 
  }

  // 지우기
  const delIdol = (mgId) =>{
    // axios.delete로 서버 데이터를 지운다, 사기. 사실 서버에서 지우지 않았다
    /*
     const filterIdols = idols.filter(idols => idol.mgId != mgId)
     console.log("체로롱 ",filterIdols)
     setIdols(filterIdols);
    */
     
     // 서버에 지우기 요청
     axios.delete(`${serverURL}/${mgId}`).then(resp=>{
         if(resp.data){
            console.log("성공확인?");
            // 이제 여기서 모해용?, 리스트를 다시 가져와야 해
            setUjenny(!ujenny); // 토글!!
         } 

     })

  }

  useEffect(()=>{
    axios.get(serverURL).then(resp=>{
      console.log("리스트 체크:",resp.data);
      let recArr = resp.data.sort((a,b)=>{
          return b.mgId - a.mgId;
      }) 

      setIdols(recArr);
    })
  },[ujenny]) // []를 붙여서 딱 한번만 실행됨!


  return (
    <>
      <IdolInput addIdol={addIdol} />
      {
         idols.length && idols.map(idol => 
          (<Idol key={idol.mgId} 
                 mgImg={idol.mgName} 
                 mgId={idol.mgId} 
                 mgAge={idol.mgAge} 
                 mgName={idol.mgName}
                 delIdol={delIdol}
          />)) 
      }
    </>
  )
}

export default App
