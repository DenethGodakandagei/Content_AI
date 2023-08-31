import React from 'react'
import { Aieffects_data } from './Data/Aieffects'
export const Aieffects = () => {
  return (
    <section className="Growknowledge sm:text-[22px] text-[16px]" id="Growknowledge">
   
    <div class="grid sm:grid-cols-5 gap-4 p-2">
      <div class="col-start-2 col-span-3 ">
        <div className=" text-gray-700 font-semibold">
        Artificial intelligence (AI) has already been making significant impacts across various industries and aspects of our lives. These effects are likely to have continued and possibly even intensified by the current date in 2023. Here are some of the notable effects of AI:
        </div>
        <div className="pt-3 m-3">
          <ol className="list-decimal">
          {Aieffects_data.map((item) => (
               <li>
               <span className="font-semibold text-red-400">{item.topic}</span>{item.description}
             </li>
               ))} 
          </ol>
        </div>
      </div>
    </div>
  </section>
  )
}
