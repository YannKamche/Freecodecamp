// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => ({
  type: ADD,
  message: message
});

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD : 
      return [...state, action.message] 
    default:
      return state;
  }
};
console.clear()
let store = Redux.createStore(messageReducer);
