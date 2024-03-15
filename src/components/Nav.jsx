import React, {useContext, useState, useEffect} from 'react'
import { TourContext } from '../Context';

const Nav = () => {

  const [openin, setOpenIn] = useState(false);
  const [openout, setOpenOut] = useState(false);
  const [openMountain, setOpenMountain] = useState(false)
  const {openHamburger, setOpenHamburger, handleThemeSwitch, theme} = useContext(TourContext);


  const handleOpenIn = () => {
      setOpenIn(!openin);
      if (openMountain === true) setOpenMountain(!openMountain);
      if (openout === true) setOpenOut(!openout);
  }

  const handleOpenMountain = () => {
    setOpenMountain(!openMountain);
    if (openout === true ) setOpenOut(!openout);
  }

  const handleOpenOut = () => {
    setOpenOut(!openout);
    if (openin === true) setOpenIn(!openin);
    if (openMountain === true) setOpenMountain(!openMountain);
  }

 
  return (
    <>
      <nav class="h-14 w-full bg-white dark:bg-dark-800 border-b border-style shadow-lg">
      <section class="container h-full flex justify-between items-center">
        <div>
            <svg onClick={() => setOpenHamburger(!openHamburger)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer title_color sm:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> 
        <ul class="hidden list-none sm:flex items-center gap-4">
          <li>
              <a href="" class="text-sm font-medium title_color"> Home</a>
          </li>

          <li class="relative">
            <div class="flex items-center gap-2 cursor-pointer">
              <span class="text-sm font-medium title_color" onClick={() => setOpenIn(!openin)}> Inside tours </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${openin ? 'rotate-180' : ''} w-4 h-4 costum-transition title_color`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <ul className={`${openin ? 'flex' : 'hidden'} list-none flex-col absolute left-0 top-8 title_color bg-white dark:bg-dark-800 rounded-lg border border-style w-40 z-10`}>
              <li>
                  <a href="" class="p-2 text-sm font-medium title_color hover:bg-gray-100 dark:hover:bg-zinc-700  dark:hover:text-indigo-400 flex"> kish tour </a>
              </li>
              <li className='relative group'>
                  <a href="" class="p-2 text-sm font-medium title_color hover:bg-gray-100 dark:hover:bg-zinc-700  dark:hover:text-indigo-400 flex justify-between items-center">
                    <span> mountain tour </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 costum-transition">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                  <ul className="group-hover:flex hidden list-none flex-col absolute left-full top-0 bg-white dark:bg-dark-800 rounded-lg border border-style w-40 z-10">
                    <li>
                        <a href="" class="p-2 text-sm font-medium title_color hover:bg-gray-100 dark:hover:bg-zinc-700  dark:hover:text-indigo-400 flex costum-transition"> Alp mountain </a>
                    </li>
                    <li>
                        <a href="" class="p-2 text-sm font-medium title_color hover:bg-gray-100 dark:hover:bg-zinc-700  dark:hover:text-indigo-400 flex justify-between items-center costum-transition">
                          <span> Himalaya mountain </span>
                        </a>
                    </li>
                    <li>
                        <a href="" class="p-2 text-sm font-medium title_color hover:bg-gray-100 dark:hover:bg-zinc-700 dark:hover:text-indigo-400 flex costum-transition"> alborz mountain </a>
                    </li>
                  </ul>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium title_color hover:bg-gray-100 dark:hover:bg-zinc-700  dark:hover:text-indigo-400 flex"> gheshm tour </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium title_color hover:bg-gray-100 dark:hover:bg-zinc-700  dark:hover:text-indigo-400 flex"> isfahan tour </a>
              </li>
            </ul>
          </li>

          <li class="relative">
            <div class="flex items-center gap-2 cursor-pointer">
              <span class="text-sm font-medium title_color" onClick={() => setOpenOut(!openout)}> Outside tours </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${openout ? 'rotate-180' : ''} w-4 h-4 costum-transition title_color`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <ul className={`${openout ? 'flex' : 'hidden'} list-none flex-col absolute left-0 top-8 bg-white dark:bg-dark-800 rounded-lg border border-style w-40 z-10`}>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-zinc-700 hover:bg-gray-100  dark:hover:text-indigo-400 flex"> Austria tour </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-zinc-700 hover:bg-gray-100  dark:hover:text-indigo-400 flex justify-between items-center">
                    <span> Italy tour </span>
                  </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-zinc-700 hover:bg-gray-100  dark:hover:text-indigo-400 flex"> Switzerland tour </a>
              </li>
              <li>
                  <a href="" class="p-2 text-sm font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-zinc-700 hover:bg-gray-100  dark:hover:text-indigo-400 flex"> Germany tour </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="" class="text-sm font-medium title_color"> Magazine </a>
          </li>
          <li>
            <a href="" class="text-sm font-medium title_color"> Honors </a>
          </li>
        </ul>
      </div>
      
      <div class="flex items-center gap-4">
          <div class="w-10 h-10 flex-center rounded-full hover:shadow-lg cursor-pointer transition-shadow">
            {
              theme === "light" ? 
              (
                <svg onClick={handleThemeSwitch} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-wiggle">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              ) : 
              (
                <svg onClick={handleThemeSwitch} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-wiggle text-yellow-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              )
            }
          </div>

          <a href=''>
            <img src="images/photo.jpg" class="w-8 h-8 flex-center rounded-full hover:shadow-lg cursor-pointer costum-transition"/>
          </a>
      </div>
      </section>
      </nav>

      {
        openHamburger ?
        (
          <div class="fixed inset-0 bg-gray-900 bg-opacity-60 z-10 backdrop-blur-sm"></div>
        ) : ""
      }

      <div class={`fixed inset-y-0 left-0 right-auto transition-all overflow-hidden ${openHamburger ? 'w-64' : 'w-0'} z-20 bg-gray-100 dark:bg-gray-800`}>
              <div onClick={() => setOpenHamburger(!openHamburger)} class="flex justify-end cursor-pointer pr-2 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 title_color">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
              <div class="p-4 flex flex-col text-base font-medium text-gray-700 gap-4">
                <a href="" class="title_color dark:hover:text-indigo-400"> Home </a>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between text-gray-700 cursor-pointer">
                    <span onClick={handleOpenIn} class="title_color dark:hover:text-indigo-400"> Inside Tours </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${openin ? 'transition-all rotate-90' : ''} w-4 h-4 title_color`}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  <div class={`${openin ? 'flex' : 'hidden'} transition-all pl-4 flex-col gap-4`}>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Kish Tour </a>
                      <div class="flex items-center justify-between">
                        <span onClick={handleOpenMountain} class="cursor-pointer title_color dark:hover:text-indigo-400"> Mountain Tours </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${openMountain ? 'transition-all rotate-90' : ''} w-4 h-4 title_color`}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                      <div class={`${openMountain ? 'flex' : 'hidden'} transition-all pl-4 flex-col gap-4`}>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Alp Mountain </a>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Himalaya Mountain </a>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Alborz Mountain </a>
                  </div>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Gheshm Tour </a>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Isfahan Tour </a>
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between text-gray-700 cursor-pointer">
                    <span onClick={handleOpenOut} class="title_color dark:hover:text-indigo-400"> Outside Tours </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${openout ? 'transition-all rotate-90' : ''} w-4 h-4 title_color`}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  <div class={`${openout ? 'flex' : 'hidden'} transition-all pl-4 flex-col gap-4`}>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Austria Tour </a>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Italy Tour </a>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Switzerland Tour </a>
                      <a href="#" class="title_color dark:hover:text-indigo-400"> Germany Tour </a>
                  </div>
                </div>
                <a href="" class="title_color dark:hover:text-indigo-400"> Magazine </a>
                <a href="" class="title_color dark:hover:text-indigo-400"> Honors </a>
              </div>
      </div>
    </>
    
  )
}

export default Nav
