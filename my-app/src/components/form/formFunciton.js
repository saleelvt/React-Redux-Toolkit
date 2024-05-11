
import React from 'react'
import { createStore } from 'redux'



const initialState={
    name:'empty',
    age:null

}


function FormFunciton( initial=initialState,action  ) {
  
 switch(action.type){
 
    case 'change': return{
        ...initial,
        name:action.payload.name,
        age:action.payload.age
    }
    default : return  initial;  
    
 }


}



const store =createStore(FormFunciton)


export default store

