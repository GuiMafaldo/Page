import styled from "styled-components";


export const CompraVendaInfo = styled.div`
    display: flex;
    align-items: center;
    width: 70vw;
    margin: 0 auto;
    margin-top: 60px;
    justify-content: space-evenly;
    background-color: #f1f1f1;


    & .title_and_description {
        margin-right: 20px;

        > h2 {
            font-family: Helvetica;
            font-size: 2em;
            margin-top: -80px;
            margin-left: 20px;
        }

        > p {
            margin-left: 20px;
            margin-bottom: 40px;
        }

        > button {
            display: flex;
            margin: 0 auto;
            margin-top: 100px;
            padding: 20px;
            width: 160px;
            border: none;
            border-radius: 25px;
            background-color: #669bbc;
            color: #fff;
            font-family: Helvetica;
            font-weight: 700;
            cursor: pointer;
        }
    }

    & .image_container {
        background-color: #669bbc;
        padding: 20px;
        margin-left: 15px;
        

        > img {
            width: 740px;
            height: 500px;
            border-radius: 24px;
        }
    }

    @media (min-width: 340px) and (max-width: 767px) {
        width: 900px;
        display: flex;
        flex-direction: column;
        margin-top: 140px;
        margin-left: 25%;

         & .title_and_description {
            > h2 {
                font-size: 1.8em;
                padding-top: 140px;
                margin-bottom: 40px; 
            }

            > p {
                margin-bottom: -60px;
                font-size: 18px; 
            }
         }


        & .image_container {
            margin-top: 30px;
            margin-right: 20px;

            > img {
                margin-top: 6px;
                width: 100%;
                height: 36vh;
            }

        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        display: block;
        margin-top: 140px;

        & .title_and_description {
            
            > h2 {
                font-size: 1.6em;
                padding: 20px; 
            }

            > p {
                font-size: 14px;
                font-weight: 500;
            }

            > button {
                margin-top: -3px; 
            }

        }

        & .image_container {
                display: flex;
                margin: 0 auto;
                margin-top: 30px;
                height: 40vh;
                width: 60vw;

            > img {
                width: 60vw;
                height: 40vh;
            }

        }
    }
`
