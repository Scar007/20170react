import {createStore,combineReducers} from 'redux';
const ADD = 'ADD';//+1
const SUB = 'SUB';
const ADD_TODO = 'ADD_TODO';
//计数器的reducer
let counter = (state = {number: 0}, action = {}) => {
  switch (action.type) {
    case ADD:
      return {number: state.number + 1};
    case SUB:
      return {number: state.number - 1};
    default:
      return state;
  }
}
let todos = (state={list:[]},action={})=>{
  switch(action.type){
    case ADD_TODO:
      //reducer一定要返回新的对象
      return {list:[...state.list,action.title]}
    default:
      return state;
  }
}
let reducer = combineReducers({
  counter,
  todos
});
//stateTree =  {counter:{number:0},todos:{list:[]}}
// dispatch({type:ADD})
//stateTree.counter = counter(stateTree.counter,action)
let store = createStore(reducer);
export default store;