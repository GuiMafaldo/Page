import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {  ContainerContent } from './styles'

const CardProprietario = () => {
    return(
            <ContainerContent>
                <div className='title-and-description'>
                    <h2>Alugar bem, sem <br />
                        complicação e <br />
                        fiador
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vel
                         necessitatibus laboriosam sunt nesciunt quibusdam ratione laudantium 
                         quo minima iusto. Laboriosam, repellat dolores eum dignissimos 
                         corrupti officia porro et nostrum!
                    </p>
                    <button>Ver apartamentos para alugar</button> <br />
                    <span>Como alugar no "name here"</span>
                </div>
                <div className='poltrona'>
                    <img src="./assets/phone.webp" alt="" />
                </div>
                <div className='acordo'>
                    <h2>Fechamos um <br /> acordo de aluguel a cada 4</h2>
                    <div className='acordo-image'>
                        <img src="./assets/acordo.png" alt="" />
                        <img src="./assets/contrato.png" alt="" />
                    </div>
                </div>
               
            </ContainerContent>
    )
}

export default CardProprietario