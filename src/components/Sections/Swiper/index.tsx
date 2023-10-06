import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import S1 from '../../../assets/swiper-images/prato.png'
import S2 from '../../../assets/swiper-images/frango.png'
import S3 from '../../../assets/swiper-images/prato2.png'
import S4 from '../../../assets/swiper-images/moqueca.png'
import S5 from '../../../assets/swiper-images/prato3.png'
import S6 from '../../../assets/swiper-images/arroz.png'
import S7 from '../../../assets/swiper-images/batata.png'
import S8 from '../../../assets/swiper-images/sopa.png'
import S9 from '../../../assets/swiper-images/sucoverde.png'
import S10 from '../../../assets/swiper-images/prato4.png'


export default function SwiperSection() {
    return (
        <div className='bg-[#F5F5F5] flex justify-center items center py-5'>
            <div className="flex justify-center items-center h-full py-5 w-[78%]">
                <ReactSwiper
                    slidesPerView={1}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        540: {
                            slidesPerView: 2,
                        },
                        740: {
                            slidesPerView: 3,
                        },
                        840: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S1} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S2} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S3} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S4} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S5} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S6} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S7} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S8} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S9} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <div className="w-68 h-68 bg-black rounded-[20px]">
                            <img src={S10} alt="" width={450} height={300} style={{ borderRadius: '15px' }} />
                        </div>
                    </SwiperSlide>
                </ReactSwiper>
            </div>
        </div>
    )
}
