import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/calendario.scss'

const contenidoCalendario=(
  <div className='contcalendario'>

      <div className='flechas'>
        <a href='/calendario2'> &lt; </a> 
          <h1 class="center-text">Noviembre</h1>
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
  <td>30</td>
  <td>31</td>
  <td className='dif'>1</td>
  <td className='dif'>2</td>
  <td className='dif'>3</td>
  <td className='dif'>4</td>
  <td className='dif'>5</td>
</tr>
<tr class="secweek-row">
  <td>6</td>
  <td>7</td>
  <td>6</td>
  <td>9</td>
  <td>10</td>
  <td>11</td>
  <td>12</td>
</tr>
<tr class="thirdweek-row">
  <td>13</td>
  <td>14</td>
  <td>15</td>
  <td>16</td>
  <td className='event'>17<p>Certamen 3</p></td>
  <td>18</td>
  <td>19</td>
</tr>
<tr class="fourthweek-row">
  <td>20</td>
  <td className='event'>21 <p>Tarea 3</p></td>
  <td>22</td>
  <td>23</td>
  <td>24</td>
  <td>25</td>
  <td>26</td>
</tr>
<tr class="fifth-row">
  <td className='dif'>27</td>
  <td className='dif'>28</td>
  <td className='dif'>29</td>
  <td className='dif'>30</td>
  <td>1</td>
  <td>2</td>
  <td>3</td>
</tr>
</table>
  </div>
);

export const Calendario3 = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoCalendario}/>
      <Footer/>
    </div>
  )
}

export default Calendario3