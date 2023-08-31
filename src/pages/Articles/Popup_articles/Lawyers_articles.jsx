import React from "react";
import Popup from "reactjs-popup";
import logo from "./logo/logo.png";

export const Lawyers_articles = () => {
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
                      Transforming Legal Practice: The Impact of AI on Lawyers
                    </div>
                  </div>
                </div>
                <div class="grid sm:grid-cols-5 gap-4 p-2">
                  <div class="col-start-2 col-span-3 ">
                    <div className=" text-gray-700 font-semibold">
                      The legal profession is characterized by its complexity,
                      vast amounts of data, and the need for precise and timely
                      information. With the advent of Artificial Intelligence
                      (AI), lawyers have gained access to innovative tools and
                      technologies that significantly enhance their efficiency,
                      accuracy, and decision-making. In this article, we will
                      explore how AI is revolutionizing the legal practice,
                      empowering lawyers with valuable insights and
                      transformative solutions.
                    </div>
                    <div className="pt-3">
                      <dl>
                        <li className="text-red-600">
                          Legal Research and Case Analysis
                        </li>
                        <p className="p-2 m-3">
                          AI-powered legal research tools can analyze vast
                          databases of case law, statutes, and legal opinions,
                          significantly expediting the research process. By
                          extracting relevant information and identifying
                          relevant precedents, AI enables lawyers to gain a
                          comprehensive understanding of legal issues and make
                          well-informed decisions for their clients.
                        </p>
                        <li className="text-red-600">
                          Contract Analysis and Review
                        </li>
                        <p className="p-2 m-3">
                          AI-driven contract analysis tools can automatically
                          review and extract key terms and clauses from complex
                          legal documents. These tools help lawyers streamline
                          contract review processes, reducing manual labor and
                          potential oversights. AI can also identify potential
                          risks and discrepancies, ensuring contracts are
                          accurate and compliant.
                        </p>
                        <li className="text-red-600">
                          Predictive Analytics and Case Outcomes
                        </li>
                        <p className="p-2 m-3">
                          AI's predictive capabilities allow lawyers to assess
                          the potential outcomes of legal cases based on
                          historical data and precedent. By analyzing vast
                          amounts of case information, AI can offer insights
                          into how similar cases were decided, helping lawyers
                          make strategic decisions and develop effective legal
                          strategies.
                        </p>
                        <li className="text-red-600">
                          Legal Document Generation
                        </li>
                        <p className="p-2 m-3">
                          AI-powered document generation tools can create legal
                          documents, such as pleadings, briefs, and letters,
                          based on predefined templates and client-specific
                          information. This automation streamlines
                          administrative tasks, enabling lawyers to focus on
                          more complex legal matters and providing clients with
                          faster service.
                        </p>
                        <li className="text-red-600">
                          Due Diligence and Compliance
                        </li>
                        <p className="p-2 m-3">
                          AI assists lawyers in conducting due diligence and
                          ensuring regulatory compliance. AI-driven systems can
                          scan vast amounts of data, identifying potential risks
                          and red flags in business transactions. This helps
                          lawyers provide thorough assessments and helps clients
                          make informed business decisions.
                        </p>
                        <li className="text-red-600">
                          Legal Chatbots and Client Support
                        </li>
                        <p className="p-2 m-3">
                          AI-powered legal chatbots provide instant responses to
                          common legal queries from clients. These chatbots can
                          offer general legal information, appointment
                          scheduling, and initial guidance, enhancing client
                          support and ensuring prompt communication.
                        </p>
                        <li className="text-red-600">
                          E-Discovery and Data Management
                        </li>
                        <p className="p-2 m-3">
                          AI has transformed the process of e-discovery by
                          efficiently scanning and categorizing electronic data,
                          including emails, documents, and electronic
                          communications. AI-driven e-discovery tools can
                          identify relevant evidence and reduce the time and
                          cost associated with manual data review during
                          litigation.
                        </p>
                      </dl>
                    </div>
                    <div className=" text-black-700 font-semibold">
                      <span className="text-red-600">Conclusion </span> <br />
                      AI has become a game-changer for lawyers, empowering them
                      with tools that optimize their workflows, improve
                      decision-making, and enhance client services. From legal
                      research and case analysis to contract review, predictive
                      analytics, and legal document generation, AI's impact on
                      the legal profession is profound and transformative.<br />
                      However, it is crucial to recognize that AI is a
                      complementary tool, and the expertise and judgment of
                      lawyers remain irreplaceable. The human touch in the legal
                      practice ensures that clients receive personalized
                      attention, strategic counsel, and the highest standard of
                      ethical representation. <br />As AI technology continues to
                      advance, lawyers must embrace these innovations and adapt
                      their skills accordingly. By harnessing the power of AI
                      intelligently, lawyers can achieve greater efficiency,
                      accuracy, and effectiveness in their legal practice. The
                      synergy between human legal expertise and AI-driven
                      efficiency promises a future where legal services are more
                      accessible, responsive, and innovative, ultimately
                      benefitting clients and advancing the administration of
                      justice.
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
