// 2. Functional Component with Hooks:
// Now, let's create the equivalent functional component using React Hooks:

import React, { useState, useEffect } from 'react';
function FunctionalComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // This is called after the component is inserted into the DOM (componentDidMount).
    console.log("Component is mounted");
    return () => {
      // This is called before the component is removed from the DOM (componentWillUnmount).
      console.log("Component will unmount");
    };
  }, []); // An empty dependency array means this effect runs once.
  useEffect(() => {
    // This is called after a component re-renders due to changes in count (componentDidUpdate).
    console.log("Component is updated");
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default FunctionalComponent;

// In this functional component, we use the useState hook to manage the state and the useEffect hook to replicate the lifecycle methods. The first useEffect runs when the component mounts and the empty dependency array ensures it runs only once, replicating componentDidMount. The second useEffect runs when count changes, mimicking componentDidUpdate.
// Both class components and functional components with Hooks provide similar lifecycle behavior, but Hooks make it more concise and clear by separating the effects and their dependencies.
// In both examples, the output of console logs will be the same, illustrating the equivalent lifecycle stages in class components and functional components with Hooks.

