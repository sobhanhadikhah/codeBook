import { TesttomotionCard } from '../../../components';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../../styles/swiper.css"

// import required modules
import { EffectCards } from "swiper";
export const TestoMotion = () => {

    return (
        <div className='' >
            <div className='text-center flex justify-center items-center text-4xl py-6 capitalize font-extrabold ' >
                <h1>Whate People Say Abou Us</h1>
            </div>
            <Swiper
                effect={"cards"}
                loop={true}
                loopPreventsSliding={true}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper max-w-[1240px] mx-auto hidden md:block  "
            >
                <SwiperSlide>
                    <TesttomotionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TesttomotionCard />
                </SwiperSlide>

            </Swiper>
            <div className='md:hidden flex' >

                <TesttomotionCard />
            </div>

        </div>
    )
}
