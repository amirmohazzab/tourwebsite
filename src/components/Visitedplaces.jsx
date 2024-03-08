import React from 'react'
import VisitedSwiper from './VisitedSwiper'

const Visitedplaces = () => {
  return (
    <div class="grid grid-cols-1 p-4 lg:grid-cols-4 lg:gap-4 lg:container">
      <div class="flex justify-between items-end px-4">
        <div className="flex flex-col gap-1 text-gray-600 font-medium lg:justify-center lg:items-center lg:gap-4 lg:w-full lg:h-full">
          <h3 class="text-base lg:text-2xl "> popular places </h3>
          <h3 class="text-sm lg:text-xl"> Entertainment tours </h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="hidden w-24 h-24 lg:block text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <a href="#" className='flex lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </a>
      </div>
      <div class="py-8 lg:col-span-3">
        <VisitedSwiper />
      </div>
    </div>
  )
}

export default Visitedplaces
