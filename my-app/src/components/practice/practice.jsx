import React from "react";

import {
  increment,
  decrement,
  aboutSaleel,
  handleData,
} from "./practice-store";
import { useDispatch, useSelector } from "react-redux";

function Practice() {
  const { value, name, datas } = useSelector((state) => state.state);

  console.log("my data ", datas);
  const dispatch = useDispatch();

  let handlForm = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    dispatch(handleData({ Name, Email, Password }));
  };

  return (
    <div>
      <button
        className="bg-gray-300 m-2"
        onClick={() => {
          dispatch(increment(+1));
        }}
      >
        increment
      </button>

      <h1>value: {value}</h1>

      <button
        className="bg-gray-300 m-2"
        onClick={() => {
          dispatch(decrement(-1));
        }}
      >
        decrement
      </button>

      <h1>Saleel is : {name}</h1>

      <button
        onClick={() => {
          dispatch(aboutSaleel("good boy "));
        }}
        className="bg-gray-300 m-2"
      >
        about saleel
      </button>

      <div className="justify-center flex flex-col">
        <form onSubmit={handlForm} action="Submit">
          <input
            name="name"
            className="  ml-9 mb-2 mt-2 bg-gray-500 rounded text-blue"
            type="text"
          />
          <input
            name="email"
            className="  ml-9 mb-2 mt-2 bg-gray-500 rounded text-blue"
            type="text"
          />
          <input
            name="password"
            className="  ml-9 mb-2 mt-2 bg-gray-500 rounded text-blue"
            type="text"
          />
          <button
            className="bg-blue-600 rounded border shadow text-sm  ml-24 mb-2"
            type="Submit"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>

      <div className="">
        <table className="bg-gray-400 m-2 w-1/3  rounded-lg shadow-lg ">
          <thead>
            <tr>
              <th>name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>

          {datas.map((data, index) => (
            <tbody>
              <tr key={index}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Password}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Practice;
