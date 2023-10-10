import imagem from '../../../assets/slider.png'
import {
    FaLeaf,
} from 'react-icons/fa'
import CustomButton from '../../Button';
import FadeInOnScroll from '../../../scripts/fadeInOnScroll';

export default function Slider() {
    const containerStyle = {
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        background: `url(${imagem}) center/cover`,
    };

    return (
        <div className='flex items-center' style={containerStyle}>
            <FadeInOnScroll>
                <div className='ss:w-[60%] h-[50%] mt-20 rounded-[7px] flex flex-col justify-center items-center w-full'>
                    <h1 className="text-5xl md:text-[64px] text-white font-medium">DaTerra Natural</h1>
                    <div className='flex justify-between items-center w-50 mx-auto text-2xl text-[#1C4E32]'>
                        <FaLeaf style={{ transform: 'scaleX(-1)' }} />
                        <p className="text-[13px] md:text-[24px] text-white py-5 px-2 text-center">Opções vegetarianas, veganas e tradicionais</p>
                        <FaLeaf />
                    </div>
                    <div className='bg-white w-[350px] h-[1px] mb-4'></div>
                    <a href="/buffet"> <CustomButton title="Informações do Buffet" backgroundColor="#1C4E32" hoverColor="#0F2C1C" width="280px" /></a>
                </div>
            </FadeInOnScroll>
        </div>
    )
}
