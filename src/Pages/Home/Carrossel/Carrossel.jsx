import React, {useState} from 'react'
import './Carrossel.css'
import direita from '../../../Assets/Imagens/seta-direita.png'
import esquerda from '../../../Assets/Imagens/seta-esquerda.png'
import {imagem} from '../../../Helpers/CarrosselData'

function Carrossel() {
  const [currImg, setCurrImg] = useState(0)


  return (
   <div className='carrossel'>
     <div className='carrosselInner' 
     style={{backgroundImage: `url(${imagem[currImg].img})`}}>
       <div className='left' onClick={ () => {
        currImg > 0 && setCurrImg(currImg - 1)
       }}  >
          <img src={esquerda}/>
       </div>
       <div className='center'>
         <p className='subTxtCarrossel'>{imagem[currImg].subtitle}</p>
       </div>
       <div className='right' onClick={ () => {
        currImg <imagem.length -1 && setCurrImg(currImg + 1)
       }}>
         <img src={direita}/>
    
       </div>
   </div>
   </div>
  )
}

export default Carrossel