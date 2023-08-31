import React from 'react'

const Ainews = () => {
  return (
    <section className='news  sm:text-[22px] text-[16px] bg-[#030720] text-white rounded-t-[30px] pt-5' id='news'>
        <div className="flex justify-center">
        <div className=" flex-items-center ">
          <div className="font-semibold">TOP AI COMPANIES TO KNOW</div>
        </div>
      </div>
      <div class="grid sm:grid-cols-5 gap-4 p-2">
        <div class="col-start-3 col-span-3 ">
          <div className="pt-3">
            <ol className="list-disc">
              <li>IBM</li>
              <li> Google</li>
              <li>Amazon</li>
              <li>People.ai</li>
              <li>AlphaSense</li>
              <li>NVIDIA</li>
              <li>DataRobot</li>
              <li>OpenAI</li>
              <li>Clarifai</li>
            </ol>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Ainews