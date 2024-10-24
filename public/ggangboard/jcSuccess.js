  
  // 억지로 네임스페이스 부여
  const request = {};  // 그냥 빈 객체롱

  // 1개만 값 대응
  request.getParameter = function(pKey){
    let queryString = decodeURIComponent(location.href.split("?")[1]);
    let params = queryString.split("&");
    for(let i=0; i< params.length; i++){
        let keyVal = params[i].split("=");
        if(keyVal[0] == pKey){
          return keyVal[1];
        }
    }
}

// 같은 이름으로 여러값이 넘어올 땡
request.getParameterValues=function(pKey){
    let queryString = decodeURIComponent(location.href.split("?")[1]);
    let params = queryString.split("&");
    let valArr = [];
    for(let i=0; i< params.length; i++){
        let keyVal = params[i].split("=");
        if(keyVal[0] == pKey){
          valArr.push(keyVal[1]);
        }
    }
    if(!valArr.length) return null;
    return valArr;
}