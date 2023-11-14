import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/calendario.scss'

// AQUÍ SE DESARROLLA LA TABLA DEL MES DE OCTUBRE (MES ANTERIOR AL PRINCIPAL) Y SE PUEDE NAVEGAR
// ENTRE EL MES ANTERIOR Y EL MES SIGUIENTE, CON LAS FLECHAS JUNTO AL NOMBRE DEL MES.
// SE INGRESAN LAS TAREAS O EVENTOS QUE TIENE EL/LA ALUMNO/A EN DICHO MES, Y SE DESTACAN 
// EN EL CALENDARIO CON UN COLOR AMARILLO.

const contenidoCalendario=(
  <div className='contcalendario'>

      <div className='flechas'>
        <a href='/calendario3'> &lt; </a> 
          <h1 class="center-text">Octubre</h1>
        <a href='/calendario'>&gt;</a>
      </div>

    <table border="1"> 
<tr>
  <th class="center-text">Lunes</th>
  <th class="center-text">Martes</th>
  <th class="center-text">Miércoles</th>
  <th class="center-text">Jueves</th>
  <th class="center-text">Viernes</th>
  <th class="center-text">Sábado</th>
  <th class="center-text">Domingo</th>
</tr>
<tr class="firstweek-row">
  <td>25</td>
  <td>26</td>
  <td>27</td>
  <td>28</td>
  <td>29</td>
  <td>30</td>
  <td className='dif'>1</td>
</tr>
<tr class="secweek-row">
  <td>2</td>
  <td>3</td>
  <td>4</td>
  <td>5</td>
  <td>6</td>
  <td>7</td>
  <td>8</td>
</tr>
<tr class="thirdweek-row">
  <td>10</td>
  <td>11</td>
  <td className='event'>12 <p>Certamen 2</p> </td>
  <td>13</td>
  <td>14</td>
  <td>15</td>
  <td>16</td>
</tr>
<tr class="fourthweek-row">
  <td>17</td>
  <td>18</td>
  <td>19</td>
  <td>20</td>
  <td>21</td>
  <td>22</td>
  <td>23</td>
</tr>
<tr class="tarea-row">
  <td className='event'>24 <p>Tarea 2</p></td>
  <td>25</td>
  <td>26</td>
  <td>27</td>
  <td>28</td>
  <td>29</td>
  <td>30</td>
</tr>
<tr class="fifthweek-row">
  <td className='dif'>31</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>4</td>
  <td>5</td>
  <td>6</td>
</tr>
</table>
  </div>
);

export const Calendario = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoCalendario}/>
      <Footer/>
    </div>
  )
}

export default Calendario
