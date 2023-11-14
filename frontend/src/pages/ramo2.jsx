import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/ramo.scss'

const ContenidoInfo= (
    <div className='contenidoinfo'>
        <img src='https://aula.usm.cl/pluginfile.php/5012400/mod_label/intro/01-informacion.png'/>
        <div className='info'>
            <p><b>Nombre de la asignatura:</b> Computacion Cientifica</p>
            <p><b>SIGLA:</b> INF285</p>
            <p><b>Departamento que lo imparte:</b> Informática</p>
            <p><b>Semestre que se dicta:</b> Par e impar</p>
            <p><b>Dedicación de tiempo (SCT):</b> 134,5 horas cronológicas</p><br/>
            <p><b>Descripción de la asignatura:</b> En esta asignatura el estudiante adquiere los conocimientos conceptuales y técnicos y las habilidades de significativa 
            importancia tales como: análisis, síntesis, resolución computacional de problemas y evaluación crítica de los resultados computacionales. Además, el estudiante
             desarrolla habilidades de pensamiento sistémico y modelación para la resolución de problemas a nivel profesional, con un alto compromiso con la calidad, basándose
             en los recursos tecnológicos actuales y comunicando de manera efectiva sus ideas.</p>
        </div>
    </div>
);

export const Ramo2 = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF285) COMPUTACIÓN CIENTÍFICA|Paralelos:200" contenido={ContenidoInfo}/>
      <Footer/>
    </div>
  )
}

export default Ramo2
