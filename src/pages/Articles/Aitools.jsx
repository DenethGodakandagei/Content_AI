import React from 'react'
import { Aitool_data } from './Data/Aitool_data'
export const Aitools = () => {
  return (
    <section className="aican sm:text-[22px] text-[16px]" id="aican">
    <div className="flex justify-center">
      <div className=" flex-items-center ">
        <div className="font-semibold">2023 Best AI Tools </div>
      </div>
    </div>
    <div class="grid sm:grid-cols-5 gap-4 p-2">
      <div class="col-start-2 col-span-3 ">
       
        <div className="pt-3 m-3">
          <ol className="list-decimal">
          {Aitool_data.map((item) => (
               <li>
               <span className="font-semibold text-red-400">{item.topic}</span><br/>{item.description}
             </li>
               ))} 
          </ol>
        </div>
      </div>
    </div>
  </section>
  )
}
