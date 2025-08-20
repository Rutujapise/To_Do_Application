import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import TodoForm from './Components/TodoForm'
import About from './pages/About'
import { TodoProvider } from "./context/TodoContext"; 

function App() {
 

  return (
    <>
     <BrowserRouter>
     <TodoProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/createTask' element={<TodoForm/>}></Route>
      <Route path='/about'element={<About/>}></Route>
     </Routes>
     </TodoProvider>
     </BrowserRouter>
    </>
  )
}

export default App
