import Imagem from '../../assets/bannerabout.png'
import FadeInOnScroll from '../../scripts/fadeInOnScroll';

interface CustomHeaderProps {
    title: string;
}

export default function Header({title}: CustomHeaderProps) {
  return (
    <section className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Imagem})`, height: '220px'}}>
      <FadeInOnScroll>
         <div className="container mx-auto flex h-full px-5 items-center justify-center flex-col text-white">
            <div className="text-center lg:w-2/3 w-full pt-20">
                <div className="text-center">
                <h1 className="title-font sm:text-5xl text-4xl mb-4 text-white font-noto font-bold">{title}</h1>
                </div>
            </div>
        </div>
        </FadeInOnScroll>
    </section>
  )
}
