import React from 'react'
import './Suites.css'
import { Link } from 'react-router-dom'
import luxo2 from '../../../Assets/Imagens/luxo2.png'
import luxo3 from '../../../Assets/Imagens/luxo3.png'
import luxo4 from '../../../Assets/Imagens/luxo4.png'
import luxo5 from '../../../Assets/Imagens/luxo5.png'
import luxo6 from '../../../Assets/Imagens/luxo6.png'
import superLuxo from '../../../Assets/Imagens/superluxo.png'
import master from '../../../Assets/Imagens/master.jpeg'

const SuiteLuxo = () => {
  return (
    <main>
      <h1 className='suite-titulo'>Suítes Luxo</h1>

      <section className='suite-descricao'>
        <section className='suite-items'>
          <ul className='suite-lista'>
            <li>Banheiro: chuveiro, secador de cabelo, toalhas.</li>
            <li>Quarto: 23 m²</li>
            <li>Vista: as vistas no hotel variam para o campo de golfe olímpico, quadra de tênis/cidade/lagoa </li>
            <li>Mídia/Tecnologia: telefone, canais a cabo, acesso Wi-Fi e TV de tela plana</li>
            <li>Alimentos & Bebidas: Mini Frigobar equipado.</li>
          </ul>
        </section>
        <figure className='sessao-img'>
          <img src={luxo2} className='suite-img'/>
        </figure>
      </section>

      <figure className='suite-imagens'>
        <img src={luxo3} className='img-suite'/>
        <img src={luxo4} className='img-suite'/>
        <img src={luxo5} className='img-suite'/>
        <img src={luxo6} className='img-suite'/>
      </figure>

      <section className='sessao-acomodacao'>
        <h2 className='txt-acomodacoes'>Outras Acomodações</h2>
        <div className='acomodacoes'>
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

export default SuiteLuxo