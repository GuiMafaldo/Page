import { ContainerSearchsMost, ContentMost } from "./styles"

const MostPolularesSearchs = () => {
    return(
        <ContainerSearchsMost>
            <ContentMost>
                <h2>Buscas mais populares</h2>
                <div className="content">
                    <span>
                        <li>Apartamento à venda em Diadema</li>
                        <li>Apartamento à venda em Taboão da Serra</li>
                        <li>Apartamento barato em São Paulo</li>
                        <li>Apartamento barato no Rio de Janeiro</li>
                    </span>
                    <span>
                        <li>Apartamento para alugar em curitiba</li>
                        <li>Apartamento para alugar em Goiania </li>
                        <li>Apartamento para alugar em Salvador</li>
                        <li>Apartamento para alugar em Santos</li>
                    </span> 
                    <span>
                        <li>Apartamento para alugar em Florianopolis</li>
                        <li>Apartamento para alugar em Niteroi</li>
                        <li>Apartamento para alugar próximo ao metrô em São Paulo</li>
                        <li>Apartamento para alugar proximo ao metrô no Rio de Janeiro</li>
                    </span> 
                    <span>
                        <li>Apartamento à venda em Barueri</li>
                        <li>Apartamento à venda em Jundiai</li>
                        <li>Casas para alugar em Cotia</li>
                        <li>Casas para alugar em São Gonçalo</li>
                    </span>            
                </div>
            </ContentMost>
        </ContainerSearchsMost>
    )

}
export default MostPolularesSearchs