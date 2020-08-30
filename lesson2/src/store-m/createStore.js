/**
 * 模拟实现 Redux
 * @param {Func} reducer 
 * @param {Func} enhancer 增强器 用于增强 createStore 的 dispatch
 */
export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let currentState;
  let currentListeners = [];

  // 获取状态
  const getState = () => currentState;

  // 修改状态
  const dispatch = action => {
    // 更新 store state
    currentState = reducer(currentState, action);

    // 通知组件
    currentListeners.forEach(listener => listener());
  };

  // 订阅函数
  const subscribe = listener => {
    currentListeners.push(listener);

    // 返回取消订阅函数
    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  };

  // 手动执行以下dispatch，赋上初始值
  dispatch({type: "KKKKKKKKREDUX/OOOOOOOOOO"});

  return {
    getState,
    dispatch,
    subscribe
  };
};
