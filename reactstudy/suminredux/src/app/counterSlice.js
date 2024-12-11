// 친구 정보 상태를 관리
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:"counter",  // 분류명
  initialState:{   // 초기상태값, 여러개 넣을 수 있음
     value: 0
  },
  reducers: {                      
    inc:(state) => {      
        state.value +=1
    },
    dec:(state) => {
       state.value -=1
    },
    incByVal:(state,action) =>{
       state.value += action.payload
    }
  }
})

// 처음엔 낯설지만, 곧 익숙해짐
export const { inc, dec, incByVal } = counterSlice.actions

const countReducer = counterSlice.reducer
export default countReducer