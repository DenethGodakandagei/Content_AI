import React from 'react'
import { Link } from 'react-router-dom'
export const Navtabs = () => {
  return (
    <section className='bg-[#030620] sm:text-[22px] text-[16px] mb-5 rounded-b-[30px]'>
        <div className='flex justify-center'>
            <div className='flex flex-items-center '>
<div class=" font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700 pt-5">
    <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
            <Link to="/" class="inline-block p-4 text-blue-400  border-transparent border-b-2 border-blue-400 rounded-t-lg hover:bg-white focus:border-white  focus:text-blue-800  focus:bg-white">History Of AI</Link>
        </li>
        <li class="mr-2">
            <Link to="/Aican" class="inline-block p-4 text-blue-400  border-transparent border-b-2 border-blue-400 hover:bg-white focus:border-white rounded-t-lg  focus:text-blue-800 focus:bg-white">What AI Can Do</Link>
        </li>
        <li class="mr-2">
            <Link to="/Aihelps" class="inline-block p-4 text-blue-400  border-transparent border-b-2 border-blue-400 hover:bg-white focus:border-white rounded-t-lg focus:text-blue-800  focus:bg-white">How AI Helps Us</Link>
        </li>
        <li class="mr-2">
            <Link to="/Aiexample"class="inline-block p-4 text-blue-400  border-transparent border-b-2 border-blue-400 hover:bg-white focus:border-white rounded-t-lg focus:text-blue-800  focus:bg-white">Examples Of AI</Link>
        </li>
       
    </ul>
</div>
</div>
</div>

    </section>
  )
}
