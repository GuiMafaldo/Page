import CardProprietario from "../BodySections/ProprietarioCard"
import CarouselCompra from "../CarouselDir/CompraSection"
import ContainerFooter from "../FooterPage"
import FormularioCadastro from "../Forms/FormRegister"
import HeaderPage from "../Header"
import SearchContent from "../Forms/FormularioPesquisa"
import MostPolularesSearchs from "../BodySections/Populares"
import InfoCompraVenda from "../BodySections/SectionInformacoes"
import ContentStates from "../BodySections/States"
import { ContentFlex } from "./styles"
import CarouselFinancia from "../CarouselDir/FinanciaSection"
import CarouselAlugel from "../CarouselDir/AlugaSection"

const ContainerCompo = () =>{
    return(
        <>
            <HeaderPage />
            <SearchContent />
            <ContentFlex>
            <FormularioCadastro />
            </ContentFlex>
            <InfoCompraVenda />
            <CarouselAlugel />
            <CarouselCompra />
            <CarouselFinancia />
            <CardProprietario />
            <ContentStates />
            <MostPolularesSearchs />
            <ContainerFooter />
        </>
    )
}

export default ContainerCompo