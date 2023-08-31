import React from 'react'
import { Growknowledgedata } from './Data/Growknowladge'

export const Growknowledge = () => {
  return (
    <section className="Growknowledge sm:text-[22px] text-[16px]" id="Growknowledge">
   
    <div class="grid sm:grid-cols-5 gap-4 p-2">
      <div class="col-start-2 col-span-3 ">
        <div className=" text-gray-700 font-semibold">
        Growing knowledge with AI can be a powerful and effective way to stay informed, learn new things, and enhance your understanding of various subjects. Here are some strategies to leverage AI for knowledge growth:
        </div>
        <div className="pt-3 m-3">
          <ol className="list-decimal">
          {Growknowledgedata.map((item) => (
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
