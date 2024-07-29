import Slider from "react-slick";
import styled from "styled-components";

export const ButtonPreview = styled.button`
    background-color: #fff;
    width: 30px;
    height: 30px;
    padding: 6px;
    position: absolute;
    bottom: 30px;
    right: 80px;
    z-index: 1;
    border: none;
    border-radius: 25px;
    cursor: pointer;


    > img {
        width: 25px;
        margin-top: -3px;
        margin-left: -5px;
    }
`
export const ButtonNext = styled.button`
    background-color: #fff;
    width: 30px;
    height: 30px;
    padding: 6px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    z-index: 1;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    > img {
        width: 25px;
        margin-top: -3px;
        margin-left: -2px; 
    }
`
export const StyledSlider = styled(Slider)`
     .slick-dots {
        position: absolute;
        bottom: 30px;
        width: 100%;
        display: flex !important;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }

  .slick-dots li button:before {
        font-size: 12px; 
        color: white; 
  }

  .slick-dots li.slick-active button:before {
        color: #fff; 
    }
`