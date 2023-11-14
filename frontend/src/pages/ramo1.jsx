import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/ramo.scss'

// PÁGINA DE INFORMACIÓN GENERAL (PRIMERA PESTAÑA DE INGRESO A LA ASIGNATURA)
// SÓLO HAY UN POCO DE DESCRIPCIÓN DE LA ASIGNATURA Y DETALLES ADMINISTRATIVOS.

const ContenidoInfo= (
    <div className='contenidoinfo'>
      <div className='imagen-contenedor'>
        <img src='https://aula.usm.cl/pluginfile.php/5012400/mod_label/intro/01-informacion.png'/>
      </div>
        <div className='info'>
            <p><b>Nombre de la asignatura:</b> Sistemas Distribuidos</p>
            <p><b>SIGLA:</b> INF343</p>
            <p><b>Departamento que lo imparte:</b> Informática</p>
            <p><b>Semestre que se dicta:</b> Par</p>
            <p><b>Dedicación de tiempo (SCT):</b> 151 horas cronológicas</p><br/>
            <p><b>Descripción de la asignatura:</b> El estudiante aplica los fundamentos de los sistemas de computación distribuida, a través del estudio de los modelos teóricos, 
                técnicas y métodos para resolver problemas en escenarios donde los datos, el procesamiento o el control pueden estar física o lógicamente distribuido. El estudiante 
                utiliza aspectos asociados al desempeño, confiabilidad y seguridad para el diseño y construcción de sistemas distribuidos. Adquiere una sólida comprensión de sistemas 
                informáticos modernos, que se construyen basándose en sistemas interconectados de componentes que interactúan a través de redes de comunicaciones.</p>
        </div>
    </div>
);

export const Ramo1 = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={ContenidoInfo}/>
      <Footer/>
    </div>
  )
}

export default Ramo1
