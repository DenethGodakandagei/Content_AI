import React from 'react'

export const Aiexample = () => {
  return (
    <section className="aiexample sm:text-[22px] text-[16px]" id="aiexample">
    <div className="flex justify-center">
      <div className=" flex-items-center ">
        <div className="font-semibold">Examples of AI:</div>
      </div>
    </div>
    <div class="grid sm:grid-cols-5 gap-4 p-2">
      <div class="col-start-2 col-span-3 ">
        
        <div className="pt-3">
          <ol className="list-decimal">
            <li>
              <span className="font-semibold">Virtual Assistants:</span>Siri, Google Assistant, and Amazon's Alexa are popular AI-powered virtual assistants that can answer questions, perform tasks, and control smart devices.
            </li>
            <li>
              <span className="font-semibold">
              Recommendation Systems:
              </span>
               Streaming platforms like Netflix and music services like Spotify use AI to suggest content based on users' viewing and listening histories.
            </li>

            <li>
              <span className="font-semibold">Autonomous Vehicles: </span>Companies like Tesla are developing self-driving cars that use AI algorithms to navigate and make driving decisions.
            </li>
            <li>
              <span className="font-semibold">Medical Diagnosis: </span>AI algorithms assist doctors in diagnosing diseases and analyzing medical images like X-rays and MRIs.
            </li>
            <li>
              <span className="font-semibold">Chatbots:</span> Customer support chatbots provide instant assistance on websites, saving time and resources.
            </li>
            <li>
              <span className="font-semibold">Natural Language Processing: </span> Language translation services like Google Translate rely on AI-based NLP algorithms.
            </li>
            <li>
              <span className="font-semibold">Image and Video Analysis:</span>  Social media platforms use AI to identify and tag people in photos, and AI is used in surveillance systems for security purposes.


            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  )
}
