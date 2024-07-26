import CardsProperties from "../CardsProperts"
import CarouselImage from "../CarouselAluguel"
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
            <CarouselImage />
            <CardsProperties />
        </>
    )
}

export default ContainerCompo