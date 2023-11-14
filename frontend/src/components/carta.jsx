import React from 'react'
import '../stylesheets/card/carta.scss'
import { NavLink } from 'react-router-dom'; // Usa NavLink para las rutas

export const Carta = (props) => {
  
  return (
    <div className='carta'>
      <div className='titulo'>
        <div className='titulo-texto'>
            <p>{props.titulo}</p>
        </div><br/>
        <div className='mis-cursos'>
            <a href='/'>Mis cursos</a>
        </div>
      </div>
      <div className='contenido'>
        <div className="navbar">
          <NavLink to="/ramo1" className="nav-item" activeClassName="active">Información General</NavLink>
          <NavLink to="/calificacion" className="nav-item" activeClassName="active">Calificación</NavLink>
          <NavLink to="/calendario" className="nav-item" activeClassName="active">Calendario</NavLink>
          <NavLink to="/horario" className="nav-item" activeClassName="active">Horario</NavLink>
        </div>
        <div className='texto'>
          {props.contenido}
        </div>
      </div>
    </div>
  )
}

export default Carta
