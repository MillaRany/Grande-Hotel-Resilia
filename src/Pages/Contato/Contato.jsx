import React from 'react'
import './Contato.css'
import Emmanuel from '../../Assets/Imagens/Emmanuel.png'
import Fernanda from '../../Assets/Imagens/Fernanda.png'
import Milla from '../../Assets/Imagens/Milla.png'
import Mariana from '../../Assets/Imagens/Mariana.png'
import GithubLogo from '../../Assets/Imagens/github.png'
import LinkedinLogo from '../../Assets/Imagens/linkedin.png'

function Contato() {
  return (
    <main>
  
      <section className='sessao-colaboradores'>

      <h1 className='txt-colaboradores'> Nossos Colaboradores</h1>

      <div className='colaboradores'>

        <div className='container-colaboradores'>
          <img src={Emmanuel} className='Emmanuel' />
          <div className='txt-nome'>Emmanuel Galli</div>
          <div className='redes-sociais'>
            <a href='https://github.com/EmmanuelGalli' className='logo'>
              <img src={GithubLogo} className='Logo' />
            </a>
            <a href='https://www.linkedin.com/in/emmanuelgallibr/' className='logo'>
              <img src={LinkedinLogo} className='Logo' />
            </a>
          </div>
        </div>
      

        <div className='container-colaboradores'>
          <img src={Fernanda} className='Fernanda' />
          <div className='txt-nome'>Fernanda Pereira</div>
          <div className='redes-sociais'>
            <a href='https://github.com/FernandaPereira-S' className='logo'>
              <img src={GithubLogo} className='Logo' />
            </a>
            <a href='https://www.linkedin.com/in/fernandapereiradasilva/' className='logo'>
              <img src={LinkedinLogo} className='Logo' />
            </a>
          </div>
        </div>
      
        <div className='container-colaboradores'>
          <img src={Mariana} className='Mariana' />
          <div className='txt-nome'>Mariana Fragali Pane</div>
          <div className='redes-sociais'>
            <a href='https://github.com/marifpane' className='logo'>
              <img src={GithubLogo} className='Logo' />
            </a>
            <a href='https://www.linkedin.com/in/marianapane/' className='logo'>
              <img src={LinkedinLogo} className='Logo' />
            </a>
          </div>
        </div>
      

        <div className='container-colaboradores'>
          <img src={Milla} className='Milla' />
          <div className='txt-nome'>Milla Rany Aguiar</div>
          <div className='redes-sociais'>
            <a href='https://github.com/MillaRany' className='logo'>
              <img src={GithubLogo} className='Logo' />
            </a>
            <a href='https://www.linkedin.com/in/milla-rany-aguiar-102244228/' className='logo'>
              <img src={LinkedinLogo} className='Logo' />
            </a>
          </div>
        </div>
          
      </div>
    </section>

    </main>
    
  )
}

export default Contato