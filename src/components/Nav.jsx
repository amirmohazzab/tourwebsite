import React, {useState} from 'react'

const Nav = () => {

  const [openin, setOpenIn] = useState(false);
  const [openout, setOpenOut] = useState(false);

  return (
    <nav class="h-14 w-full bg-white border-b border-style shadow-lg">
      <section class="container h-full flex justify-between items-center">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 sm:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> 
        
        <ul class="hidden list-none sm:flex items-center gap-4">
          <li>
              <a href="" class="text-sm font-medium text-gray-700"> Home</a>
          </li>

          <li class="relative">
            <div class="flex items-center gap-2 cursor-pointer">
              <span class="text-sm font-medium text-gray-700" onClick={() => setOpenIn(!openin)}> inside tours </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${openin ? 'rotate-180' : ''} w-4 h-4 costum-transition`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <ul className={`${openin ? 'flex' : 'hidden'} list-none flex-col absolute left-0 top-8 bg-white rounded-lg border border-style w-40 z-10`}>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex"> kish tour </a>
              </li>
              <li className='relative group'>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex justify-between items-center">
                    <span> mountain tour </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 costum-transition">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                  <ul className="group-hover:flex hidden list-none flex-col absolute left-full top-0 bg-white rounded-lg border border-style w-40 z-10">
                    <li>
                        <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex costum-transition"> Alp mountain </a>
                    </li>
                    <li>
                        <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex justify-between items-center costum-transition">
                          <span> Himalaya mountain </span>
                        </a>
                    </li>
                    <li>
                        <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex costum-transition"> alborz mountain </a>
                    </li>
                  </ul>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex"> gheshm tour </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex"> isfahan tour </a>
              </li>
            </ul>
          </li>

          <li class="relative">
            <div class="flex items-center gap-2 cursor-pointer">
              <span class="text-sm font-medium text-gray-700" onClick={() => setOpenOut(!openout)}> outside tours </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${openout ? 'rotate-180' : ''} w-4 h-4 costum-transition`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <ul className={`${openout ? 'flex' : 'hidden'} list-none flex-col absolute left-0 top-8 bg-white rounded-lg border border-style w-40 z-10`}>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex"> Austria tour </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex justify-between items-center">
                    <span> Italy tour </span>
                  </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex"> Switzerland tour </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 flex"> Germany tour </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="" class="text-sm font-medium text-gray-700"> Magazine </a>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-4">
          <div class="w-10 h-10 flex-center rounded-full hover:shadow-lg cursor-pointer transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>  
          </div>
                
          <a href=''>
            <img src="images/photo.jpg" class="w-8 h-8 flex-center rounded-full hover:shadow-lg cursor-pointer costum-transition"/>
          </a>
        </div>
      </section>
    </nav>
  )
}

export default Nav
