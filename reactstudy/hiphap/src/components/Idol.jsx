import React from 'react'
import { GrAchievement } from "react-icons/gr";
import { GrBackTen } from "react-icons/gr";

//상수값
const avataUrl = "https://api.dicebear.com/9.x/lorelei/svg?seed=";

function Idol({mgImg,mgId,mgName,mgAge,delIdol}) {
  
  const mgSajin = `${avataUrl}${mgImg}`
  
  const suminDel = (mgId) =>{
      delIdol(mgId);
  }

  return (
    <div>
       <table border={1} width={400}>
        <tbody>
        <tr><td colSpan={2}><img src={mgSajin} /></td></tr>
        <tr><td>아이디</td><td>{mgId}</td></tr>
        <tr><td>이름</td><td>{mgName}</td></tr>
        <tr><td>나이</td><td><GrBackTen color={"pink"} size={50} /> {mgAge}</td></tr>
        <tr><td colSpan={2}><GrAchievement color={"blue"} size={100} /><button onClick={()=>{suminDel(mgId)}}>지우기</button></td></tr>
        </tbody>
       </table>
    </div>
  )
}

export default Idol