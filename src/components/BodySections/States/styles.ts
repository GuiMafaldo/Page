import styled from "styled-components";

export const StatesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70vw;
    margin: 0 auto;
    background-color: d1d1d1;
    padding-bottom: 60px;


    & .title-and-button {
        display: flex;
        flex-direction: column;

        > h2 {
            font-family: Helvetica;
            font-size: 2.6em;
            color: #000;
        }

        > div{
            background-color: #fff;
                & .active{
                    background-color: #669bbc;
                    color: #fff;
            }
            > button {
                width: 100px;
                margin: 0 auto;
                margin-bottom: 10px;
                padding: 14px;
                color: #000;
                font-weight: 700;
                font-family: Helvetica;
                border: none;
                border-radius: 20px;
                cursor: pointer;
            } 
        }
    }

    @media(min-width: 340px) and  (max-width: 767px){
        width: 100%;
        margin-left: 150px;
        margin-top: 400px;

        & .title-and-button{

            > h2 {
                font-size: 1.5em;
                margin-bottom: 40px;
            }
        }
    }

    @media(min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        margin-top: 80px;

        & .title-and-button{

            > h2 {
                font-size: 1.8em;
                margin-bottom: 40px;
            }
        }
    }
`

export const ContentState = styled.div`
        display: flex;
        width: 70vw;
        margin: 0 auto;
        gap: 30px;
        overflow-y: hidden;
        padding-bottom: 40px;

        & .content-links {

            > h3 {
                font-family: Helvetica;
                font-size: 2.1em;
                color: #669bbc;
                margin-bottom: 30px;
            }

            > div {
                width: 13vw;
                
                > li {
                    font-family: Helvetica;
                    font-size: 15px;
                    list-style: none;
                    margin-bottom: 30px;
                    cursor: pointer;
                } 
            }
        }

        @media (min-width: 340px) and  (max-width: 767px){
            width: 600px;
            margin-left: 150px;

            & .content-links {

                > h3 {
                    font-size: 1.5em; 
                }

                > div {
                    width: 100%;
                    > li {
                        font-family: Helvetica;
                        font-size: 12px;
                        list-style: none;
                        margin-bottom: 30px;
                        cursor: pointer;
                    } 
                }
            }
        }

     @media(min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        margin-top: 20px;

        & .content-links {

            > h3 {
                font-family: Helvetica;
                font-size: 1.3em;
                color: #669bbc;
                margin-bottom: 30px;
            }

            > div {
                width: 13vw;
                
                > li {
                    font-family: Helvetica;
                    font-size: 14px;
                    line-height: 16px;
                    list-style: none;
                    margin-bottom: 30px;
                    cursor: pointer;
                } 
            }
        }

    }
`