// Importing React hooks for managing component state and side effects
import { useEffect, useState } from 'react';

// Functional component representing the Home page
function Home() {
  // State to store the list of todos retrieved from the API
  const [todos, setTodos] = useState();

  // useEffect hook to fetch data from the JSONPlaceholder API when the component mounts
  useEffect(() => {
    // Fetching data from the JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json(); // Parsing the response as JSON
      })
      .then((data) => {
        // Updating the state with the retrieved todos data
        setTodos(data);
      });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Rendering the UI with a table displaying todo details
  return (
    <div className='container'>
      <h2 className='my-2 bg-dark text-light'>User-Details</h2>
      <table className='table table-info'>
        {/* Table header */}
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>COMPLETED</th>
          </tr>
        </thead>
        {/* Table body with todo details */}
        <tbody>
          {
            todos && todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{(todo.completed) ? "Yes" : "No"}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
