import React from 'react'
import '../stylesheets/card/card.scss'

export const Card = () => {
  return (
    <div className='card'>
      <div className='titulo'>
        Bienvenidos
      </div>
      <div className='contenido'>
        <div className='subtitulo'>
          <p>Mis Cursos</p>
        </div>
        <div class="wrapper">
          <div class="one">
            <a href='/ramo1'>
              <img src='https://aula.usm.cl/pluginfile.php/5012398/course/overviewfiles/intro.png'/>
              <p>(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201</p>
            </a>
            <div className='bajo'>
              <a className='boton' href='/ramo1'>Acceso</a>
            </div>
          </div>
          <div class="two">
            <a href='/ramo2'>
              <img src='https://aula.usm.cl/pluginfile.php/5011657/course/overviewfiles/intro.png'/>
              <p>(202302)(INF285) COMPUTACIÓN CIENTÍFICA|Paralelos:200</p>
            </a>
            <div className='bajo'>
              <a className='boton' href='/ramo2'>Acceso</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
