import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: #000;
    opacity: 0.8;
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: -160px;
    width: 100vw;
    padding: 2px;
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

   @media(min-width: 340px) and  (max-width: 767px) {
        width: 1120px;
        display: flex;


        > div {
            margin-left: 40px;
            > button {
                display: none; 
            } 
        }
   }

   @media (min-width: 768px)and (max-width: 1024px) {
        width: 100vw;
        display: flex;


        > div {
            display: flex;
            margin-left: 40px;

            > button {
                margin-right: 10px;
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

     @media(min-width: 340px) and  (max-width: 767px) {
        width: 800px;
        
   }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100vw;
        display: flex;
        gap: 24px;
        text-align: center;
        
   }
`