import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen";

function App() {
  const current_theme=localStorage.getItem('current_theme')
  const [theme,setTheme]=useState(current_theme? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])
  return (
    <div className="App">
      <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home/>
      </div>
      
    </div>
  );
}

export default App;
