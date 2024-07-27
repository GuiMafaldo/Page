import CardProprietario from "../CardProprietario"
import CardsProperties from "../CardsProperts"
import CarouselAluguel from "../CarouselAluguel"
import CarouselCompra from "../CarouselCompra"
import CarouselFinancia from "../CarouselFinacia"
import ContainerFooter from "../FooterPage"
import FormularioCadastro from "../FormRegister"
import HeaderPage from "../Header"
import SearchContent from "../SearchForm"
import MostPolularesSearchs from "../SearchsPopulares"
import InfoCompraVenda from "../SectionInfo"
import ContentStates from "../States"
import { ContentFlex } from "./styles"

const ContainerCompo = () =>{
    return(
        <>
            <HeaderPage />
            <SearchContent />
            <ContentFlex>
            <FormularioCadastro />
            </ContentFlex>
            <InfoCompraVenda />
            <CarouselAluguel />
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