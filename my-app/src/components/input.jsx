import React from "react";
import { useEffect, useRef } from "react";

function Input() {

  const text = useRef(null);

    useEffect(() => {
    text.current.style.background = "red";
    text.current.focus();
  });
  return (
    <div>
      <div className="">
        <input
          ref={text}
          className="bg-gray-200 p-4"
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default Input;
