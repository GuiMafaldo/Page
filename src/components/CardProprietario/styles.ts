import styled from "styled-components";

export const ContainerContent =styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #023e8a;
    width: 70vw;
    height: 60vh;
    margin: 0 auto;
    margin-top: 100px;

    & .title-and-description {
        margin-top: 20px;
        margin-left: 30px;

         > h2 {
             color: #fff;
            font-size: 42px;
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
            margin-left: 30px;
            color: #fff;
         }
    }

    & .poltrona {
        margin-top: 70px;
        > img {
            width: 18vw;
         
        }
    }

    & .acordo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fefae0;


        > h2 {
            font-size: 2.5em;
            font-family: Helvetica;
            margin-left: 20px;
        }

        & .acordo-image {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 30px 80px 30px;


            img {
                width: 100px;
            }
        }
    }
`
