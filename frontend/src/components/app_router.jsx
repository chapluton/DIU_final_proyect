import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Ramo1 from '../pages/ramo1'
import Ramo2 from '../pages/ramo2'
import Calificacion from '../pages/calificacion'
import Calendario from '../pages/calendario'
import Horario from '../pages/horario'
import Calendario2 from '../pages/calendario2'
import Calendario3 from '../pages/calendario3'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ramo1' element={<Ramo1 />} />
        <Route path='/ramo2' element={<Ramo2 />} />
        <Route path='/calificacion' element={<Calificacion />} />
        <Route path='/calendario' element={<Calendario />} />
        <Route path='/calendario2' element={<Calendario2 />} />
        <Route path='/calendario3' element={<Calendario3 />} />
        <Route path='/horario' element={<Horario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
