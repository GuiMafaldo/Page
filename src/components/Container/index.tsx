import CardProprietario from "../CardProprietario"
import CardsProperties from "../CardsProperts"
import CarouselAluguel from "../CarouselAluguel"
import CarouselCompra from "../CarouselCompra"
import CarouselFinancia from "../CarouselFinacia"
import FormularioCadastro from "../FormRegister"
import HeaderPage from "../Header"
import SearchContent from "../SearchForm"
import InfoCompraVenda from "../SectionInfo"
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
        </>
    )
}

export default ContainerCompo