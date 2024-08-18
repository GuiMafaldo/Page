import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {  CarouselContent, ContainerContent } from './styles'
import { NextButton, PreviousButton } from '../../../utils/buttonsCarousel/buttons'
import { StyledSlider } from '../../../utils/buttonsCarousel/styles'


const CarouselFinancia = () => {
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
                <div className='title-and-description'>
                    <h2>Financie seu <br />
                        imóvel com nossa<br />
                        assesoria                       
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vel
                         necessitatibus laboriosam sunt nesciunt quibusdam ratione laudantium 
                         quo minima iusto. Laboriosam, repellat dolores eum dignissimos 
                         corrupti officia porro et nostrum!
                    </p>
                    <button>conheça a nossa assessoria</button> <br />
                    <span>Como comprar no "name here"</span>
                </div>
                <div className='porta'>
                    <img src="./assets/porta.webp" alt="" />
                </div>
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
            </ContainerContent>
    )
}

export default CarouselFinancia