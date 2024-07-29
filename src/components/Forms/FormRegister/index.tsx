import { ContainerFormulario, ContentForm } from "./styles"
import { useState } from "react"


const FormularioCadastro = () => {
    const [btnAlugar, setBtnAlugar] = useState(false)

    return(
        <ContainerFormulario>
            <h2>Encontre um lar para chamar de seu</h2>
            <div>
                <button 
                    className={`button-btn ${btnAlugar? 'active': ""}`}
                    onClick={() => setBtnAlugar(!btnAlugar) }
                    >
                        Alugar
                </button>
                <button className={`button-btn ${btnAlugar? '': "active"}`}
                    onClick={() => setBtnAlugar(!btnAlugar) }>
                        Comprar
                </button>
            </div>
            <ContentForm>
                <input type="text" placeholder="Digite seu nome:" />
                <input type="email" placeholder="Digite seu email" />
                <input type="number"  placeholder="Digite seu telefone"/>
                <div className="select-quartos">
                    <span>
                        <img src="/assets/gar.png" alt="" />
                        <select name="quartos">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </span>
                    <span>
                        <img src="/assets/room.png" alt="" />
                        <select name="quartos">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </span>
                </div>
                <button>Buscar imoveis</button>
            </ContentForm>
            <div className="proprietario">
                <p>É proprietario?</p>
                <span>Veja os serviços para você</span>
            </div>
        </ContainerFormulario>
    )
}

export default FormularioCadastro