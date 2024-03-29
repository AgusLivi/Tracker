import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css';
import ExcerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width: {x1: 1488}}} m='auto'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExcerciseDetail />} />
            
        </Routes>
    </Box>
   
  )
}

export default App