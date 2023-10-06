import Clarissa from '../../../assets/clarissa.jpg'
import Edson from '../../../assets/edson.jpg'
import FadeInOnScroll from '../../../scripts/fadeInOnScroll'

export default function OurTeam() {
    return (
        <section className="text-gray-600 body-font">
            <FadeInOnScroll>
                <div className="container px-5 pb-20 max-w-[1335px] mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-52 h-52 object-cover object-center sm:mb-0 mb-4" src={Clarissa} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Clarissa Barcellos</h2>
                                    <h3 className="text-gray-500 mb-3">Contato: (48) 912345678</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-52 h-52 object-cover object-center sm:mb-0 mb-4" src={Edson} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Edson Machado</h2>
                                    <h3 className="text-gray-500 mb-3">Contato: (48) 912345678</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    )
}