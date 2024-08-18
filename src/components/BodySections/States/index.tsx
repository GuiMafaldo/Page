import { useState } from "react"
import { ContentState, StatesContainer } from "./styles"

const ContentStates = () => {
    const [btnAlugar , setBtnAlugar] = useState(false)
    return(
        <>
            <StatesContainer>
            <div className="title-and-button">
                <h2>Onde você quiser, tem um AP pela JF faustino!</h2>
                <div>
                    <button 
                        className={`button-btn ${btnAlugar? 'active': ""}`}
                        onClick={() => setBtnAlugar(!btnAlugar) }>
                            Alugar
                    </button>
                    <button 
                        className={`button-btn ${btnAlugar? '': "active"}`}
                        onClick={() => setBtnAlugar(!btnAlugar) }>
                            Comprar
                    </button>
                </div>
            </div>
        </StatesContainer>
        <ContentState>
            <div className="content-links">
                <h2>São Paulo</h2>
                <div>
                    <li>Apartamentos para alugar em São Paulo</li>
                    <li>Casas para alugar em São Paulo</li>
                    <li>Studios e kitnets para alugar em São Paulo</li>
                    <li>Casas em condominio para alugar em São Paulo</li>
                </div>    
            </div>
            <div className="content-links">
                <h2>Rio de Janeiro</h2>
                <div>
                    <li>Apartamentos para alugar em Rio de Janeiro</li>
                    <li>Casas para alugar em Rio de Janeiro</li>
                    <li>Studios e kitnets para alugar em Rio de Janeiro</li>
                    <li>Casas em condomínio para alugar em Rio de Janeiro</li>
                </div>    
            </div> 
            <div className="content-links">
                <h2>Porto Alegre</h2>
                <div>
                    <li>Apartamentos para alugar em Porto Alegre</li>
                    <li>Casas para alugar em Porto Alegre</li>
                    <li>Studios e kitnets para alugar em Porto Alegre</li>
                    <li>Casas em condominio para alugar em Porto Alegre</li>
                </div>    
            </div> 
            <div className="content-links">
                <h2>Belo Horizonte</h2>
                <div>
                    <li>Apartamentos para alugar em Belo Horizonte</li>
                    <li>Casas para alugar em Belo Horizonte</li>
                    <li>Studios e kitnets para alugar em Belo Horizonte</li>
                    <li>Casas em condominio para alugar em Belo Horizonte</li>
                </div>    
            </div>
            <div className="content-links">
                <h2>Campinas</h2>
                <div>
                    <li>Apartamentos para alugar em Campinas</li>
                    <li>Casas para alugar em Campinas</li>
                    <li>Studios e kitnets para alugar em Campinas</li>
                    <li>Casas em condominio para alugar em Campinas</li>
                </div>    
            </div>
            <div className="content-links">
                <h2>Santo Andre</h2>
                <div>
                    <li>Apartamentos para alugar em Santo Andre</li>
                    <li>Casas para alugar em Santo Andre</li>
                    <li>Studios e kitnets para alugar em Santo Andre</li>
                    <li>Casas em condominio para alugar em Santo Andre</li>
                </div>    
            </div>
            <div className="content-links">
                <h2>Guarulhos</h2>
                <div>
                    <li>Apartamentos para alugar em Guarulhos</li>
                    <li>Casas para alugar em Guarulhos</li>
                    <li>Studios e kitnets para alugar em Guarulhos</li>
                    <li>Casas em condominio para alugar em Guarulhos</li>
                </div>    
            </div> 
            <div className="content-links">
                <h2>Osasco</h2>
                <div>
                    <li>Apartamentos para alugar em Osasco</li>
                    <li>Casas para alugar em Osasco</li>
                    <li>Studios e kitnets para alugar em Osasco</li>
                    <li>Casas em condominio para alugar em Osasco</li>
                </div>    
            </div>
            <div className="content-links">
                <h2>Sorocaba</h2>
                <div>
                    <li>Apartamentos para alugar em Sorocaba</li>
                    <li>Casas para alugar em Sorocaba</li>
                    <li>Studios e kitnets para alugar em Sorocaba</li>
                    <li>Casas em condominio para alugar em Sorocaba</li>
                </div>    
            </div>  
            <div className="content-links sbc">
                <h2>São Bernardo do Campo</h2>
                <div>
                    <li>Apartamentos para alugar em São Bernardo do Campo</li>
                    <li>Casas para alugar em São Bernardo do Campo</li>
                    <li>Studios e kitnets para alugar em São Bernardo do Campo</li>
                    <li>Casas em condomínio para alugar em São Bernardo do Campo</li>
                </div>    
            </div> 
        </ContentState>
        </>
                       
       
    )
}

export default ContentStates