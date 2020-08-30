/**
 * 模拟实现 thunk 中间件
 * @param {*} dispatch 
 * @param {*} getState 
 */
export default function thunk(dispatch, getState) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
};
