const MostVisitedPlaces = () => {
    return (
        <div class="flex flex-col gap-4 px-4 pb-10">
            <h2 class="text-lg font-medium text-gray-700 pb-4"> Most Visited Places </h2>
            <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-3">
                <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full cursor-pointer group pt-md">
                        <div className="absolute inset-0 overflow-hidden">
                            <img src="images/slide1.jpg" alt="slide1" class="w-full h-full group-hover:scale-125 transition-all duration-150 ease-in" />
                        </div>
                        <div class="absolute inset-0 flex-center bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in">
                            <a href="" class="flex px-4 py-2 rounded-2xl bg-purple-700 text-white text-base font-medium">
                                Continue...
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col p-4">
                        <h3 class="text-gray-700 text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                        <div class="flex h-12 mb-8">
                            <h2 class="text-gray-700 text-base font-normal line-clamp-2">
                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                            </h2>
                        </div>
                        <a href="#" class="flex text-purple-700 font-medium text-lg">
                            Continue...
                        </a>
                    </div>
                </div>
                <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full cursor-pointer group pt-md">
                        <div className="absolute inset-0 overflow-hidden">
                            <img src="images/slide2.jpg" alt="slide1" class="w-full h-full group-hover:scale-125 transition-all duration-150 ease-in" />
                        </div>
                        <div class="absolute inset-0 flex-center bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in">
                            <a href="" class="flex px-4 py-2 rounded-2xl bg-purple-700 text-white text-base font-medium">
                                Continue...
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col p-4">
                        <h3 class="text-gray-700 text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                        <div class="flex h-12 mb-8">
                            <h2 class="text-gray-700 text-base font-normal line-clamp-2">
                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                            </h2>
                        </div>
                        <a href="#" class="flex text-purple-700 font-medium text-lg">
                            Continue...
                        </a>
                    </div>
                </div>
                <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full cursor-pointer group pt-md">
                        <div className="absolute inset-0 overflow-hidden">
                            <img src="images/slide3.jpg" alt="slide1" class="w-full h-full group-hover:scale-125 transition-all duration-150 ease-in" />
                        </div>
                        <div class="absolute inset-0 flex-center bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in">
                            <a href="" class="flex px-4 py-2 rounded-2xl bg-purple-700 text-white text-base font-medium">
                                Continue...
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col p-4">
                        <h3 class="text-gray-700 text-base font-medium mb-4 line-clamp-1"> Amazon Forest </h3>
                        <div class="flex h-12 mb-8">
                            <h2 class="text-gray-700 text-base font-normal line-clamp-2">
                                This picture belongs to Amazon Forest which is out of the seven Wonders and located in north of the South America.
                            </h2>
                        </div>
                        <a href="#" class="flex text-purple-700 font-medium text-lg">
                            Continue...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostVisitedPlaces