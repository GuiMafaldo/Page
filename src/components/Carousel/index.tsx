import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselContainer, CarouselContent } from './styles'

const CarouselImage = () => {
    const settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return(
        <CarouselContainer className="carousel-container" style={{width: "50%", margin: "0 auto"}}>
            <Slider {...settings}>
                <CarouselContent>
                    <img src="./assets/people.jpg" alt="Image 1" />
                </CarouselContent>
                    <CarouselContent>
                    <img src="./assets/home.jpg" alt="Image 2" />
                    </CarouselContent>
                    <CarouselContent>
                    <img src="./assets/interior.jpg" alt="Image 3" />
                </CarouselContent>
            </Slider>
        </CarouselContainer>
    )
}

export default CarouselImage