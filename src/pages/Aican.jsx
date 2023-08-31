import React from "react";

export const Aican = () => {
  return (
    <section className="aican sm:text-[22px] text-[16px]" id="aican">
      <div className="flex justify-center">
        <div className=" flex-items-center ">
          <div className="font-semibold">What AI Can Do</div>
        </div>
      </div>
      <div class="grid sm:grid-cols-5 gap-4 p-2">
        <div class="col-start-2 col-span-3 ">
          <div className=" text-gray-700 font-semibold">
            AI has a wide range of capabilities, some of which include:
          </div>
          <div className="pt-3">
            <ol className="list-decimal">
              <li>
                <span className="font-semibold">Machine Learning:</span> AI can
                learn from data to recognize patterns, make predictions, and
                perform complex tasks without explicit programming.
              </li>
              <li>
                <span className="font-semibold">
                  Natural Language Processing (NLP):
                </span>
                AI can understand, interpret, and generate human language,
                enabling applications like chatbots, language translation, and
                sentiment analysis.
              </li>

              <li>
                <span className="font-semibold">Computer Vision:</span> AI can
                analyze and interpret visual data, making it possible for
                machines to recognize objects, faces, and even emotions from
                images and videos.
              </li>
              <li>
                <span className="font-semibold"> Robotics:</span> AI is used to
                control robots, allowing them to perform tasks in industrial
                settings, healthcare, and exploration.
              </li>
              <li>
                <span className="font-semibold">Recommendation Systems:</span>{" "}
                AI-powered recommendation engines suggest products, movies, or
                content based on user preferences and behavior.
              </li>
              <li>
                <span className="font-semibold">Gaming:</span> AI can compete
                with humans in complex games, such as chess and Go, and it can
                also be used to create intelligent non-player characters (NPCs)
                in video games.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
