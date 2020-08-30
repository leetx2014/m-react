// import { createStore, applyMiddleware, combineReducers } from "redux";
import { createStore, applyMiddleware, combineReducers } from '../store-m';

// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// Reducer 定义修改规则
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ count: counterReducer }),
  applyMiddleware(thunk, logger)
);

export default store;

function logger({dispatch, getState}) {
  return next => action => {
    console.log("+++++++++++++++++++++++++++++++"); //sy-log

    // prev state

    const prevState = getState();
    console.log("prev state", prevState); //sy-log

    const returnValue = next(action);
    // next state
    const nextState = getState();
    console.log("next state", nextState); //sy-log

    console.log("+++++++++++++++++++++++++++++++"); //sy-log

    return returnValue;
  };
}

// 这是处理异步的thunk中间件
function thunk({dispatch, getState}) {
  return next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}