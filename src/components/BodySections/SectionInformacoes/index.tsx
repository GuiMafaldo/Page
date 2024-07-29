import { CompraVendaInfo } from "./styles"

const InfoCompraVenda = () =>{
    return(
        <CompraVendaInfo>
            <div className="title_and_description">
                <h2>Comprar ou Vender <br />
                    seu imóvel não precisa <br />
                    ser um desafio
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda 
                    repellat <br /> possimus corrupti quas culpa placeat enim fugiat recusandae 
                    repudiandae  <br />laborum repellendus harum qui, ut vero, officia autem 
                    fugit praesentium incidunt!
                </p>
                <button>Quero saber mais</button>
            </div>
            <div className="image_container">
                <img src="./assets/compra_venda.webp" alt="" />
            </div>
        </CompraVendaInfo>
    )
}

export default InfoCompraVenda