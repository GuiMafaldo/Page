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
            font-size: 44px;
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
`
