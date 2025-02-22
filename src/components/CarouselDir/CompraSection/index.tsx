import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {  CarouselContent, ContainerContent } from './styles'
import { NextButton, PreviousButton } from '../../../utils/buttonsCarousel/buttons'
import { StyledSlider } from '../../../utils/buttonsCarousel/styles'

const CarouselCompra = () => {
    const settings = {
        dots: true,
        infinity: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: <NextButton />,
        prevArrow: <PreviousButton />
    }
    return(
            <ContainerContent>
                <CarouselContent className="carousel-container">
                    <StyledSlider {...settings} >
                        <div className='content-image'>
                            <img src="./assets/home.jpg" alt="" />
                        </div>

                        <div className='content-image'>
                            <img src="./assets/people.jpg" alt="" />
                        </div>
                        <div className='content-image'>
                            <img src="./assets/interior.jpg" alt="" />
                        </div>
                    </StyledSlider>
                </CarouselContent>
                <div className='title-and-description'>
                    <h2>Comprar seu <br />
                        imóvel e ter um<br />
                        cantinho só seu                       
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vel
                         necessitatibus laboriosam sunt nesciunt quibusdam ratione laudantium 
                         quo minima iusto. Laboriosam, repellat dolores eum dignissimos 
                         corrupti officia porro et nostrum!
                    </p>
                    <button>Ver apartamentos a venda</button> <br />
                    <span>Como comprar no "name here"</span>
                </div>
                <div className='fechadura'>
                    <img src="./assets/fechadura.webp" alt="" />
                </div>
            </ContainerContent>
    )
}

export default CarouselCompra