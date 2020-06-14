import React from 'react';
import './App.css';
import NavigationBar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
<NavigationBar/>
    </Router>
    
  );
}

export default App;
