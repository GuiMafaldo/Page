import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselContent, ContainerContent } from './styles'
import { NextButton, PreviousButton } from '../../../utils/buttonsCarousel/buttons'
import { StyledSlider } from '../../../utils/buttonsCarousel/styles'


const CarouselAlugel = () => {
    const settings = {
        dots: true,
        infinity: false,
        speed: 1000,
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
                    <img src="./assets/icon-poltrona.webp" alt="" />
                </div>
                <CarouselContent className="carousel-container">
                    <StyledSlider {...settings}>
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

export default CarouselAlugel