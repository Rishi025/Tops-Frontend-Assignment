// Q.1. Explain Life cycle in Class Component and functional component with Hooks?
// Ans.
//  1. Class Component Lifecycle:
// In a class component, you have several lifecycle methods. Here's an example with explanations:

import React, { Component } from 'react';
class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    // This is called after the component is inserted into the DOM.
    console.log("Component is mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    // This is called after a component re-renders due to changes in props or state.
    console.log("Component is updated");
  }
  componentWillUnmount() {
    // This is called before the component is removed from the DOM.
    console.log("Component will unmount");
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
export default ClassComponent;
// In this example, we have a class component ClassComponent that increments a count when a button is clicked. The lifecycle methods componentDidMount, componentDidUpdate, and componentWillUnmount are used to log messages at different stages of the component's lifecycle.
