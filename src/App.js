import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json()) // Correctly handling the fetch response
      .then((data) => {
        setBackendData(data.user); // Assuming you want to store the "user" array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Backend Data:</h1>
      <ul>
        {backendData.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;