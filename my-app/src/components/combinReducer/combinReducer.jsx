import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'

import { color,changeCount,changeCountM } from './combinFunction'



function CombinReducer() {

    const value=useSelector((state)=>{
        return state
    }
)
const dispatch= useDispatch() 

    let hendle =()=>{
       
        dispatch(color())
    }
    let hendle3 =()=>{
        dispatch(changeCountM())
    }
    let hendle2 =()=>{
        dispatch(changeCount())
    }
  return (
    <div>
      <button className='bg-gray-400 p-2 m-2' onClick={hendle}> click me </button>
      <button  className='bg-gray-400 p-2 m-2' onClick={hendle2}> increment </button>
      <button  className='bg-gray-400 p-2 m-2' onClick={hendle3}> decrement </button>

      <div style={{backgroundColor:value.color}} className=""> my value :  {value.value}</div>
    </div>
  )
}

export default CombinReducer
