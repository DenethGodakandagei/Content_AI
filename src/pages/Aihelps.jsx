import React from 'react'

export const Aihelps = () => {
  return (
    <section className="aihelps sm:text-[22px] text-[16px]" id="aihelps">
    <div className="flex justify-center">
      <div className=" flex-items-center ">
        <div className="font-semibold">How AI helps us</div>
      </div>
    </div>
    <div class="grid sm:grid-cols-5 gap-4 p-2">
      <div class="col-start-2 col-span-3 ">
        <div className=" text-gray-700 font-semibold">
        AI has numerous applications that benefit society and improve various aspects of our lives, including:
        </div>
        <div className="pt-3">
          <ol className="list-decimal">
            <li>
              <span className="font-semibold">Efficiency and Automation:</span>  AI automates repetitive tasks, streamlining workflows, and increasing productivity.
            </li>
            <li>
              <span className="font-semibold">
              Personalization:
              </span>
               AI-powered recommendation systems and personalized content delivery enhance user experiences.
            </li>

            <li>
              <span className="font-semibold">Healthcare:</span> AI aids in medical diagnosis, drug discovery, and personalized treatment plans.
            </li>
            <li>
              <span className="font-semibold">Transportation: </span>AI contributes to the development of autonomous vehicles, optimizing traffic management, and improving transportation safety.
            </li>
            <li>
              <span className="font-semibold">Education: </span>{" "}
              AI is used for personalized learning, intelligent tutoring systems, and automating administrative tasks.
            </li>
            <li>
              <span className="font-semibold">Security:</span>  AI helps in detecting and preventing cybersecurity threats and fraudulent activities.
            </li>
            <li>
              <span className="font-semibold">Environmental Impact:</span>  AI is applied in environmental monitoring and resource management to address ecological challenges.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  )
}
