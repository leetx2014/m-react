/**
 * 模拟实现 logger 中间件
 * @param {*} dispatch 
 * @param {*} getState 
 */
export default function logger(dispatch, getState) {
  return next => action => {
    console.log("+++++++++++++++++++++++++++++++");
    // prev state
    const prevState = getState();
    console.log("prev state", prevState);

    const returnValue = next(action);

    // next state
    const nextState = getState();
    console.log("next state", nextState);

    console.log("+++++++++++++++++++++++++++++++");

    return returnValue;
  };
};
