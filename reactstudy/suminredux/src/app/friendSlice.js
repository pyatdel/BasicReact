// 친구 정보 상태를 관리
import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
  name:"friend",  // 분류명
  initialState:{   // 초기상태값, 여러개 넣을 수 있음
     names:["윤정","힙합"]
  },
  reducers: {                      
    add:(state,action) => {      
       console.log("체킁1",action); 
       state.names = [...state.names, action.payload] 
    },
    remove:(state,action) => {
      console.log("체크", action); 
       state.names = state.names.filter(name =>  name != action.payload)
    } 
  }
})

// 처음엔 낯설지만, 곧 익숙해짐
export const { add, remove  } = friendSlice.actions

const friendReducer = friendSlice.reducer
export default friendReducer