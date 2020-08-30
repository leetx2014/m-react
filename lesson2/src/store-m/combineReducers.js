/**
 * 作业：实现combineReducers
 * 暗号：多哥
 * 
 * combineReducers
 * @param {Object} reducers
 */
export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChanged = false;

    for (let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key];
    }

    hasChanged = hasChanged || Object.keys(reducers).length !== Object.keys(state).length;

    return hasChanged ? nextState : state;
  };
};
