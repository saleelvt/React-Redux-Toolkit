import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 0,
  name: null,
  formName : JSON.parse(localStorage.getItem('key')) || null
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    
    increment: (state, action) => {
      state.value += 1;
    },

    decrement: (state, action) => {
      if (state.value >= 1) {
        state.value -= 1;
      }
    },

    changeName:(state,action)=>{

        console.log(action);
        state.name=action.payload;
    },
    changeGouse:(state,action)=>{
        state.formName= action.payload
        localStorage.setItem('key',JSON.stringify(state.formName))
    }
  },
});

export default CounterSlice.reducer;
export const { increment, decrement,changeName ,changeGouse} = CounterSlice.actions;
