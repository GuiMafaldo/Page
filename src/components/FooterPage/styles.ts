import styled from "styled-components";

export const ContainerFooterPage = styled.div`
    background-color: #e1e1e1;
    margin-top: 100px;
    height: 70vh;
    padding: 60px;
    padding-bottom: 80px;
    

    > span {
        margin-left: 214px;
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
            margin-bottom: -1px;
        }

        > span {
            font-family: Helvetica;
            font-size: 13p4;
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
`
export const TermsPolitcContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    margin: 0 auto;
    padding: 120px;

    > li {
        margin-right: -16px;
        list-style: none;
        text-decoration: underline;
        cursor: pointer; 
    }

    > img {
        width: 30px;
        cursor: pointer; 
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
`