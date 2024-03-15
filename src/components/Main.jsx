import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Main = () => {
    return (
    <div class="pt-4">
        <div class="container grid grid-cols-1 gap-4 mb-10 sm:grid-cols-3">

            <div className="relative aspect-video w-full sm:col-span-2">
                <div class="absolute inset-0">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                    >
                        <SwiperSlide> 
                                <a href="#" class="swiper-slide" >
                                    <img src="images/nature1.jpg" class="rounded-2xl object-cover" />
                                </a>
                        </SwiperSlide>
                        <SwiperSlide> 
                                <a href="#" class="swiper-slide">
                                    <img src="images/nature2.jpg" class="rounded-2xl  object-cover" />
                                </a>
                        </SwiperSlide>
                        <SwiperSlide> 
                                <a href="#" class="swiper-slide">
                                    <img src="images/nature3.jpg" class="rounded-2xl  object-cover" />
                                </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* <div class="grid grid-cols-2 sm:grid-cols-1 gap-4">
                <a href="" class="aspect-video">
                    <img src="images/nature1.jpg" alt="slide2" class="rounded-2xl overflow-hidden" />
                </a>
                <a href="" class="aspect-video">
                    <img src="images/nature2.jpg" alt="slide3" class="rounded-2xl overflow-hidden" />
                </a>
            </div> */}


            <div class="col-span-1">
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-1">
                    <a href="#" class="overflow-hidden aspect-video rounded-2xl">
                        <img src="images/nature1.jpg" alt="slide2" class="w-full h-full" />
                    </a>
                    <a href="#" class="overflow-hidden aspect-video rounded-2xl">
                        <img src="images/nature2.jpg" alt="slide3" class="w-full h-full" />
                    </a>
                    <a href="#" class="overflow-hidden aspect-video rounded-2xl">
                        <img src="images/nature3.jpg" alt="slide3" class="w-full h-full" />
                    </a>
                </div>
            </div> 

        </div>
    </div>
    )
}

export default Main