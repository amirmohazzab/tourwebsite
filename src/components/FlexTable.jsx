const FlexTable = () => {
    return (
        <div class="p-4 mb-10">
            <div class="hidden lg:grid grid-cols-12 gap-4 p-4 text-xs font-medium title_color">
                <div class="col-span-3"> AirLine </div>
                <div class="col-span-2 text-center"> Destination </div>
                <div class="col-span-2 text-center"> Hotel </div>
                <div class="col-span-2 text-center"> Translator </div>
                <div class="col-span-3 text-right"> Request </div>
            </div>

            <div class="flex flex-col gap-4">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 relative bg-white dark:bg-dark-700 border border-style px-4 pt-4 pb-6 rounded-lg">
                    <div class="flex flex-col gap-4 items-center lg:flex-row lg:col-span-3">
                        <div class="relative">
                            <img src="images/fly.jpg" alt="avatar" class="w-12 h-12 rounded-full" />
                            <div class="absolute w-4 h-4 animate-pulse right-0 top-8 rounded-full border-2 border-white bg-green-500 dark:border-zinc-600"></div>
                        </div>
                        <div class="flex flex-col items-center lg:items-start">
                            <h3 class="text-sm font-medium title_color mb-1"> Ryanair </h3>
                            <h4 class="text-xs font-medium title_color"> All day </h4>
                        </div>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Destination </h3>
                        <h3 class="font-normal"> Paris </h3>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Hotel </h3>
                        <h3 class="font-normal"> Hotel Republique </h3>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Translotor </h3>
                        <h3 class="font-normal text-green-500 flex-center bg-green-200 w-14 h-8 rounded-2xl"> Yes </h3>
                    </div>
                    <div class="flex px-4 lg:px-0 lg:items-center lg:gap-4 lg:col-span-3 lg:justify-end">
                        <a href="#" class="h-10 w-full lg:w-auto lg:px-6 flex-center dark:font-medium text-purple-700 dark:text-indigo-400 dark:border-indigo-400 border border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"> Register </a>
                        <button class="absolute group top-4 right-3 lg:relative lg:top-0 lg:right-0 w-10 h-10 rounded-full bg-gray-200 flex-center text-gray-700 dark:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            <div class="hidden absolute lg:block right-0 bg-purple-700 text-white dark:bg-indigo-400 px-2 py-1 text-normal text-xs rounded-full flex-center opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible top-0 group-hover:-top-8"> Save </div>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 relative bg-white dark:bg-dark-700 border border-style px-4 pt-4 pb-6 rounded-lg">
                    <div class="flex flex-col gap-4 items-center lg:flex-row lg:col-span-3">
                        <div class="relative">
                            <img src="images/fly.jpg" alt="avatar" class="w-12 h-12 rounded-full" />
                            <div class="absolute w-4 h-4 animate-pulse right-0 top-8 rounded-full border-2 border-white bg-red-500 dark:border-zinc-600"></div>
                        </div>
                        <div class="flex flex-col items-center lg:items-start">
                            <h3 class="text-sm font-medium title_color mb-1"> Ryanair </h3>
                            <h4 class="text-xs font-medium title_color"> All day </h4>
                        </div>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Destination </h3>
                        <h3 class="font-normal"> Paris </h3>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Hotel </h3>
                        <h3 class="font-normal"> Hotel Republique </h3>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Translotor </h3>
                        <h3 class="font-normal text-red-500 flex-center bg-red-200 w-14 h-8 rounded-2xl"> No </h3>
                    </div>
                    <div class="flex px-4 lg:px-0 lg:items-center lg:gap-4 lg:col-span-3 lg:justify-end">
                        <a href="#" class="h-10 w-full lg:w-auto lg:px-6 flex-center dark:font-medium text-purple-700 border dark:text-indigo-400 dark:border-indigo-400 border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"> Register </a>
                        <button class="absolute group top-4 right-3 lg:relative lg:top-0 lg:right-0 w-10 h-10 rounded-full bg-gray-200 flex-center text-gray-700 dark:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            <div class="hidden absolute lg:block right-0 bg-purple-700 text-white dark:bg-indigo-400 px-2 py-1 text-normal text-xs rounded-full flex-center opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible top-0 group-hover:-top-8"> Save </div>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 relative bg-white dark:bg-dark-700 border border-style px-4 pt-4 pb-6 rounded-lg">
                    <div class="flex flex-col gap-4 items-center lg:flex-row lg:col-span-3">
                        <div class="relative">
                            <img src="images/fly.jpg" alt="avatar" class="w-12 h-12 rounded-full" />
                            <div class="absolute w-4 h-4 animate-pulse right-0 top-8 rounded-full border-2 border-white bg-green-500 dark:border-zinc-600"></div>
                        </div>
                        <div class="flex flex-col items-center lg:items-start">
                            <h3 class="text-sm font-medium title_color mb-1"> Ryanair </h3>
                            <h4 class="text-xs font-medium title_color"> All day </h4>
                        </div>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Destination </h3>
                        <h3 class="font-normal"> Paris </h3>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Hotel </h3>
                        <h3 class="font-normal"> Hotel Republique </h3>
                    </div>
                    <div class="flex items-center justify-between lg:justify-center title_color text-sm lg:col-span-2">
                        <h3 class="font-medium lg:hidden"> Translotor </h3>
                        <h3 class="font-normal text-green-500 flex-center bg-green-200 w-14 h-8 rounded-2xl"> Yes </h3>
                    </div>
                    <div class="flex px-4 lg:px-0 lg:items-center lg:gap-4 lg:col-span-3 lg:justify-end">
                        <a href="#" class="h-10 w-full lg:w-auto lg:px-6 flex-center dark:font-medium text-purple-700 border dark:text-indigo-400 dark:border-indigo-400 border-purple-700 rounded-lg hover:bg-purple-700 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white transition-colors"> Register </a>
                        <button class="absolute group top-4 right-3 lg:relative lg:top-0 lg:right-0 w-10 h-10 rounded-full bg-gray-200 flex-center text-gray-700 dark:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            <div class="hidden absolute lg:block right-0 bg-purple-700 text-white dark:bg-indigo-400 px-2 py-1 text-normal text-xs rounded-full flex-center opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible top-0 group-hover:-top-8"> Save </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlexTable