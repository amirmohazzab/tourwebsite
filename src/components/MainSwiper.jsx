import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const MainSwiper = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination= {{
                clickable:true
            }}
        >
            <div className='swiper-button-next swiper-button-prev object-cover h-70'>
                <SwiperSlide> 
                    <a href="#">
                        <img src="images/slide1.jpg" class="w-full h-full rounded-2xl"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide> 
                    <a href="#">
                        <img src="images/slide2.jpg" class="w-full h-full rounded-2xl"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide> 
                    <a href="#">
                        <img src="images/slide3.jpg" class="w-full h-full rounded-2xl"/>
                    </a>
                </SwiperSlide>
            </div>
        </Swiper>
    )
}

export default MainSwiper