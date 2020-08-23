import React from 'react';
import './App.css'
import Navbar from './components/panels/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/panels/Footer'

const App = () => {
  return (
    <div className="Covid App">
		<Navbar />
		<Dashboard />
		<Footer />
    </div>
  );
}

export default App;
