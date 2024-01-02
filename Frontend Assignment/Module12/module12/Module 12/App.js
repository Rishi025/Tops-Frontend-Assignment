// Importing necessary dependencies from React and external libraries
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './App.css'; // Importing custom CSS
import Loader from './Loader'; // Importing Loader component

// Lazy loading Home component using React.lazy for better performance
const Home = React.lazy(() => {
  return new Promise(resolve => {
    // Simulating a delay of 1000 milliseconds before resolving the import
    setTimeout(() => {
      resolve(import('./Home'));
    }, 1000);
  });
});

// Main App component
function App() {
  return (
    <div className="App">
      {/* Using Suspense to handle asynchronous loading with a fallback loader */}
      <Suspense fallback={<Loader/>}>
        {/* Rendering the Home component within Suspense */}
        <Home/>
      </Suspense>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
