// import ReactRedux from "./components/ReactRedux1";
// import Form from "./components/form/form";
// import Store from "./components/ReactRedux";
// import FormStore from "./components/form/formFunciton";
// import CompainedReducerStore from "./components/combinReducer/combinFunction";
// import CompainedReducer from "./components/combinReducer/combinReducer";
// import CounterStore from "./components/Rtoolkit/Counter-store"
// import User from "./components/user1";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import CounterSlice from "./components/Rtoolkit/Counter-store"
// import Counter from './components/Rtoolkit/CounterApp'

import PracticeStore from "./components/practice/practice-store";
import Practice from "./components/practice/practice";

  const store=configureStore({
  reducer:{
    state: PracticeStore
  }
})

function App() {

  return (


    <div>
      <Provider store={store}>
        
        <Practice />

      </Provider>
     
    </div>
  );
}

export default App;
