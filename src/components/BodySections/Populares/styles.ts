import styled from "styled-components";

export const ContainerSearchsMost = styled.div`
    background-color: #bbd0ff;
    width: 70vw;
    height: 54vh;
    margin: 0 auto;
    margin-top: 60px;
    padding: 28px 20px;
    padding-bottom: 60px;

    @media(min-width: 340px) and (max-width: 767px) {
        width: 800px;
        margin-left: 40px;
    }
    
    @media(min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
    }

`

export const ContentMost = styled.div`
    background-color: #fff;
    width: 68vw;
    height: 50vh;
    margin: 0 auto;
    padding: 10px;
    padding-bottom: 60px;

    > h2 {
        padding: 30px;
        font-family: Helvetica;
        font-size: 2.3em;
    }

    & .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 60vw;
        margin: 0 auto;
        gap: 20px;

        > span {
            > li {
                list-style: none;
                font-family: Helvetica;
                font-size: 14px;
                padding: 20px;
                cursor: pointer;
            }
        }
    }

    @media(min-width: 340px) and (max-width: 767px){
        width: 780px;

        > h2 {
            margin-top: -8px;
            font-size: 1.8em; 
        }

         & .content {
            width: 780px;
            gap: 10px;
                margin: 0 auto;

                > span {
                     > li {
                        font-size: 13px; 
                     } 
                }
            }
    }
    
    @media(min-width: 768px) and (max-width: 1024px) {
        width: 78vw;
        margin-top: -2px;
            
           > h2 {
                margin-top: -10px;
                font-size: 1.8em;
            }
        
        
            & .content {
            width: 80vw;
            gap: 10px;
                margin: 0 auto;

                > span {
                     > li {
                        font-size: 13px; 
                     } 
                }
            }
        }

    


    @media(min-width: 360px) and (max-width: 767px) {
        width: 77vw;

        > h2 {
            font-size: 1.4em;
            margin: 0; 
        }

        & .content {
            margin: 0;
            margin-top: -10px;

            > span {
                > li {
                    font-size: 13px;
                    width: 90px;
            }
        }
    }
`