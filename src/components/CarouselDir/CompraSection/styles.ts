import styled from "styled-components";

export const ContainerContent =styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #a3b18a;
    width: 70vw;
    height: 60vh;
    margin: 0 auto;
    margin-top: 100px;

    & .title-and-description {
        margin-top: 10px;
        margin-left: 60px;

         > h2 {
             color: #fff;
             font-size: 2em;
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
            cursor: pointer;
         }

         > span {
            font-family: Helvetica;
            margin-left: 10px;
            cursor: pointer;
            color: #fff;
         }
    }

    & .poltrona {
        margin-top: 120px;
        margin-left: 80px;
        > img {
            width: 14vw;
         
        }
    }

    @media (max-width: 767px) {
        width: 80vw;
        display: grid;
        grid-template-columns: 1fr 1fr;

        & .title-and-description {

            > h2 {
                font-size: 30px; 
            }

            > span {
                color: #fff; 
            }
        }

        & .poltrona {
                margin-top: 120px;

                    > img {
                        width: 30vw;
         
                    }
            }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
             width: 80vw;
            display: flex;


            & .title-and-description {

            > h2 {
                font-size: 1.6em; 
            }
            > span {
                color: #fff; 
            }

            > p {
                font-size: 14px;
                margin-bottom: 70px;
            }

            > button {
                width: 200px;
                height: 30px;
                font-size: 13px;
                font-weight: 600;
                display: flex;
                align-items: center;
            }

            > span {
                font-size: 14px;
                margin: 0 auto;
            }
        }

        & .poltrona {
                margin-top: 100px;
                margin-right: 0;

                    > img {
                        width: 25vw;
         
                    }
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

    @media (max-width: 767px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
            display: none;
    }
`