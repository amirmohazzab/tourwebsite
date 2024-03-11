import { useContext, useEffect } from "react"
import TripModel from "./TripModel"
import { TourContext } from './../Context';

const TripRequest = () => {

    const {openMenu, goNext, setOpenMenu, setGoNext} = useContext(TourContext);

    return (
        <>
            <div class="bg-white flex flex-col rounded-2xl sm:max-w-[34rem] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl sm:mx-auto">
            <div class="flex-center w-full h-14 text-lg test-gray-700 font-medium border-b border-gray-300">
                Trip Request
            </div>
            <div> 
                <div class="px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 border-b-2 border-dashed text-gray-300">
                        <div class="sm:py-6 sm:px-0">
                            <div class="py-6 border-b sm:pr-4 border-gray-300 sm:border-b-0 sm:border-r sm:py-0">
                                <h4 class="text-sm font-bold text-gray-700 mb-4"> Person Number </h4>
                                <div class="flex gap-4 w-full">
                                    <div className="flex-1 relative">
                                        <input type="radio" name="users" class="absolute hidden peer top-0 right-0 invisible" id="one" />
                                        <label for="one" class="w-full shadow-xl h-10 peer-checked:bg-purple-700 peer-checked:text-white transition-all duration-150 ease-out cursor-pointer flex-center text-gray-700 font-medium text-xl border-2 border-purple-700 rounded-xl bg-transparent"> 1 </label>
                                    </div>
                                    <div className="flex-1 relative">
                                        <input type="radio" name="users" class="absolute hidden peer top-0 right-0 invisible" id="two" />
                                        <label for="two" class="w-full shadow-xl h-10 peer-checked:bg-purple-700 peer-checked:text-white transition-all duration-150 ease-out cursor-pointer flex-center text-gray-700 font-medium text-xl border-2 border-purple-700 rounded-xl bg-transparent"> 2 </label>
                                    </div>
                                    <div className="flex-1 relative">
                                        <input type="radio" name="users" class="absolute hidden peer top-0 right-0 invisible" id="three" />
                                        <label for="three" class="w-full shadow-xl h-10 peer-checked:bg-purple-700 peer-checked:text-white transition-all duration-150 ease-out cursor-pointer flex-center text-gray-700 font-medium text-xl border-2 border-purple-700 rounded-xl bg-transparent"> 3 </label>
                                    </div>
                                    <div className="flex-1 relative">
                                        <input type="radio" name="users" class="absolute hidden peer top-0 right-0 invisible" id="four" />
                                        <label for="four" class="w-full shadow-xl h-10 peer-checked:bg-purple-700 peer-checked:text-white transition-all duration-150 ease-out cursor-pointer flex-center text-gray-700 font-medium text-xl border-2 border-purple-700 rounded-xl bg-transparent"> 4 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 sm:pl-4">
                            <h4 class="text-sm font-bold text-gray-700 mb-4"> Desired person number </h4>
                            <div class="relative w-full text-gray-700 transition-colors focus-within:text-purple-700">
                                <input type="text" class="w-full h-10 pl-10 rounded-lg text-sm font-medium text-gray-700 border border-gray-700 focus:border-gray-300 focus:ring-0 transition-shadow duration-150 ease-out focus:shadow-md" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-2 left-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 pt-4 px-4 sm:px-0">
                    <div class="border-b sm:px-4 sm:border-b-0 sm:border-r">
                        <h4 class="text-base font-medium title_color mb-4"> Personal Info </h4>
                        <input type="text" class="w-full h-10 rounded-lg text-sm font-medium text-gray-700 border border-gray-700 focus:border-gray-300 focus:ring-0 transition-shadow duration-150 ease-out focus:shadow-md mb-6" placeholder="First Name"/>
                        <input type="text" class="w-full h-10 rounded-lg text-sm font-medium text-gray-700 border border-gray-700 focus:border-gray-300 focus:ring-0 transition-shadow duration-150 ease-out focus:shadow-md mb-6" placeholder="Last Name"/>
                        <input type="email" class="w-full h-10 rounded-lg text-sm font-medium text-gray-700 border border-gray-700 invalid:border-red-500 valid:border-green-500 peer focus:border-gray-300 focus:ring-0 transition-shadow duration-150 ease-out focus:shadow-md mb-4" placeholder="Example@gmail.com"/>
                        <p class="hidden text-sm font-medium text-red-500 peer-invalid:block"> Email not valid</p>
                        <div class="flex items-center gap-4 py-4">
                            <h4 class="text-medium font-medium text-gray-700"> Gender </h4>
                            <div class="flex items-center gap-2 hover:cursor-pointer">
                                <label for="male" class="text-gray-700 font-medium text-base"> Male </label>
                                <input type="radio" id="male" name="gender" class="text-sm font-medium title_color text-purple-700 focus:ring-0 focus:ring-offset-0" />
                            </div>
                            <div class="flex items-center gap-2 hover:cursor-pointer">
                                <label for="female" class="text-gray-700 font-medium text-base"> Female </label>
                                <input type="radio" id="female" name="gender" class="text-sm font-medium title_color text-purple-700 focus:ring-0 focus:ring-offset-0" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pt-4 sm:pt-0 sm:px-4">
                            <h4 class="mb-4 text-base font-medium text-gray-700"> Payment method </h4>
                            <select class="w-full h-10 rounded-lg text-sm font-medium text-gray-700 border border-gray-700 focus:border-gray-300 focus:ring-0 transition-shadow duration-150 ease-out focus:shadow-md mb-6">
                                <option value="1"> Master card </option>
                                <option value="2"> Visa card </option>
                                <option value="3"> Debit card </option>
                            </select>
                        </div>
                        <div class="flex flex-col sm:px-4 gap-2 py-2">
                                <h4 class="text-medium font-medium text-gray-700"> Inform me the next discount </h4>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2 hover:cursor-pointer">
                                        <label for="male" class="text-gray-700 font-medium text-base"> Yes </label>
                                        <input type="radio" id="male" name="discount" class="text-sm font-medium title_color text-purple-700 focus:ring-0 focus:ring-offset-0" />
                                    </div>
                                    <div class="flex items-center gap-2 hover:cursor-pointer">
                                        <label for="female" class="text-gray-700 font-medium text-base"> No </label>
                                        <input type="radio" id="female" name="discount" class="text-sm font-medium title_color text-purple-700 focus:ring-0 focus:ring-offset-0" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex py-8 px-4">
                <button onClick={() => {setOpenMenu(!openMenu); setTimeout(()=>{setGoNext(!goNext)}, 2000)}} class="rounded-2xl bg-yellow-500 text-gray-700 w-full sm:w-auto sm:px-6 h-12 flex-center gap-4 text-lg">
                    <h4 class="text-base font-bold text-gray-700">
                         {
                            openMenu ? "Wait" : "Next Step"
                         }
                    </h4>
                    {
                        openMenu ? 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                          
                        ) : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 font-medium">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    }
                </button>
            </div>
            {
                goNext ? 
                (
                    <div onClick={() => {setOpenMenu(!openMenu); setGoNext(!goNext)}} class="fixed inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
                ) : ""
            }
            </div>
            <TripModel />
        </>
       
    )
}

export default TripRequest