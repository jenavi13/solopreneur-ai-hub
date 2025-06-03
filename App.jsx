import React from 'react';
import Header from './components/Header';
import ToolList from './components/ToolList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ToolList />
      <Footer />
    </div>
  );
}

export default App;
