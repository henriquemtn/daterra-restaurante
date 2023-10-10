import FadeInOnScroll from "../../../scripts/fadeInOnScroll";

interface CustomDescription {
    text: string;
}

export default function Description({ text }: CustomDescription) {
    return (
        <section className="body-font">
            <FadeInOnScroll>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="max-w-lg mb-10 md:mb-0">
                    </div>
                    <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center ">
                        <p className="lg:max-w-[1120px] mb-8 leading-relaxed text-justify">
                            {text}
                        </p>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    )
}

// função exportando para a pagina Sobre ( pois o texto nao estava sendo formatado corretamente pela Props da Description acima! )
export function DescriptionAbout() {
    return (
        <section className="text-gray-600 body-font">
            <FadeInOnScroll>
                <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                    <div className="max-w-lg mb-10 md:mb-0">
                    </div>
                    <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                        <p className="lg:max-w-[1350px] mb-8 leading-relaxed text-justify">
                            O restaurante Da terra, fundado em 12 de junho de 2012, foi uma ideia de Clarissa Barcellos, que desejava prosseguir com o trabalho de seus pais, Noé Felipe, dono do Restaurante Vida, e Jacira de Fátima, dona do Restaurante Lua. Ambos tinham como objetivo servir pratos que fossem saudáveis e que agradassem o público geral.<br /><br />
                            Seguindo este ideal, Clarissa e Edson, seu marido e sócio, tiveram como objetivo fazer com que seu restaurante servisse um buffet saudável e saboroso que atendesse a toda família, desde crianças, até clientes mais seletivos.
                            O cuidado com os ingredientes, vai de hortaliças, que são todas orgânicas, até os componentes para pratos mais complexos, trabalhando com ingredientes integrais, vegetais frescos e selecionados, carne branca para opção de proteína animal, pratos veganos com opção de proteína vegetal, grãos e cereais.<br /><br />
                            Mesmo que o buffet seja uma parte importante, o cuidado com serviço não para por aí, um dos princípios do restaurante é que o atendimento seja ágil e de alta qualidade, com atendentes simpáticos e determinados a ajudar o cliente no que for necessário, com o objetivo principal de que o ambiente forneça uma atmosfera aconchegante onde todo cliente seja bem-vindo e respeitado.<br /><br />
                            É importante destacar ainda a visão do casal para o futuro do restaurante, que trabalham para seu crescimento e reconhecimento dentro do ramo de gastronomia, em parceria com colaboradores, fornecedores e acima de tudo, clientes. Visando parcerias saudáveis onde todos sejam beneficiados.<br /><br />
                        </p>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    )
}

