import MainSwiper from "./MainSwiper"
// import slide2 from "images/slide2.jpg";
// import slide3 from "images/slide3.jpg";

const Main = () => {

    return (
    <main class="pt-4 mb-10">
        
    <div class="container grid grid-cols-1 h-70 sm:grid-cols-3 gap-4">

        <div class="relative w-full pt-md sm:col-span-2">
            <div class="absolute inset-0 h-full w-full bg-cover">
                <MainSwiper />
            </div>
        </div>

        <div class="col-span-1">
            <div class="grid grid-cols-2 sm:grid-cols-1 gap-4">
                <a href="" class="aspect-video rounded-2xl overflow-hidden">
                    <img src="images/slide2.jpg" alt="slide2" class="w-full h-full"/>
                </a>
                <a href="" class="aspect-video rounded-2xl overflow-hidden">
                    <img src="images/slide3.jpg" alt="slide3" class="w-full h-full"/>
                </a>
            </div>
        </div>
    </div>
    </main>
    )
}

export default Main