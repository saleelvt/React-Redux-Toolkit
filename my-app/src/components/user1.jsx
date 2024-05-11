import React, { useEffect, useRef, useState } from "react";

function User() {

  const [data,setData]=useState('')
const reff=useRef()
let handleData =()=>{
 
    setData(reff.current.value)
}

let effect=useEffect(()=>{
   reff.current.focus()
   localStorage.getItem(data)
   
},[data])
    
  return (
    <div>
      <form action="">
        <input className="bg-gray-300 m-2 bordered shadow-lg rounded" ref={reff} type="text" />
        {/* <input type="text" /> */}
        <button onClick={handleData}>submit</button>
      </form>
    </div>
  );
}

export default User;
