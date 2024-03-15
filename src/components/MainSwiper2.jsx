import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';


// import required modules
import { Controller, FreeMode, Navigation, Thumbs } from 'swiper/modules';

const MainSwiper2 = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState("images/nature1.jpg");

  return (
    <div class="p-4 py-2">
      <Swiper
        style={{
          '--swiper-navigation-color': '#999',
          '--swiper-pagination-color': '#999',
          '--swiper-navigation-size': '10'
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="mySwiper2"
      >
          <SwiperSlide>
            <img src={"images/nature1.jpg" } class="w-full h-full transition-all"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={"images/nature2.jpg" } class="w-full h-full transition-all" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"images/nature3.jpg" }  class="w-full h-full transition-all" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"images/nature4.jpg"}   class="w-full h-full transition-all" />
          </SwiperSlide>        
      </Swiper> 
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={"images/nature1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"images/nature2.jpg"}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"images/nature3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"images/nature4.jpg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSwiper2
