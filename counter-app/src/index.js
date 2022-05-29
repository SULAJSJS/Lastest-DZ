import {createStore} from 'redux';


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
        return state + 1
    case 'DEC':
        return state - 1
  
    default:
      return state
  }
}

const store = createStore(reducer);
const {dispatch} = store;


const increment = () => ({type: 'INC'})


const decrement = () => ({type: 'DEC'})


let counterDisplay = document.getElementById('counter-display');
let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement')


incrementBtn.addEventListener('click', () => dispatch(increment()))

decrementBtn.addEventListener('click', () => dispatch(decrement()))

store.subscribe(() => {counterDisplay.value = store.getState()})







// incrementBtn.addEventListener('click', () => {
//   let value = counterDisplay.value;
//   let newValue = Number(value) + 1 ;
//   counterDisplay.value = newValue;
// })


// decrementBtn.addEventListener('click', () => {
//   let value = counterDisplay.value;
//   let newValue = Number(value) - 1 ;
//   counterDisplay.value = newValue;
// })