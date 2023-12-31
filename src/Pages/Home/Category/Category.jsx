import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import "swiper/css";



import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";



const Category = () => {
    return (




        <section>

            <SectionTitle
            heading={"Order Online"}
            subHeading={"From 11am to 10pm"}
            >
              
            </SectionTitle>
       
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{

                }}
                modules={[Pagination]}
                className="mySwiper mb-24"

            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">pizzaa</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Soupes</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Salad</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-bold">Deserts</h3>

                </SwiperSlide>


            </Swiper>
        </section>



    );
};

export default Category;


