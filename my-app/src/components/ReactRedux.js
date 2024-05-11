
import { createStore } from "redux";

import React from 'react'

const initial={
  value:0,
  color:'green'
}

function ReactRedux(initialState=initial,action) {
  switch(action.type){
    case 'change-value':return{
      ...initialState,
      value:initialState.value+action.playload
    }
    default : return initialState
  }
}

const store=createStore(ReactRedux)

export default store