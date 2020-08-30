import React, { Component } from "react";
import store from "../store";

const { getState, dispatch, subscribe } = store;

// todo test
// const arr = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => {
//   console.log('reducer', accumulator, currentValue);
//   return accumulator + currentValue;
// };
// arr.reduce(reducer, 5);

// const f1 = arg => {
//   console.log('f1', arg);
//   return arg;
// };
// const f2 = arg => {
//   console.log('f2', arg);
//   return arg;
// };
// const f3 = arg => {
//   console.log('f3', arg);
//   return arg;
// };

// const compose = (...funcs) => {
//   if (!funcs.length) return arg => arg;

//   if (funcs.length === 1) return funcs[0];

//   return funcs.reduce((a, c) => (...args) => a(c(...args)));
// };

// let res = compose(f1, f2, f3)('omg');
// console.log('res', res);

export default class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    // 取消订阅
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  addCounter = () => {
    dispatch({ type: 'ADD' });
  }

  asyAddCounter = () => {
    // 模拟异步数据请求
    dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: 'ADD' });
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{getState().count}</p>
        <button onClick={this.addCounter}>Add</button>
        <button onClick={this.asyAddCounter}>AsyAdd</button>
      </div>
    );
  }
}
