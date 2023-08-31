import React from "react";
import img1 from "../assets/images/Images/1.svg";
import img2 from "../assets/images/Images/2.svg";
import img3 from "../assets/images/Images/3.svg";
import img4 from "../assets/images/Images/4.svg";
import img5 from "../assets/images/Images/5.svg";
import img6 from "../assets/images/Images/6.svg";
import img7 from "../assets/images/Images/7.svg";
import img8 from "../assets/images/Images/8.svg";
import img9 from "../assets/images/Images/9.svg";
import img10 from "../assets/images/Images/10.svg";
import img11 from "../assets/images/Images/11.svg";
import img12 from "../assets/images/Images/12.svg";
import { Webdesigners_articles } from "../pages/Articles/Popup_articles/Webdesigners_articles";
import { Digitalmarketing_article } from "../pages/Articles/Popup_articles/Digitalmarketing_article";
import { Contentwriters_article } from "../pages/Articles/Popup_articles/Contentwriters_article";
import { Graphicdesigner_article } from "../pages/Articles/Popup_articles/Graphicdesigner_article";
import { Doctors_article } from "../pages/Articles/Popup_articles/Doctors_article";
import { Engineers_articles } from "../pages/Articles/Popup_articles/Engineers_articles";
import { Traders_article } from "../pages/Articles/Popup_articles/Traders_article";
import { ScientistsReachers_article } from "../pages/Articles/Popup_articles/ScientistsReachers_article";
import { Students_articles } from "../pages/Articles/Popup_articles/Students_articles";
import { Lawyers_articles } from "../pages/Articles/Popup_articles/Lawyers_articles";
import { Cybersecurity_article } from "../pages/Articles/Popup_articles/Cybersecurity_article";
import { Accountants_article } from "../pages/Articles/Popup_articles/Accountants_article";

export const Aifor_people = () => {
  return (
    <section className="Aitohumen" id="Aitohumen">
      <div class="container my-12 mx-auto px-4 md:px-12">
        <h1 class="text-3xl lg:text-4xl text-[#030620] font-extrabold text-center p-6">
          AI To Humen
        </h1>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img1} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Web Designers
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                {" "}
                AI-driven personalization enhances user experiences by analyzing
                behavior data, leading to optimized layouts and visually
                appealing designs.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                 <Webdesigners_articles />
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img2} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Digital Marketing Specialists
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                {" "}
                AI analyzes data, identifies trends, and tailors content to
                target audiences, resulting in more effective campaigns and
                higher engagement rates.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                 <Digitalmarketing_article />
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img3} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Content Writers
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                {" "}
                AI suggests topics, streamlines writing with SEO optimization,
                proofreading, and research support, ultimately enhancing content
                quality and productivity.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Contentwriters_article />
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img4} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Graphic Designer
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                AI automates repetitive design tasks, allowing designers to
                focus on creativity and strategy, resulting in more efficient
                and diverse designs.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Graphicdesigner_article />
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img5} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold "
                    href="#"
                  >
                    AI For Doctors
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3  ">
                AI aids medical diagnosis by analyzing patient data and images,
                and suggests personalized treatment plans based on medical
                history and genetics.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Doctors_article />
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img6} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Engineers
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3 ">
                AI simulates complex scenarios, automates repetitive tasks, and
                enhances design iterations, streamlining engineering processes
                and improving outcomes.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Engineers_articles />
              </div>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img7} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Traders
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                {" "}
                AI analyzes market data and sentiment to make real-time trading
                decisions, improving accuracy and responsiveness in dynamic
                markets.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Traders_article />
              </div>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img8} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Scientists and Researchers
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                {" "}
                AI accelerates research by analyzing vast datasets, recognizing
                patterns, and aiding in drug discovery and climate modeling.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <ScientistsReachers_article />
              </div>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={img9} />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Students
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                AI provides personalized learning, adaptive assessments, and
                feedback, enabling students to grasp concepts more effectively
                and track their progress.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Students_articles />
              </div>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={img10}
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Lawyers
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                AI conducts legal research, analyzes precedents, and offers
                relevant insights, enhancing case preparation and client
                representation
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Lawyers_articles />
              </div>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={img11}
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Cybersecurity Experts
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                AI monitors networks, detects cyber threats, and responds
                rapidly, bolstering cybersecurity defenses and safeguarding
                against attacks.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Cybersecurity_article />
              </div>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={img12}
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-red-600 text-2xl font-semibold"
                    href="#"
                  >
                    AI For Accountants
                  </a>
                </h1>
              </header>
              <div className="flex flex-wrap   justify-center m-3">
                AI automates financial processes, from data entry to anomaly
                detection, improving efficiency and providing valuable insights
                for better financial management.
              </div>
              <div className="button flex flex-wrap   justify-end p-4">
                <Accountants_article />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
