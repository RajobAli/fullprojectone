import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What our client say"}
                heading={"Testimonials"}
            >


            </SectionTitle>
        <div className="text-center text-2xl text-green-400 mt-4">Reviews:   {reviews.length}</div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}


                    >
                        <div className="flex flex-col items-center my-16 mx-24">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;