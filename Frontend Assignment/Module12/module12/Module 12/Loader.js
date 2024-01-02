// Importing React for creating functional components
import React from 'react';

// Functional component representing a loading spinner (Loader)
function Loader() {
  return (
    <div>
      {/* Container for the loading spinner, centered in the text */}
      <div class="text-center loader">
        {/* Spinner element with a border, indicating the loading status */}
        <div class="spinner-border load" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

// Exporting the Loader component as the default export
export default Loader;
