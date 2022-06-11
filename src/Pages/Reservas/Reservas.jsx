import React, { useEffect, useState } from 'react'
import './Reservas.css'
import axios from 'axios';
import hotel from '../../Assets/Imagens/hotel.jpg'
import './Reservas.css'



function Reservas() {
  const [id, setId] = useState('')
  const [entrada, setEntrada] = useState('')
  const [saida, setSaida] = useState ('')
  const [checkin, setCheckin] = useState ('')
  const [ checkout, setCheckout] = useState ('')
  const [adulto, setAdulto] = useState('')
  const [crianca, setCrianca]  = useState('')
  const [message, setMessage ] = useState('')
  
  const cadastro = () =>{
   
  const url =`https://api-grande-hotel-resilia.herokuapp.com/diaria`
  axios.
  post(url,{
    ENTRADA: entrada,
    SAIDA: saida,
    CHECKIN: checkin,
    CHECKOUT: checkout,
    ADULTO: adulto,
    CRIANCA: crianca
  })
  .then((res)=>{
    console.log(res)
    setMessage(res.data.message)
  })
  .catch((erro) => console.log(erro))
  }

  const atualizar = () => {
    // e.preventDefault()
    const url =`https://api-grande-hotel-resilia.herokuapp.com/diaria/${id}`
    axios.
    put(
      url,{
      ENTRADA: entrada,
      SAIDA: saida,
      CHECKIN: checkin,
      CHECKOUT: checkout,
      ADULTO: adulto,
      CRIANCA: crianca
    })
    .then((res)=>{
      console.log(res)
      setMessage(res.data.message)
      
    })
    .catch((erro) => console.log(erro))
    }
  

  function deletar (){
    axios.
  delete(`https://api-grande-hotel-resilia.herokuapp.com/diaria/${id}`)

    .then((res)=>{
      console.log(res)
      
    
    })

    .catch
    ((erro) => console.log(erro))
    

  }

  const [listar, setListar] =  useState([])

  useEffect(() => {
      axios.
      get("https://api-grande-hotel-resilia.herokuapp.com/diaria")
      
    .then((res)=>{
     setListar(res.data)
    })
    .catch((erro) => console.log(erro))
    
  
  },[])
  
  
  return (
    <main className='main-reservas'>
      
      <img  className='img' src={hotel}/>
      
      <h1 className='h1'>Bem vindo a Grande Hotel Resília</h1>

      <form className='formulario'>
        <section className='conteiner-input'>
        <div className='div-form'>
        <p className='txt-form'>Numero da reserva </p>
        <input className='num-reserva' type='number' value={id} onChange={(e) =>setId(e.target.value)}/>
        </div>

        <div className='div-form'>
        <p className='txt-form'>Data checkin </p>
        <input className='form-entrada' type="date" value={entrada} onChange={(e) =>setEntrada(e.target.value)}/>
        </div>

        <div className='div-form'>        
        <p className='txt-form'>Data checkout: </p>
        <input className='form-saida' type="date" value={saida} onChange={(e) =>setSaida(e.target.value)}/>
        </div>

        <div className='div-form'>
        <p className='txt-form'>Horário checkin </p>
        <input className='form-checkin' type="time" value={checkin} onChange={(e) =>setCheckin(e.target.value)}/>
        </div>

        <div className='div-form'>
        <p className='txt-form'>Horário checkin </p>
        <input className='form-checkout' type="time" value={checkout} onChange={(e) =>setCheckout(e.target.value)}/>
        </div>

        <div className='div-form'>
        <p className='txt-form'>Quantidade adultos </p>
        <input className='quantidade' type="number" value={adulto} onChange={(e) =>setAdulto(e.target.value)}/>
        </div>

        <div className='div-form'>
        <p className='txt-form'>Quantidade crianças </p>
        <input className='quantidade' type="number" value={crianca}  onChange={(e) =>setCrianca(e.target.value)}/>
        </div>
        </section>
        <section className='botao'>
        <button className='button-enviar' text="enviar" onClick={(e) =>{
          e.preventDefault();
            cadastro() }}>enviar</button>
        <button className='button-atualizar'onClick={atualizar}>atualizar</button>
        <button className='button-deletar' onClick={deletar}>deletar</button>
        </section>
      </form>
      <section className='sessao-reservas'>
          <h2 className='txt-lista'>Suas reservas</h2>
        <ul className='container-lista'>
          {listar.map((item, index)=>{
            return(   
              <li className='lista'  key={index}>
                <div className='lista-p'>
                <p className='box1'>Numero da reserva: </p>
                <p className='box2'>{item.ID}</p>
                </div>

                <div className='lista-p'>
                <p className='box3'>Data checkin: </p>
                <p className='box4'>{item.ENTRADA}</p>
                </div>

                <div className='lista-p'>
                <p className='box5'>Data checkout: </p>
                <p className='box6'>{item.SAIDA}</p>
                </div>

                <div className='lista-p'>
                <p className='box7'>Horário checkin: </p>
                <p className='box8'>{item.CHECKIN}</p>
                </div>

                <div className='lista-p'>
                <p className='box9'>Horário checkout: </p>
                <p className='box10'>{item.CHECKOUT}</p>
                </div>

                <div className='lista-p'>
                <p className='box11'>Quantidade adultos: </p>
                <p className='box12'>{item.ADULTO}</p>
                </div>

                <div className='lista-p'>
                <p className='box13'>Quantidade crianças:</p>
                <p className='box14'>{item.CRIANCA}</p>
                </div>              
              </li>
            )
          })}</ul>
      </section>

    
</main>
  )
}

export default Reservas