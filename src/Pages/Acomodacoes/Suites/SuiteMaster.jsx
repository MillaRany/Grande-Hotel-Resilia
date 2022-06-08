import React from 'react'
import './Suites.css'
import { Link } from 'react-router-dom'
import master2 from '../../../Assets/Imagens/master2.png'
import master3 from '../../../Assets/Imagens/master3.png'
import master4 from '../../../Assets/Imagens/master4.png'
import master5 from '../../../Assets/Imagens/master5.png'
import master6 from '../../../Assets/Imagens/master6.png'
import luxo from '../../../Assets/Imagens/luxo.png'
import superLuxo from '../../../Assets/Imagens/superluxo.png'

const SuiteMaster = () => {
  return (
    <main>
      <h1 className='suite-titulo'>Suítes Master</h1>

      <section className='suite-descricao'>
        <section className='suite-items'>
          <ul className='suite-lista'>
            <li>Banheiro: chuveiro, secador de cabelo e toalhas.</li>
            <li>Quarto: 40 m² + 45 m² varanda aberta</li>
            <li>Área ao ar livre privativa: varanda privativa de 45 m² com hidromassagem</li>
            <li>Mídia/Tecnologia: telefone, canais a cabo, acesso Wi-Fi e TV de tela plana</li>
            <li>Alimentos & Bebidas: Mini Frigobar equipado.</li>
          </ul>
        </section>
        <figure className='sessao-img'>
          <img src={master2} className='suite-img'/>
        </figure>
      </section>

      <figure className='suite-imagens'>
        <img src={master3} className='img-suite'/>
        <img src={master4} className='img-suite'/>
        <img src={master5} className='img-suite'/>
        <img src={master6} className='img-suite'/>
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
              <Link to="/acomodacoes/suitesuperluxo"className='txtImg' >SUÍTES SUPER LUXO</Link>
            </article>
            <img src={superLuxo} className='suite'/>
          </figure>
        </div>
      </section>
    </main>
  )
}

export default SuiteMaster