import CustomButton from "../../Button";
import Image from '../../../assets/daTerra.png'
import FadeInOnScroll from '../../../scripts/fadeInOnScroll';

export default function About() {
    return (
        <section className="text-gray-600 body-font">
            <FadeInOnScroll>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="rounded-[10px] object-cover object-center" alt="hero" src={Image} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Sobre a empresa
                        <div className="bg-gray-300 h-[1px] w-full my-4"></div>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    O restaurante Da Terra, fundado em 2012 por Clarissa Barcellos, é uma extensão da visão de seus pais, oferecendo um buffet saudável e saboroso para toda a família. Com ingredientes orgânicos e atendimento de alta qualidade, o restaurante busca crescimento e reconhecimento na gastronomia através de parcerias saudáveis com colaboradores e clientes.
                    </p>
                    <div className="flex justify-center">
                        <a href="/sobre"><CustomButton title="Saiba Mais" backgroundColor="#1E1E1E" hoverColor="#0F0F0F" width="280px" /></a>
                    </div>
                </div>
            </div>
            </FadeInOnScroll>
        </section>
    )
}
