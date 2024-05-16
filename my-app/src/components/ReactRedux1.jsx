import React, { useEffect, useRef } from "react";
import CoreReduxFunction from "./ReactRedux";
import { useDispatch, useSelector } from "react-redux";
import Input from "./input";

function CoreRedux1() {
  let value = useSelector((state) => state.value);

  const dispatch = useDispatch();
  let handleCountP = () => {
    dispatch({
      type: "change-value",
      playload: +1,
    });
  };

  let handleCountM = () => {
    dispatch({
      type: "change-value",
      playload: -1,
    });
  };



  return (
    <div className="p-4">
      <button onClick={handleCountP} className="bg-green-400">
        increment
      </button>
      <h1>value:{value} </h1>
      <button onClick={handleCountM} className="bg-green-400">
        decrement
      </button>
     
    </div>
  );
}

export default CoreRedux1;
