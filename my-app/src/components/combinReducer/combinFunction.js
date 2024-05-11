import { createStore } from "redux";
import { combineReducers } from "redux";

const states = {
  value: 0,
  color: "green",
};

const combinFunction = combineReducers({
  color: Color,
  value: Counter,
});

function Color(prevColor = states.color, actions) {
  switch (actions.type) {
    case "change-color":
      return actions.payload;

    default:
      return prevColor;
  }
}

function Counter(previous = states.value, actions) {
  switch (actions.type) {
    case "change-value":
      return previous + actions.payload;

    default:
      return previous;
  }
}
 

function changeCount (){

    return {
        type:'change-value',
        payload:+1

    }
}
function changeCountM (){

    return {
        type:'change-value',
        payload:-1

    }
}
 function color (){
    return {

        type: 'change-color',
        payload:'yellow'

        }

 }

 export {
    changeCount,
    color,
    changeCountM
 }


const store = createStore(combinFunction);
export default store;
