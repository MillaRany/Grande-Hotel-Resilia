import React from 'react'
import './Suites.css'
import { Link } from 'react-router-dom'
import superLuxo from '../../../Assets/Imagens/superluxo.png'
import superLuxo2 from '../../../Assets/Imagens/superluxo2.png'
import superLuxo3 from '../../../Assets/Imagens/superluxo3.png'
import superLuxo4 from '../../../Assets/Imagens/superluxo4.png'
import superLuxo5 from '../../../Assets/Imagens/superluxo5.png'
import luxo from '../../../Assets/Imagens/luxo.png'
import master from '../../../Assets/Imagens/master.jpeg'

const SuiteSuperLuxo = () => {
  return (
    <main>
      <h1 className='suite-titulo'>Suítes Super Luxo</h1>

      <section className='suite-descricao'>
        <section className='suite-items'>
          <ul className='suite-lista'>
            <li>Banheiro: chuveiro, secador de cabelo, toalhas e banheira de hidromassagem.</li>
            <li>Quarto: 30 m²</li>
            <li>Vista: para as montanhas</li>
            <li>Mídia/Tecnologia: telefone, canais a cabo, acesso Wi-Fi e TV de tela plana</li>
            <li>Alimentos & Bebidas: Mini Frigobar equipado.</li>
          </ul>
        </section>
        <figure className='sessao-img'>
          <img src={superLuxo} className='suite-img'/>
        </figure>
      </section>

      <figure className='suite-imagens'>
        <img src={superLuxo2} className='img-suite'/>
        <img src={superLuxo3} className='img-suite'/>
        <img src={superLuxo4} className='img-suite'/>
        <img src={superLuxo5} className='img-suite'/>
      </figure>

      <section className='sessao-acomodacao'>
        <h2 className='txt-acomodacoes'>Outras Acomodações</h2>
        <div className='acomodacoes'>
          <figure className='container-suite'>
            <article className='txtImg1'>
              <Link to="/acomodacoes/suiteluxo"className='txtImg' >SUÍTES LUXO</Link>
            </article>
            <img src={luxo} className='suite'/>
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

export default SuiteSuperLuxo