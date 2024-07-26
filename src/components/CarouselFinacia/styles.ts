import styled from "styled-components";

export const ContainerContent =styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #2a9d8f;
    width: 70vw;
    height: 60vh;
    margin: 0 auto;
    margin-top: 100px;

    & .title-and-description {
        margin-top: 10px;
        margin-left: 30px;

         > h2 {
             color: #fff;
             font-size: 40px;
             font-family: Helvetica; 
         }

         > p {
             font-family: Helvetica;
             color: #fff;
             
         }

         > button {
            padding: 20px;
            border: none;
            border-radius: 25px;
            margin-top: 40px;
            margin-bottom: 30px;
            font-family: Helvetica;
            font-size: 16px;
            font-weight: 700;
         }

         > span {
            font-family: Helvetica;
            margin-left: 10px; 
         }
    }

    & .poltrona {
        margin-top: 120px;
        margin-left: 30px;
        > img {
            width: 14vw;
         
        }
    }
`


export const CarouselContainer = styled.div`
    width: 70vw;
    height: 70vh;
`

export const CarouselContent = styled.div`
    display: block;
    width: 30vw;


    & .content-image {
        
        img{
            width: 600px;
            height: 552px;
        }
    }
`