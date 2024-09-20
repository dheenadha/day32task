import { useState } from 'react'
import './App.css'
import MainApp from './components/MainApp'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
  )
}

export default App
