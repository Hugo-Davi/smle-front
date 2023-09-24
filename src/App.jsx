import { useState } from 'react'
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  // window.alert(`${data.decks[0].name}`)
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
