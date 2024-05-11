import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function Form() {

  const [form, setForm] = useState({
    name: '',
    age: null,
  });

  const dispatch = useDispatch();


  const state=useSelector((state)=> state)

  const handle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value});
  };

  function handleForm (e) {
    e.preventDefault()
    dispatch({
        type:'change',
        payload:form
    })
  }


  return (
    <div className="bg-yellow-800 w-1/2 h-64 m-12  ">
      <div className="bg-gray-400 w-1/3 justify-center ">
        <form onSubmit={handleForm}>
        <input
          name="name"
          onChange={handle}
          value={form.name}
          type="text"
          className="  ml-9 mb-2 mt-2 bg-gray-500 rounded text-blue"
        />

        <input
          name="age"
          onChange={handle}
          value={form.age}
          type="text"
          className="  ml-9 mb-2 mt-2 bg-gray-500 rounded text-wight"
        />
        <button
          type="submit"
          className="bg-blue-600 rounded border shadow text-sm  ml-24 mb-2"
        >
          Submit
        </button>
        </form>
      </div>
      <div className="bg-yellow-200 container-fluid w-1/3 h-32 p-4 rounded border shadow-lg    ">
        <div className="justify-content">
          <h1>Form</h1>
        </div>

        <div className=" ml-12">
          <h1>Name: {state.name}</h1>
          <h1>Age: {state.age}</h1>
        </div>
      </div>
    </div>
  );
}

export default Form;
