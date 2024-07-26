import { FormContent, FormSearch } from "./styles"

const SearchContent = () =>{
    return(
        <FormSearch>
                <FormContent>
                        <select name="select-section" >
                            <option value="select">Select City</option>
                            <option value="sao-paulo">São paulo</option>
                            <option value="sao-paulo">Rio de janeiro</option>
                            <option value="sao-paulo">Cuiritiba</option>
                            <option value="sao-paulo">Minas gerais</option>
                            <option value="sao-paulo">Bahia</option>
                            <option value="sao-paulo">Amazonas</option>
                            <option value="sao-paulo">Cuiaba</option>
                            <option value="sao-paulo">Belem</option>
                        </select>
                    <input type="number" placeholder="Min price" />
                    <input type="number" placeholder="max-price" />
                    <select name="select-section" >
                            <option value="select">Select property</option>
                            <option value="select-home">Casa</option>
                            <option value="select-ap">Apartamento</option>
                            <option value="select-hotel">Hotel</option>
                            <option value="select-risort">Risort</option>
                        </select>
                    <button type="submit">Search</button>
                </FormContent>
        </FormSearch>
    )
}

export default SearchContent