/**
 * 模拟实现 applyMiddleware
 * @param  {...any} middlewares
 */
export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    };

    // todo 加强 dispatch
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      // 返回增强版的 dispatch
      dispatch
    };
  };
};

function compose(...funcs) {
  if (!funcs.length) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
