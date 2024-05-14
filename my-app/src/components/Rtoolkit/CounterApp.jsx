import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeName ,changeGouse} from "./Counter-store";
import { useRef } from "react";

function CounterApp() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const reff = useRef(null);

  useEffect(() => {
    reff.current.focus();
  });

  const handleSubmit=(e)=>{
    e.preventDefault()
    const gouseName=e.target.name.value
    
    dispatch(changeGouse(gouseName))

  }

  return (
    <div>
      <h1 className="text-center">Welcome {count.name}</h1>
      <h1 className="text-center">{count.formName}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <p>count: {count.value}</p>
      <button
        onClick={() => {
          dispatch(decrement("saleel is a good boy"));
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(changeName("Gouse"));
        }}
        className="bg-red-400 p-2 m-2"
      >
        {" "}
        Gouse {" "}
      </button>

      <form onSubmit={handleSubmit}>
        <input
          ref={reff}
          type="text" name="name"
          className="border bg-gray-300 ml-5 my-5"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CounterApp;
