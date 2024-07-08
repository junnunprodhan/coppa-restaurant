import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './today.css'
import SectionTitle from '../../Shere/SectionTitle/SectionTitle';

const ImageURL1 = "https://i.ibb.co/8XxNbnR/rosemar.jpg "
const ImageURL2 = "https://i.ibb.co/QDSk5NM/meliz.jpg "
const ImageURL3 = " https://i.ibb.co/Dkk8MS9/vega.jpg"
const ImageURL4 = " https://i.ibb.co/sFPzN9K/salad.jpg"
const ImageURL5 = " https://i.ibb.co/CBQk5QB/homemade.jpg"
const ImageURL6 = " https://i.ibb.co/Tm5VqH2/sever.jpg"
const ImageURL7 = "https://i.ibb.co/XtNZhdW/temeto.jpg "
const ImageURL8 = " https://i.ibb.co/jTgNMYp/decadent.jpg"
const ImageURL9 = "https://i.ibb.co/MBDfxQ3/mango.jpg "
const ImageURL10 = " https://i.ibb.co/cCLJHs6/ice.jpg"

const TodaySlider = () => {
    return (
        <section>
            <SectionTitle title={'Delicious Taste of'} subTitle={'TODAY RECIPES'} />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40 ' src={ImageURL1} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Special Grilled Salmon</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL2} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Mouthwatering Chicken Kebabs</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL3} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Vegetarian Delight Platter</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL4} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Classic Caesar Salad</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL5} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Homemade Lasagna</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL6} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Savory Beef Stir-Fry</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL7} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Creamy Tomato Basil Soup</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL8} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Decadent Chocolate Fondue</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL9} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Refreshing Mango Tango Smoothie</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' md:h-[300px] md:w-[250px] w-[300px] h-60 shadow-2xl bg-slate-100'>
                        <div>
                            <img className=' w-full h-40' src={ImageURL10} alt="" />
                        </div>
                        <div>
                            <p className=' text-start mt-3 font-bold text-xl ml-2'>Iced Caramel Macchiato</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default TodaySlider;