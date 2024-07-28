import CardProprietario from "../ProprietarioCard"
import CarouselAluguel from "../AlugaSection"
import CarouselCompra from "../CompraSection"
import CarouselFinancia from "../FinanciaSection"
import ContainerFooter from "../FooterPage"
import FormularioCadastro from "../FormRegister"
import HeaderPage from "../Header"
import SearchContent from "../FormularioPesquisa"
import MostPolularesSearchs from "../Populares"
import InfoCompraVenda from "../SectionInformacoes"
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