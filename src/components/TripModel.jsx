import { useState, useContext } from "react"
import { toast } from 'react-toastify';
import { TourContext } from "../Context";

const TripModel = () => {

    const [sliderTab, setSliderTab] = useState(true);
    const ground = () => setSliderTab(true);
    const air = () => setSliderTab(false);

    const {openMenu, setOpenMenu, setGoNext, goNext} = useContext(TourContext);
    

    return (
        <div>
            {
                (goNext) ?
                (
                    <div class="fixed inset-0 z-20 flex-center">
                        <div class="bg-white rounded-2xl max-w-sm w-full">
                            <div class="w-full h-12 text-gray-700 text-base font-medium flex-center"> Choose your Trip Properties </div>
                            <ul class="flex- flex-col list-none ">
                                <li class="even:bg-white odd:bg-gray-100 w-full h-12 flex items-center justify-between px-4">
                                    <div> <h3 class="text-sm font-medium text-gray-700"> Meal </h3></div>
                                    <ul class="flex items-center gap-2 list-none">
                                        <li class="relative">
                                            <input type="checkbox" name="food" id="breakfast" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="breakfast" class="text-sm font-medium peer-checked:bg-purple-700 peer-checked:text-white transition-colors cursor-pointer text-purple-700 border border-purple-700 px-2 py-1 rounded-lg"> Breakfast </label>
                                        </li>
                                        <li class="relative">
                                            <input type="checkbox" name="food" id="lunch" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="lunch" class="text-sm font-medium peer-checked:bg-purple-700 peer-checked:text-white transition-colors cursor-pointer text-purple-700 border border-purple-700 px-2 py-1 rounded-lg"> Lunch </label>
                                        </li>
                                        <li class="relative">
                                            <input type="checkbox" name="food" id="dinner" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="dinner" class="text-sm font-medium peer-checked:bg-purple-700 peer-checked:text-white transition-colors cursor-pointer text-purple-700 border border-purple-700 px-2 py-1 rounded-lg"> Dinner </label>
                                        </li>
                                    </ul>
                                </li>
                                <li class="even:bg-white odd:bg-gray-100 w-full h-12 flex items-center justify-between px-4">
                                    <div> <h3 class="text-sm font-medium text-gray-700"> Places </h3></div>
                                    <ul class="flex items-center gap-2 list-none">
                                        <li class="relative">
                                            <input type="checkbox" name="places" id="historical" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="historical" class="text-sm font-medium peer-checked:bg-green-500 peer-checked:text-white transition-colors cursor-pointer text-green-500 border border-green-500 px-2 py-1 rounded-lg"> Historical </label>
                                        </li>
                                        <li class="relative">
                                            <input type="checkbox" name="places" id="sport" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="sport" class="text-sm font-medium peer-checked:bg-green-500 peer-checked:text-white transition-colors cursor-pointer text-green-500 border border-green-500 px-2 py-1 rounded-lg"> Sports</label>
                                        </li>
                                        <li class="relative">
                                            <input type="checkbox" name="places" id="entertainment" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="entertainment" class="text-sm font-medium peer-checked:bg-green-500 peer-checked:text-white transition-colors cursor-pointer text-green-500 border border-green-500 px-2 py-1 rounded-lg"> Recreational </label>
                                        </li>
                                    </ul>
                                </li>
                                <li class="even:bg-white odd:bg-gray-100 w-full h-12 flex items-center justify-between px-4">
                                    <div class="flex items-center gap-2"> 
                                        <h3 class="text-sm font-medium text-gray-700"> Hotel </h3>
                                        <span class="text-yellow-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <ul class="flex items-center gap-2 list-none">
                                        <li class="relative">
                                            <input type="radio" name="star" id="third" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="third" class="text-sm font-medium peer-checked:bg-yellow-500 peer-checked:text-white transition-colors cursor-pointer text-yellow-500 border border-yellow-500 w-10 flex justify-center py-1 rounded-lg"> 3 </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" name="star" id="fourth" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="fourth" class="text-sm font-medium peer-checked:bg-yellow-500 peer-checked:text-white transition-colors cursor-pointer text-yellow-500 border border-yellow-500 w-10 flex justify-center py-1 rounded-lg"> 4 </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" name="star" id="fifth" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="fifth" class="text-sm font-medium peer-checked:bg-yellow-500 peer-checked:text-white transition-colors cursor-pointer text-yellow-500 border border-yellow-500 w-10 flex justify-center py-1 rounded-lg"> 5 </label>
                                        </li>
                                    </ul>
                                </li>
                                <li class="even:bg-white odd:bg-gray-100 w-full h-12 flex items-center justify-between px-4">
                                    <div> <h3 class="text-sm font-medium text-gray-700"> Transfer </h3></div>
                                    <div>
                                        <div class="flex items-center border border-purple-700 w-40 h-8 rounded-2xl relative">
                                            <div onClick={ground} class={`flex-1 z-10 flex-center transition-all ${sliderTab ? 'text-white font-medium' : 'text-gray-700 font-normal cursor-pointer'} text-sm bg-transparent`}> Ground </div>
                                            <div onClick={air} class={`flex-1 z-10 flex-center transition-all ${!sliderTab ? 'text-white font-medium' : 'text-gray-700 font-normal cursor-pointer'} text-sm bg-transparent`}> Air </div>
                                            <input type="radio" name="transfer" id="transfer" class={`absolute top-0 w-1/2 h-full rounded-2xl bg-purple-700 transition-all ${sliderTab ? 'right-1/2' : "right-0"}`} />
                                            <label for="transfer" class={`absolute top-0 right-0`}></label>
                                        </div>
                                    </div>
                                </li>
                                <li class={`even:bg-white odd:bg-gray-100 w-full h-12 flex items-center justify-between px-4 transition-all ${!sliderTab ? 'pointer-events-none select-none opacity-60' : ''}`}>
                                    <div> <h3 class="text-sm font-medium text-gray-700"> Transfer method </h3></div>
                                    <ul class="flex items-center gap-2 list-none">
                                        <li class="relative">
                                            <input type="radio" name="transfer-method" id="train" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="train" class="text-sm font-medium peer-checked:bg-red-500 peer-checked:text-white transition-colors cursor-pointer text-red-500 border border-red-500 px-2 py-1 rounded-lg"> Train </label>
                                        </li>
                                        <li class="relative">
                                            <input type="radio" name="transfer-method" id="bus" class="absolute hidden peer right-0 top-0 invisible" />
                                            <label for="bus" class="text-sm font-medium peer-checked:bg-red-500 peer-checked:text-white transition-colors cursor-pointer text-red-500 border border-red-500 px-2 py-1 rounded-lg"> Bus </label>
                                        </li>
                                    </ul>
                                </li>
                                <div class="px-4 py-2">
                                    <button onClick={() => {toast.success("Your info is saved"); setGoNext(!goNext); setOpenMenu(!openMenu) }} class="flex-center bg-red-500 text-white rounded-2xl w-full h-10"> Apply </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                ) : ""
            }
        </div>
    )
}

export default TripModel