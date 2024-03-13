import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';



const VisitedSwiper = () => {

    return (
        <div class="w-full rounded-2xl overflow-hidden">
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
            >
                    <div className='flex flex-col'>
                        <div class="w-full relative pt-md">
                            <div class='absolute inset-0 w-full h-full'>
                                <SwiperSlide> 
                               
                                    <a href="#" class="group cursor-pointer">
                                        <img src="images/1.jpg" style={{width: "24rem", height: "12rem"}}/>
                                        <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                    </a>
                                    {/* info */}
                                    <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                        <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                        <div class="flex h-12 mb-8">
                                            <h2 class="title_color text-base font-normal line-clamp-2">
                                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                            </h2>
                                        </div>
                                        <a href="" class="h-10 gap-2 w-full flex-center group text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                            <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                    
                                </SwiperSlide>

                                <SwiperSlide> 
                                
                                    <a href="#" class="group cursor-pointer">
                                        <img src="images/2.jpg" style={{width: "24rem", height: "12rem"}}/>
                                        <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                    </a>
                                    {/* info */}
                                    <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                        <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                        <div class="flex h-12 mb-8">
                                            <h2 class="title_color text-base font-normal line-clamp-2">
                                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                            </h2>
                                        </div>
                                        <a href="" class="h-10 gap-2 w-full group flex-center text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 hover:text-white  border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                            <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                   
                                </SwiperSlide>

                                <SwiperSlide> 
                                   
                                        <a href="#" class="group cursor-pointer">
                                            <img src="images/3.jpg" style={{width: "24rem", height: "12rem"}}/>
                                            <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                        </a>
                                        {/* info */}
                                        <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                            <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                            <div class="flex h-12 mb-8">
                                                <h2 class="title_color text-base font-normal line-clamp-2">
                                                    This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                                </h2>
                                            </div>
                                            <a href="" class="h-10 gap-2 w-full group flex-center text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 hover:text-white  border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                                <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    
                                </SwiperSlide>

                                <SwiperSlide> 
                                   
                                        <a href="#" class="group cursor-pointer" >
                                            <img src="images/4.jpg" style={{width: "24rem", height: "12rem"}}/>
                                            <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                        </a>
                                        {/* info */}
                                        <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                            <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                            <div class="flex h-12 mb-8">
                                                <h2 class="title_color text-base font-normal line-clamp-2">
                                                    This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                                </h2>
                                            </div>
                                            <a href="" class="h-10 gap-2 w-full group flex-center text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 hover:text-white  border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                                <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                </svg>
                                            </a>
                                        </div>

                                   
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <a href="#" class="group cursor-pointer">
                                        <img src="images/1.jpg" style={{width: "24rem", height: "12rem"}}/>
                                        <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                    </a>
                                    {/* info */}
                                    <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                        <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                        <div class="flex h-12 mb-8">
                                            <h2 class="title_color text-base font-normal line-clamp-2">
                                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                            </h2>
                                        </div>
                                        <a href="" class="h-10 gap-2 w-full flex-center group text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 hover:text-white  border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                            <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <a href="#" class="group cursor-pointer">
                                        <img src="images/2.jpg" style={{width: "24rem", height: "12rem"}}/>
                                        <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                    </a>
                                    {/* info */}
                                    <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                        <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                        <div class="flex h-12 mb-8">
                                            <h2 class="title_color text-base font-normal line-clamp-2">
                                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                            </h2>
                                        </div>
                                        <a href="" class="h-10 gap-2 w-full group flex-center text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 hover:text-white  border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                            <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <a href="#" class="group cursor-pointer">
                                        <img src="images/3.jpg" style={{width: "24rem", height: "12rem"}}/>
                                        <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                    </a>
                                    {/* info */}
                                    <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                        <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                        <div class="flex h-12 mb-8">
                                            <h2 class="title_color text-base font-normal line-clamp-2">
                                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                            </h2>
                                        </div>
                                        <a href="" class="h-10 gap-2 w-full group flex-center text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 hover:text-white  border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                            <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide> 
                                    <a href="#" class="group cursor-pointer">
                                        <img src="images/4.jpg" style={{width: "24rem", height: "12rem"}}/>
                                        <div class="absolute top-8 left-0 w-12 group-hover:w-20 transition-all duration-300 ease-in h-10 bg-red-600 text-white text-xs font-normal flex items-center justify-end pr-2 rounded-r-xl"> 20% </div>
                                    </a>
                                    {/* info */}
                                    <div class="p-4 flex flex-col bg-white dark:bg-dark-800">
                                        <h3 class="title_color text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                                        <div class="flex h-12 mb-8">
                                            <h2 class="title_color text-base font-normal line-clamp-2">
                                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                                            </h2>
                                        </div>
                                        <a href="" class="h-10 gap-2 w-full group flex-center text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in hover:bg-purple-700 dark:hover:bg-dark-800 hover:text-white  border border-gray-300 dark:border-gray-600 dark:hover:border-indigo-400 rounded-2xl">
                                            <span class="text-base font-medium dark:text-white dark:group-hover:text-indigo-400"> visite more pics </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white dark:group-hover:text-indigo-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                
                            </div>
                        </div>
                    </div>
            </Swiper>
        </div>
       
    )
}

export default VisitedSwiper