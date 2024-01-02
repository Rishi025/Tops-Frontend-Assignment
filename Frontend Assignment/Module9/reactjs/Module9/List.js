// Q.10.How to Create a List View in React Js?

import React from 'react';

// Array of objects representing items with id and title
const Array = [
    { id: 1, title: "Use Array.map" },
    { id: 2, title: "Not a for loop" },
    { id: 3, title: "Give each item a unique key" },
    { id: 4, title: "Avoid using array index as the key" }
];

function List() {
    // JSX structure of the component
    return (
        <div>
            <div className="list">
                {/* Heading for the list */}
                <h1>The "React Way" to Render a List</h1>

                {/* Mapping over the Array and rendering each item in an unordered list */}
                {Array.map((t) => (
                    <ul key={t.id}>
                        <li>{t.title}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

// Exporting the component as the default export
export default List;
