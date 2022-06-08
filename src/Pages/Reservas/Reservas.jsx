import React,{useState} from 'react'
import './Reservas.css'
import axios from 'axios'
import hotel from '../../Assets/Imagens/hotel.jpg'

function Reservas() {
  
  const [checkin , setCheckin] = useState('')
  const [checkout , setCheckout] = useState('')
  const [adulto, setAdulto] = useState('')
  const [crianca, setcrianca] = useState('')
  
  async function enviar (e){
    e.preventDefault()
    
    const response = await axios.post('https://api-grande-hotel-resilia.herokuapp.com/diaria',  {
      ENTRADA: checkin,
      SAIDA: checkout,
      CRIANCA: crianca,
      ADULTO: adulto 
    })
      console.log(response)  

  }
  // const data = new Date()
  // function formatarData(dias){
  // const newDate = new Date()
  // const mes = (newDate.getMonth()+1)<10?`0${newDate.getMonth()+1}`:newDate.getMonth()+1;
  // const dia = (newDate.getDate()+dias)<10?`0${newDate.getDate()+dias}`:newDate.getDate()+dias;
  // return `${newDate.getFullYear()}-${mes}-${dia}`;
    
// }
// console.log(formatarData())
  return (
    <main className='main'>

      <section className='reservas'>
        <h1 className='txtReservas'>
          Bem vindo a Grande Hotel Resília
        </h1>

      <img src={hotel} alt="" className='imgHotel'/>
      
      <form className='form'>

        <div className='sessao-input'>
        <div className='check'>
        <p className='txt-input'>check-in</p>
        </div>
        <div className='data-check'>
        <input type= 'date' className='data'  onChange={(e)=>{setCheckin(e.target.value)}}/>
        </div>
        </div>

        <div className='sessao-input'>
        <div className='check'>
        <p className='txt-input'>check-out</p>
        </div>
        <div className='data-check'>
        <input type= 'date' className='data'  onChange={(e)=>{setCheckout(e.target.value)}}/>
        </div>
        </div>

        <div className='sessao-input'>
          <div className='num'>
          <p  className='txt-numero'>N° de Adultos</p>
          </div>
          <div className='input-nun'>
          <input type='number' className='numeros' onChange={(e)=>{setAdulto(e.target.value)}}/>
          </div>
        </div>

        <div className='sessao-input'>
          <div className='num'>
          <p  className='txt-numero'>N° de crianças</p>
          </div>
          <div className='input-nun'>
          <input type='number' className='numeros' onChange={(e)=>{setcrianca(e.target.value)}}/>
          </div>
        </div>
  
        <button className='btnForm' onClick={enviar}>Enviar</button>
      </form>

      </section>
      <section className='resposta'><h1>olá</h1></section>
    </main>
  )
}

export default Reservas