import { ContainerHeader, ContentHeader } from "./styles"

const HeaderPage = () => {
    return (
        <ContainerHeader>
            <ContentHeader>
                <img src="./assets/logo2.png"/>
                <h1>Consultoria Imobiliaria</h1>
            </ContentHeader>
            <div>
                <button>Inicio</button>
                <button>Entrar</button>
            </div>
        </ContainerHeader>
    )
}
export default HeaderPage