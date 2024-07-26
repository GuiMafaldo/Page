import CardsProperties from "../CardsProperts"
import CarouselImage from "../Carousel"
import FormularioCadastro from "../FormRegister"
import HeaderPage from "../Header"
import SearchContent from "../SearchForm"
import { ContentFlex } from "./styles"

const ContainerCompo = () =>{
    return(
        <>
            <HeaderPage />
            <SearchContent />
            <ContentFlex>
                <FormularioCadastro />
                {/* <CarouselImage /> */}
            </ContentFlex>
            <CardsProperties />
        </>
    )
}

export default ContainerCompo