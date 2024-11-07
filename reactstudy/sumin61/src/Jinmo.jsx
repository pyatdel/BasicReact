const avaURL = "https://api.dicebear.com/9.x/adventurer/svg?seed="

function Jinmo({name,how,children}) {

  const url = `${avaURL}${name}`
   
  return (
    <div style={{color:"blue"}}>
       <h1>나 김진모 {name} {how} 행</h1>
       <img src={url} width={200} height={200} /><br /> 
       {children}
    </div>
  )
}

export default Jinmo