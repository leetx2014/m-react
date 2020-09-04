import React, { Component } from "react";

const RouterContext = React.createContext();

/**
 * LifeCycle
 */
class LifeCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this);
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount.call(this, this);
    }
  }

  render() {
    return null;
  }
}

/**
 * 作业：实现 Prompt 源码
 * 暗号：科特迪瓦
 * Prompt
 */
export default function Prompt({ message, when = true }) {
  return (
    <RouterContext.Consumer>
      {(context) => {
        if (!when) return null;
        let method = context.history.block;
        return (
          <LifeCycle
            onMount={(self) => {
              self.release = method(message);
            }}
            onUnmount={(self) => {
              self.release();
            }}
          />
        );
      }}
    </RouterContext.Consumer>
  );
};
