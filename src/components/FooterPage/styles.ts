import styled from "styled-components";

export const ContainerFooterPage = styled.div`
    background-color: #e1e1e1;
    margin-top: 100px;
    height: 70vh;
    padding: 60px;
    padding-bottom: 110px;
    

    > span {
        margin-left: 214px;
    }
    @media(max-width: 767px){
        width: 82vw;
        padding-bottom: 110px;
    }

    @media(min-width: 768px) and (max-width: 1024px) {
        width: 89vw;
        padding-bottom: 130px;    
}

`
export const SectionAbout = styled.section`
    display: flex;
    justify-content: space-between;
    width: 70vw;
    margin: 0 auto;

    & .about{
        display: flex;
        flex-direction: column;
        gap: 20px;

        > h4 {
            font-family: Helvetica;
            font-size: 22px;
            margin-bottom: -1px;
        }

        > span {
            font-family: Helvetica;
            font-size: 18px;
        }
    }

    & .about-card {
        width: 10vw;
        padding: 40px;
        background-color: #134074;

        > h4 {
            color: #fff;
            font-family: Helvetica;
            font-size: 30px;
            margin-top: -1px;
            margin-bottom: 20px;    
        }

            > span, a {
                color: #fff; 
                font-family: Helvetica;
                font-size: 14px;
                text-decoration: none;
            }

            > div {
                display: flex;
                align-items: center;
                
                > img {
                    width: 30px;
                    height: 30px;
                    margin-left: 10px;
                    cursor: pointer;
                    background-color: #fff;
                }
            }     
    }

     @media(max-width: 767px){
            width: 100vw;

            & .about{
                width: 90vw;
                display: flex;
                flex-direction: column;
                gap: 20px;
                margin-left: -16px;

                > h4 {
                    font-family: Helvetica;
                    font-size: 15px;
                
                }

                > span {
                    font-family: Helvetica;
                    font-size: 12px;
                }
            }

            & .about-card {
                display: none;
            }
        }

        @media(min-width: 768px) and (max-width: 1024px) {
            width: 100vw;

            .about {
                width: 90vw;

                > h4 {
                    font-size: 18px; 
                }

                > span {
                     font-size: 14px; 
                }
            }

            & .about-card {
                width: 60vw;
                height: 25vh;
                margin-top: 25px;
                margin-right: 100px;

                > h4 {
                    margin-top: -10px;
                    font-size: 16px;
                }

                > span {
                    font-size: 13px; 
                }
            }

        }
`
export const TermsPolitcContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 80vw;
    padding: 80px 0 140px 0;
    margin: 0 auto;

    > div {
        display: flex;
        margin: 0 auto;
        margin-right: 20px;
        gap: 30px;
        > li {
            margin-right: -16px;
            list-style: none;
            text-decoration: underline;
            cursor: pointer; 
        }
    }

    & .logotipo {
        width: 30vw;
        display: flex;
        margin: 0 auto;
            img {
                width: 30px;
                margin-right: 6px;
                cursor: pointer;
            }
        }
        

    @media(max-width: 767px){
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 80vw;

        & .logos {
                img{
                    width 20px;
                }
            }


        > div {
            width: 100vw;
            padding-top: 10px;
            gap: 24px;
            margin-left: -16px;
                > li {
                    font-size: 14px;
                    list-style: none;
                    margin-bottom: 20px;
                }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;

        > li {
            font-size: 12px; 
        }

        > img {
            width: 18px;
            height: 22px;
            margin-right: 16px; 
        }

        > div {
            width: 80vw;
            padding-top: 10px;
            gap: 30px;
            margin: 0 auto;
                > li {
                    font-size: 16px;
                    list-style: none;
                    margin-bottom: 20px;
            }
        }
    }
`
export const LastItmsPage = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 70vw;
    margin: 0 auto;

    & .creci {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 10px;

            & .ver-todos {
                text-decoration: underline;
                cursor:pointer;
            }
            > p {
                font-family: Helvetica; 
            } 

        > img {
            width: 26px;
            height: 30px;
            margin-left: -40px;
            cursor:pointer;
        }
    }

    & .images {
        display: flex;

        > img {
            cursor: pointer;
            height: 40px; 
        }
    }

    @media(max-width: 767px){
        width: 90vw;
        margin-top: -40px;
        padding-bottom: 10px;

        & .creci {
            & .ver-todos {
                text-decoration: underline;
                cursor:pointer;
            }
            > p {
                font-family: Helvetica; 
                font-size: 14px;
            }

            > img {
                width: 20px;
                height: 20px;
                margin-left: -40px;
                cursor:pointer;
            }
        }

        & .images {
            display: flex;
            margin-right: 30px;

            > img {
                cursor: pointer;
                height: 30px; 
            }
        }
    }

    @media(min-width: 768px) and (max-width: 1024px) {
        width: 100vw;
        margin-top: -80px;

        & .creci {
            & .ver-todos {
                text-decoration: underline;
                cursor:pointer;
            }
            > p {
                font-family: Helvetica; 
                font-size: 14px;
            }

            > img {
                width: 20px;
                height: 26px;
                margin-left: -40px;
                cursor:pointer;
            }
        }

            & .images {
                display: flex;
                margin-right: 130px;

                > img {
                    cursor: pointer;
                    height: 30px; 
                }
            }
    }
`