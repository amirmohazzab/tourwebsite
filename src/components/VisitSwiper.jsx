import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const VisitSwiper = () => {
    return (
        <div className='flex justify-center items-center'>
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
            >
                <SwiperSlide class="h-96 w-96">
                    <a href="#">
                        <img src="images/1.jpg" class="w-full h-full object-cover"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide class="h-96 w-96">
                    <a href="#">
                        <img src="images/1.jpg" class="w-full h-full object-cover"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide class="h-96 w-96">
                    <a href="#">
                        <img src="images/1.jpg" class="w-full h-full object-cover"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide class="h-96 w-96">
                    <a href="#">
                        <img src="images/1.jpg" class="w-full h-full object-cover"/>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default VisitSwiper