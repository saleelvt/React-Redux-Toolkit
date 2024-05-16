import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: null,
  datas:  JSON.parse(localStorage.getItem('key'))|| [],
  
};
const Practiceslice = createSlice({
  name: "practice",
  initialState,
  reducers: {

    increment: (state, action) => {
        state.value += action.payload
    },
    decrement:(state,action)=>{
        state.value = state.value-action.payload
    },
    aboutSaleel:(state,action)=>{
        state.name = action.payload
    },
    handleData:(state,action)=>{

      state.datas.push(action.payload)
      localStorage.setItem('key',JSON.stringify(state.datas))
      // localStorage.removeItem('key',JSON.stringify(state.datas))

    }
  },
});

export default Practiceslice.reducer;
export const { increment,decrement, aboutSaleel,handleData} = Practiceslice.actions;
