import { ContainerFooterPage, LastItmsPage, SectionAbout, TermsPolitcContent } from "./styles"

const ContainerFooter = () => {
    return(
        <ContainerFooterPage>
            <SectionAbout>
                <div className="about">
                    <h4>Sobre nós</h4>
                    <span>Conheça o "name here"</span>
                    <span>Segurança no "name here"</span>
                    <span>Regiões atendidas</span>
                    <span>Conheça a Garantia "name here"</span>
                    <span>Central de ajuda</span>
                    <span>Mapa do site</span>
                    <span>Mapa de condominios</span>
                    <span>Relatorio de Transparencia Salarial</span>
                </div>
                <div className="about">
                    <h4>Produtos</h4>
                    <span>Simular financiamento imobiliario</span>
                    <span>Indique um imovel</span>
                    <span>Valor de aluguel por bairro</span>
                    <span>Meu lugar</span>
                </div>
                <div className="about">
                    <h4>Trabalhe com a gente</h4>
                    <span>Carreiras</span>
                    <span>Corretagem</span>
                    <span>Fotografia</span>
                    <span>Vistorias</span>
                    <span>Parceria de Reparos</span>
                    <span>Parceria com Portarias</span>
                </div>
                <div className="about about-card">
                    <h4>Name here</h4>
                    <span>Para proporcionar uma experiencia inesquecivel
                        para quem precisa de um lar ou anunciar com a gente, o
                        name here aposta em design,
                        segurança e tecnologia de ponta
                    </span>
                    <div>
                        <a href="#">Mais informações</a>
                        <img src="./assets/seta.png" alt="" />
                    </div>
                </div>
            </SectionAbout>
            <TermsPolitcContent>
                    <li>Politica de privacidade</li>
                    <img src="./assets/seta.png" alt="" />
                    <li>Termos e condições de uso</li>
                    <img src="./assets/seta.png" alt="" />
                    <li>Política de Cookies</li>
                    <img src="./assets/seta.png" alt="" />
                    <li>Preferencias de Cookies</li>
                    <img src="./assets/seta.png" alt="" />
                    <li>Manual do usuarío</li>
                    <img src="./assets/seta.png" alt="" />
                    <img src="./assets/face.svg"/>
                    <img src="./assets/insta.svg"/>
                    <img src="./assets/x.svg"/>
                    <img src="./assets/linkedin.svg"/>
                    <img src="./assets/gmail.svg"/>
            </TermsPolitcContent>
            <LastItmsPage>
                <div className="creci">
                    <p>GRPQA Ltda. - CRECI-SP XXX.XXX</p>
                    <p className="ver-todos">Ver outros</p>
                    <img src="./assets/seta.png" alt="" />
                </div>
                <div className="images">
                    <img src="./assets/playstore.webp"/>
                    <img src="./assets/applestore.webp"/>
                </div>
            </LastItmsPage>
            <span>Versão: 27/07/2024, 1</span>
        </ContainerFooterPage>
    )

}
export default ContainerFooter