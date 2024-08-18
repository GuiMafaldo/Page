import styled from "styled-components";

export const CompraVendaInfo = styled.div`
    display: flex;
    align-items: center;
    width: 70vw;
    margin: 60px auto 0;
    justify-content: space-evenly;
    background-color: #f1f1f1;
    padding: 20px; 

    & .title_and_description {
        margin-right: 20px;

        > h2 {
            font-family: Helvetica;
            font-size: 2em;
            margin: 0 20px 20px 0; 
        }

        > p {
            margin: 0 20px 40px 0; 
            font-size: 16px; 
        }

        > button {
            margin: 100px auto 0; 
            padding: 20px;
            width: 160px;
            border: none;
            border-radius: 25px;
            background-color: #669bbc;
            color: #fff;
            font-family: Helvetica;
            font-weight: 700;
            cursor: pointer;
            display: block; 
        }
    }

    & .image_container {
        background-color: #669bbc;
        padding: 20px;
        margin-left: 15px;

        > img {
            width: 100%;
            height: auto;
            max-width: 740px;
            max-height: 500px;
            border-radius: 24px;
            object-fit: cover; 
        }
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 96vw;
        flex-direction: column;
        margin-top: 140px;
        margin-left: 5%; 

        & .title_and_description {
            margin-right: 0; 
            
            > h2 {
                font-size: 1.8em;
                margin: 0 0 20px 0; 
                padding-top: 30px; 
            }

            > p {
                margin: 0 0 40px 0; 
                font-size: 18px;
            }
        }

        & .image_container {
            margin: 30px auto 0; 

            > img {
                width: 100%;
                height: auto;
                max-height: 36vh; 
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        flex-direction: column;
        margin-top: 140px;
        padding: 20px;

        & .title_and_description {
            > h2 {
                font-size: 1.6em;
                padding: 20px 0; 
                margin: 0 0 20px 0;
            }

            > p {
                font-size: 14px;
                font-weight: 500;
            }

            > button {
                margin-top: 20px; 
            }
        }

        & .image_container {
            margin: 30px auto 0; 
            height: 40vh;
            width: 100%; 
            display: flex;
            justify-content: center;

            > img {
                width: 100%;
                height: auto;
                max-width: 60vw; 
                max-height: 40vh; 
            }
        }
    }
`
