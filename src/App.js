import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WarehouseAdminPage from './pages/WarehouseAdminPage';

function App() {
  return (
    <Router>
      <Route path="/warehouse-admin" component={WarehouseAdminPage} />
      {/* Define more routes as needed */}
    </Router>
  );
}

export default App;