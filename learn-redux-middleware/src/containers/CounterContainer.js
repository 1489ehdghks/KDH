import React from "react";
import {connect} from 'react-redux'
import { increaseAsync,decreaseAsync } from "../modules/counter";
import Counter from "../component/Counter";

const CounterContainer= ({number, increaseAsync, decreaseAsync}) => {
    return(
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync}/>
    );
};

export default connect(
    state => ({
        number : state.Counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);