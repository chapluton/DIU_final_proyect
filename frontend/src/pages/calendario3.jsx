import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/calendario.scss'

const contenidoCalendario=(
  <div className='contcalendario'>

      <div className='flechas'>
          <h1 class="center-text">Septiembre</h1>
        <a href='/calendario2'>&gt;</a>
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
  <td>28</td>
  <td>29</td>
  <td>30</td>
  <td>31</td>
  <td className='dif'>1</td>
  <td className='dif'>2</td>
  <td className='dif'>3</td>
</tr>
<tr class="secweek-row">
  <td>4</td>
  <td>5</td>
  <td className='event'>6 <p>Certamen 1</p> </td>
  <td>7</td>
  <td>8</td>
  <td>9</td>
  <td>10</td>
</tr>
<tr class="thirdweek-row">
  <td>11</td>
  <td>12</td>
  <td>13</td>
  <td>14</td>
  <td className='event'>15 <p>Tarea 1</p> </td>
  <td>16</td>
  <td>17</td>
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
  <td>24</td>
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

export const Calendario2 = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoCalendario}/>
      <Footer/>
    </div>
  )
}

export default Calendario2