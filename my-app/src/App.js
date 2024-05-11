import ReactRedux from "./components/ReactRedux1";
import Form from "./components/form/form";
import { Provider } from "react-redux";
import "./App.css";
import Store from "./components/ReactRedux";
import FormStore from "./components/form/formFunciton";
import CompainedReducerStore from "./components/combinReducer/combinFunction";
import CompainedReducer from "./components/combinReducer/combinReducer";

import User from "./components/user1";

function App() {
  return (
    <div>
     
        <User />
      
    </div>
  );
}

export default App;
