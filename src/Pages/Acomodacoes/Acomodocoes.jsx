import React from 'react'
import './Acomodacoes.css'
import { Link } from 'react-router-dom'
import luxo from '../../Assets/Imagens/luxo.png'
import superLuxo from '../../Assets/Imagens/superluxo.png'
import master from '../../Assets/Imagens/master.jpeg'

function Acomodocoes() {
  return (
    <main>
      <section className='sessao-inicio'>
        <h1 className='txt-titulo'>Conheça nossas Acomodações</h1>
        <p>Temos mais de 100 quartos divididos em três categorias: Luxo, Super Luxo e Master.</p>
      </section>

      <section className='items-quarto'>
        <h2 className='txt-items'>Todos os quartos são equipados com os seguintes itens</h2>
        <ul className='acomodacoes-lista'>
          <li>Cofre digital</li>
          <li>Armários</li>
          <li>Ar-condicionado</li>
          <li>Isolamento acústico</li>
          <li>Piso de madeira/parquet</li>
          <li>Mesa de trabalho</li>
          <li>Telefone</li>
          <li>TV a cabo</li>
        </ul>
      </section>
      
      <section className='sessao-acomodacao'>
        <h2 className='txt-acomodacoes'>Selecione uma de nossas categorias de suites</h2>
        <div className='acomodacoes'>
          <figure className='container-suite'>
            <article className='txtImg1' >
              <Link to="/acomodacoes/suiteluxo"className='txtImg' >SUÍTES LUXO</Link>
            </article>
            <img src={luxo} className='suite' />
          </figure>

          <figure className='container-suite'>
            <article className='txtImg1'>
              <Link to="/acomodacoes/suitesuperluxo"className='txtImg' >SUÍTES SUPER LUXO</Link>
            </article>
            <img src={superLuxo} className='suite'/>
          </figure>

          <figure className='container-suite'>
            <article className='txtImg1'>
              <Link to="/acomodacoes/suitemaster"className='txtImg' >SUÍTES MASTER</Link>
            </article>
            <img src={master} className='suite'/>
          </figure>
        </div>
      </section>
    </main>
  )
}

export default Acomodocoes