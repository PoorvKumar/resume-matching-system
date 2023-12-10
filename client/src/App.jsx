import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className="flex h-screen">
    {/* Sidebar - Uncomment this block when Sidebar component is created */}
    {/* <div className="bg-gray-200 w-64">
      <Sidebar />
    </div> */}

    <div className="flex flex-col w-full">
      <Navbar />
      <div className="p-4">
        <Home />
      </div>
    </div>
  </div>
  )
}

export default App
