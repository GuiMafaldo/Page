import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: #000;
    opacity: 0.8;
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: -160px;
    width: 100vw;
    position: fixed;
    z-index: 1;


   > div {
        margin-right: 160px;
         > button {
            width: 80px;
            margin-right: 30px;
            background-color: #fff;
            padding: 10px;
            border: none;
            border-radius: 20px;
            font-weight: 700;
            font-family: Helvetica;
            cursor: pointer;
            transition: all ease 0.5;

            &:hover {
                background-color: #669bbc;
                color: #fff;
                
            }
        } 
   }

   @media (max-width: 767px) {
        width: 98vw;
        display: block;


        > div {
            > button {
                display: none; 
            } 
        }
   }
`

export const ContentHeader = styled.div`
    max-width: 1024px;
    width: 100vh;
    height: 13vh;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 auto;

    h1{
        color: #fff;
        font-family: Helvetica;
        font-size: 1.8em;
    }

    img {
        width: 100px;
    }

     @media (max-width: 767px) {
        width: 100vw;
        text-align: center;
        
   }

`