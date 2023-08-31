import React from "react";
import Popup from "reactjs-popup";
import logo from "./logo/logo.png";

export const Students_articles = () => {
  return (
    <section>
      <Popup
        trigger={
          <button className="border border-solid border-blue-400 p-1 m-1 text-blue-400 rounded">
            VIEW DETAILS
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal overlay">
            <div className="m-[30px] sm:m-10px">
              <header>
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={logo}
                      style={{ width: "30px", height: "30px" }}
                      className="mt-5"
                    />
                    <span className="mt-6 text-[#030720]">LUMINA SCRIPT</span>
                  </div>
                  <div className="flex justify-between">
                    <button
                      className="bg-red-600 hover:bg-red-500 text-white font-bold  rounded focus:outline-none focus:shadow-outline w-[18x] h-[18px] mt-5"
                      onClick={() => close()}
                    >
                      <svg
                        class="h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <hr />
              </header>
              <section className=" sm:text-[22px] text-[16px]">
                <div className="flex justify-center">
                  <div className=" flex-items-center ">
                    <div className="font-semibold text-red-600 p-3">
                    AI in Education: Empowering Students for a Brighter Future
                    </div>
                  </div>
                </div>
                <div class="grid sm:grid-cols-5 gap-4 p-2">
                  <div class="col-start-2 col-span-3 ">
                    <div className=" text-gray-700 font-semibold">
                      In the era of technological advancements, Artificial
                      Intelligence (AI) has emerged as a powerful tool
                      transforming various aspects of our lives, including
                      education. AI offers a multitude of opportunities to
                      enhance the learning experience for students, empowering
                      them with personalized and adaptive learning solutions. In
                      this article, we will explore how AI can revolutionize
                      education, catering to individual needs, fostering
                      engagement, and nurturing a generation of lifelong
                      learners.
                    </div>
                    <div className="pt-3">
                      <dl>
                        <li className="text-red-600">
                          Personalized Learning Paths
                        </li>
                        <p className="p-2 m-3">
                          One of the most significant advantages of AI in
                          education is its ability to personalize learning paths
                          for students. AI-powered adaptive learning platforms
                          can assess each student's strengths, weaknesses, and
                          learning styles, tailoring educational content to meet
                          their unique needs. This personalized approach ensures
                          that students progress at their own pace, boosting
                          their confidence and motivation.
                        </p>
                        <li className="text-red-600">
                          Intelligent Tutoring Systems
                        </li>
                        <p className="p-2 m-3">
                          AI-driven intelligent tutoring systems act as virtual
                          mentors, providing instant feedback and guidance to
                          students as they tackle various learning tasks. These
                          systems can identify areas where students struggle and
                          offer targeted assistance, addressing misconceptions
                          and reinforcing concepts to promote deeper
                          understanding.
                        </p>
                        <li className="text-red-600">
                          Automated Grading and Feedback
                        </li>
                        <p className="p-2 m-3">
                          AI streamlines the process of grading assignments,
                          quizzes, and exams, saving teachers valuable time and
                          effort. AI-based grading systems use sophisticated
                          algorithms to evaluate student work accurately,
                          providing timely feedback to help students track their
                          progress and make improvements.
                        </p>
                        <li className="text-red-600">
                          Content Recommendations and Enrichment
                        </li>
                        <p className="p-2 m-3">
                          AI can analyze student performance data to recommend
                          additional learning resources and enrichment
                          materials. By offering relevant books, articles,
                          videos, and interactive content, AI encourages
                          students to explore beyond the curriculum, nurturing
                          their curiosity and passion for learning.
                        </p>
                        <li className="text-red-600">
                          Virtual Classrooms and Online Learning
                        </li>
                        <p className="p-2 m-3">
                          The pandemic highlighted the importance of virtual
                          classrooms and online learning platforms. AI-powered
                          virtual classrooms facilitate interactive learning
                          experiences, where students can engage with multimedia
                          content, collaborate with peers, and participate in
                          group discussions. AI also assists teachers in
                          monitoring students' participation and engagement in
                          online classes.
                        </p>
                        <li className="text-red-600">
                          Educational Games and Gamification
                        </li>
                        <p className="p-2 m-3">
                          AI-driven educational games and gamification
                          techniques make learning fun and engaging for
                          students. By incorporating game-like elements into
                          educational activities, AI motivates students to
                          actively participate and persist in challenging tasks,
                          fostering a positive and enjoyable learning
                          environment.
                        </p>
                        <li className="text-red-600">
                          Early Intervention and Support
                        </li>
                        <p className="p-2 m-3">
                          AI can detect early signs of learning difficulties or
                          academic challenges, allowing teachers and parents to
                          intervene promptly. By analyzing student data and
                          performance patterns, AI enables early identification
                          of potential learning gaps, enabling targeted support
                          and intervention strategies.
                        </p>
                      </dl>
                    </div>
                    <div className=" text-black-700 font-semibold">
                      <span className="text-red-600">Conclusion </span> <br />
                      AI has emerged as a transformative force in education,
                      revolutionizing the way students learn, engage, and
                      succeed. From personalized learning paths and intelligent
                      tutoring systems to automated grading and gamified
                      learning experiences, AI's impact on education is profound
                      and far-reaching. <br />However, it is essential to recognize
                      that AI is a complement to traditional teaching methods,
                      and the role of teachers as mentors and facilitators
                      remains pivotal in the learning process. The human touch
                      in education fosters meaningful connections, mentorship,
                      and social-emotional growth, essential aspects that AI
                      cannot fully replace.<br /> As AI technology continues to
                      evolve, educators and students must embrace these
                      innovations and adapt their skills accordingly. By
                      harnessing the power of AI intelligently, education can
                      become more inclusive, efficient, and student-centered.
                      The synergy between AI-driven efficiency and human
                      creativity promises a future where students are empowered
                      to unlock their full potential, becoming lifelong learners
                      equipped to thrive in an ever-changing world.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </Popup>
    </section>
  );
};
