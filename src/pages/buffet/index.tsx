import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Choices from "../../components/Model/Choices";
import Description from "../../components/Model/Description";
import FooterSection from "../../components/Sections/Footer";

//Imagens

import Sucos from '../../assets/swiper-images/sucoverde.png'
import Proteinas from '../../assets/buffet/proteinas.png'
import Saladas from '../../assets/buffet/saladas.png'
import Veganos from '../../assets/buffet/veganos.png'

export default function Buffet() {
  const [choice, setChoice] = useState("Minha escolha 1");
  const [choiceTitle, setChoiceTitle] = useState("Minha escolha 1");
  const [actualChoice, setActualChoice] = useState(1);
  const [choiceBar, setChoiceBar] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSetChoice = (ident: number) => {
    setActualChoice(ident);
  };

 
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    console.log(handleMouseDown)
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    console.log(handleMouseUp)
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - delta;
    }
    console.log(handleMouseMove)
  };

  useEffect(() => {
    switch (actualChoice) {
      case 1:
        setChoiceTitle("Veganos");
        setChoice(
          "Mesmo com o foco do restaurante na comida natural, oferecemos diversas opções veganas todos os dias. Além de nossos feijões, que são todos isentos de quaisquer ingredientes de origem animal, também sempre disponibilizamos proteínas vegetais, legumes, saladas e outros pratos livres de ingredientes de fonte animal, a fim de promover maior inclusão em nossa gastronomia."
        );
        setChoiceBar(true);
        break;
      case 2:
        setChoiceTitle("Saladas");
        setChoice(
          "Em nosso buffet, oferecemos uma variedade de saladas, incluindo opções tradicionais e leves, como nossas hortaliças orgânicas, frutas frescas, legumes e muito mais. Para aqueles que buscam algo diferente, todos os dias preparamos saladas mais elaboradas, como húmus, maionese de mostarda, cebola agridoce e outras opções."
        );
        setChoiceBar(true);
        break;
      case 3:
        setChoiceTitle("Proteínas");
        setChoice(
          "Conscientes da importância da proteína na alimentação de todos, procuramos atender a diversas preferências. Embora não ofereçamos carnes vermelhas, focamos em carnes brancas, como frango e peixe. Para clientes que preferem uma dieta isenta de ingredientes de origem animal, oferecemos proteínas vegetais e cereais, como grão-de-bico, quinoa, aveia e castanhas."
        );
        setChoiceBar(true);
        break;
      case 4:
        setChoiceTitle("Sucos Naturais");
        setChoice(
          "Para saciar a sede e refrescar, temos mais de vinte opções de sucos em nosso cardápio, incluindo polpas, frutas e combinações. Os favoritos da casa são definitivamente os sucos detox, como o 'Sarado' com laranja, limão, gengibre, agrião e mel; o 'Fresh,' que não apenas é saudável, mas também refrescante, com laranja, abacaxi, couve e gengibre; e o 'Nectar,' com laranja, abacaxi e couve. Temos muitas outras opções que certamente vale a pena experimentar."
        );
        setChoiceBar(true);
        break;
      default:
        setChoice("");
        setChoiceBar(false);
        console.log(choiceBar)
        break;
    }
  }, [actualChoice]);

  return (
    <div className="mt-[120px]">
      <Header title="Buffet" />
      <div
        className="bg-[#F5F5F5] flex items-center overflow-x-scroll lg:justify-center"
        ref={containerRef}
        style={{
          whiteSpace: "nowrap",
        }}
      >
        <div className="flex space-x-4 p-4">
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleSetChoice(1)}
          >
            <Choices title="Veganos" image={Veganos} />
            <div
              className={`w-[80%] h-[3px] rounded-sm mt-5 ${
                actualChoice === 1 ? "bg-[#1C4E32]" : "bg-[#F5F5F5]"
              }`}
            ></div>
          </div>
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleSetChoice(2)}
          >
            <Choices title="Saladas" image={Saladas} />
            <div
              className={`w-[80%] h-[3px] rounded-sm mt-5 ${
                actualChoice === 2 ? "bg-[#1C4E32]" : "bg-[#F5F5F5]"
              }`}
            ></div>
          </div>
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleSetChoice(3)}
          >
            <Choices title="Proteínas" image={Proteinas} />
            <div
              className={`w-[80%] h-[3px] rounded-sm mt-5 ${
                actualChoice === 3 ? "bg-[#1C4E32]" : "bg-[#F5F5F5]"
              }`}
            ></div>
          </div>
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleSetChoice(4)}
          >
            <Choices title="Sucos Naturais" image={Sucos} />
            <div
              className={`w-[80%] h-[3px] rounded-sm mt-5 ${
                actualChoice === 4 ? "bg-[#1C4E32]" : "bg-[#F5F5F5]"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto">
        <div className="p-2 rounded-2xl my-5  bg-[#1C4E32] text-white flex flex-col justify-center items-center">
          <div className="pt-2 text-2xl">
            <h1>{choiceTitle}</h1>
          </div>
          <div className="md:mt-5 ">
            <Description text={choice} />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
