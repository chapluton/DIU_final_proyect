import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/horario.scss'

const contenidoHorario=(
  <div className='conthorario'>

    <table border="1"> 
<tr>
  <th class="center-text">Bloques</th>
  <th class="center-text">Lunes</th>
  <th class="center-text">Martes</th>
  <th class="center-text">Miércoles</th>
  <th class="center-text">Jueves</th>
  <th class="center-text">Viernes</th>
  <th class="center-text">Sábado</th>
  <th class="center-text">Domingo</th>
</tr>
<tr class="first-row">
  <th class="center-text"><p>1 08:15/08:50<br />2 08:50/09:25</p></th>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="sec-row">
  <th class="center-text"><p>3 09:35/10:10<br />4 10:10/10:45</p></th>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="third-row">
  <th class="center-text"><p>5 10:55/11:30<br />6 11:30/12:05</p></th>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td class="center-text2">Ayudantía<br />Sala K300-SJ</td>
  <td></td>
  <td></td>
</tr>
<tr class="fourth-row">
  <th class="center-text"><p>7 12:15/12:50<br />8 12:50/13:25</p></th>
  <td class="center-text2">Cátedra<br />Sala B001-SJ</td>
  <td></td>
  <td class="center-text2">Cátedra<br />Sala A010-SJ</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="fifth-row">
  <th class="center-text"><p>9 14:30/15:05<br />10 15:05/15:40</p></th>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="sixth-row">
  <th class="center-text"><p>11 15:50/16:25<br />12 16:25/17:00</p></th>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="seventh-row">
  <th class="center-text"><p>13 17:10/17:45<br />14 17:45/18:20</p></th>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="eight-row">
  <th class="center-text"><p>15 18:30/19:05<br />16 19:05/19:40</p></th>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
</table>
  </div>
);


export const Horario = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoHorario}/>
      <Footer/>
    </div>
  )
}

export default Horario
