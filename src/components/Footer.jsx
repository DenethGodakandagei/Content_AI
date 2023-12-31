import React from 'react'

export const Footer = () => {
  return (
    <section>
        <footer class=" bottom-0 left-0 z-40 w-full p-4  shadow md:flex md:items-center md:justify-between md:p-6 bg-[#030620]  dark:border-gray-600">
    <span class="text-sm text-white sm:text-center dark:text-white-400">© 2023 <a href="" class="hover:underline">Luminascript</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
    </section>
  )
}
