import { configureStore } from "@reduxjs/toolkit";
import friendReducer from "./friendSlice";
import countReducer from "./counterSlice";
const store = configureStore({
  reducer:{
    friend:friendReducer,
    counter:countReducer
  }
})

export default store