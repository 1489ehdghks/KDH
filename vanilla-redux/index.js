import {createStore} from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


const toggleSwitch = () =>({type : TOGGLE_SWITCH});
const increase = () => ({type : INCREASE,difference});
const decrease = () => ({type : DECREASE});

//초기값
const initialState = {
    toggle : false,
    counter : 0,
};


//state가 undefuned 일 때 , initalState 를 기본 값
function reducer(state =initialState, action){
    switch(action.type){
        case TOGGLE_SWITCH:
            return{
                ...state,
                toggle: !state.toggle
            };
        case INCREASE : 
            return{
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE : 
            return{
                ...state,
                counter : state.counter -1 
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render =() => {
    const state = store.getState();

    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active');
    }
    counter.innerText= store.counter;
};

render();
store.subscribe(render);

divToggle.onClick=()=>{
    store.dispatch(toggleSwitch());
};

btnIncrease.onClick=()=>{
    store.dispatch(increase(1));
}

btnDecrease.onClick=()=>{
    store.dispatch(decrease());
}