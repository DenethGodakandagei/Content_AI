import React from "react";

export const AIhistory = () => {
  return (
    <section className="aihistory sm:text-[22px] text-[16px]" id="aihistory">
      <div className="flex justify-center">
        <div className=" flex-items-center ">
          <div className="font-semibold">History Of AI</div>
        </div>
      </div>
      <div class="grid sm:grid-cols-5 gap-4 p-2">
        <div class="col-start-2 col-span-3 ">
          <div className=" text-gray-700 font-semibold">
            The concept of AI dates back to ancient myths and stories, but the
            modern development of AI can be traced to the mid-20th century. Here
            are some significant milestones in the history of AI :
          </div>
          <div className="pt-3">
            <ol className="list-decimal">
              <li>
                <span className="font-semibold">
                  Alan Turing's Test (1950):
                </span>{" "}
                British mathematician and computer scientist Alan Turing
                proposed the "Turing Test," which measures a machine's ability
                to exhibit intelligent behavior indistinguishable from that of a
                human.
              </li>
              <li>
                <span className="font-semibold">
                  The Dartmouth Workshop (1956):
                </span>{" "}
                Considered the birth of AI as a field, the Dartmouth workshop
                marked the formal establishment of AI research.
              </li>

              <li>
                <span className="font-semibold">Early AI Programs:</span> In the
                1950s and 1960s, researchers developed AI programs like the
                Logic Theorist and the General Problem Solver, demonstrating
                AI's potential.
              </li>
              <li>
                <span className="font-semibold">AI Winter:</span> In the 1970s
                and 1980s, AI research faced setbacks and funding reductions due
                to unmet expectations, leading to what was called "AI winter."
              </li>
              <li>
                <span className="font-semibold">Expert Systems (1980s):</span>{" "}
                During the AI winter, expert systems gained popularity, which
                were rule-based systems designed to mimic human expertise in
                specific domains.
              </li>
              <li>
                <span className="font-semibold">
                  Machine Learning (1990s and beyond):
                </span>{" "}
                AI research experienced a resurgence with the advancement of
                machine learning algorithms and computing power, allowing AI
                systems to learn from data and improve performance over time.
              </li>
              <li>
                <span className="font-semibold">
                  Deep Learning (2000s and beyond):{" "}
                </span>
                Deep learning, a subset of machine learning, involves artificial
                neural networks and has been responsible for significant
                advancements in AI, especially in areas like image and speech
                recognition.
              </li>
              <li>
                <span className="font-semibold">AI in the 21st Century: </span>
                AI has seen widespread adoption in various industries, including
                healthcare, finance, transportation, and entertainment.
                Autonomous vehicles, virtual assistants, and AI-powered chatbots
                are some notable examples.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
