// Q.11.Create Increment decrement state change by button click?


import React, {useState} from 'react';

function Count() {
    // State to manage the count value
    const [count, setCount] = useState(1);

    // Function to decrement the count
    const dec = () => {
        setCount((prev) => (
            prev - 1
        ));
    }

    // Function to increment the count
    const inc = () => {
        setCount((prev) => (
            prev + 1
        ));
    }

    // Function to reset the count to 0
    const res = () => {
        setCount(0);
    }

    // JSX structure of the component
    return (
        <div>
            <div className="count">
                <h2>React Web</h2>
                <h1>{count}</h1>
                <button onClick={dec}>Decrement</button>
                <button onClick={inc}>Increment</button><br/><br/>
                <button onClick={res}>Reset</button>
            </div>
        </div>
    );
}

// Exporting the component as the default export
export default Count;
