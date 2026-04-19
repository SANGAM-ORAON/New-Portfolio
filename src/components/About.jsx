import React from "react";

const About = () => {
  return (
    <>
    <section id="about">
      <h2 className="text-6xl sm:text-3xl md:text-9xl font-semibold font-[naam] h-auto w-auto flex justify-center py-20 hover:line-through">
          ABOUT
        </h2>
      <div className="bg-black text-blue-50 ">
        <div className="px-5 py-5 text-gray-500">
          {/* Top */}
          <div className="flex justify-between ">
            <div>
              <h3 className="text-[#7b2cbf] font-[about] md:text-4xl font-bold pb-3">
                PROJECTS
              </h3>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                PORTFOLIO WEBSITE
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                COCKTAILS WEBSITE
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                AGENCY WEBSITE
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                AUTHENTICATION SYSTEM
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">SNAKE GAME</p>
            </div>
            <div className="text-end">
              <h3 className="text-[#7b2cbf] font-[about] md:text-4xl font-bold pb-3">
                EDUCATION
              </h3>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                GOSSNER COLLEGE <br />
                GRADUATION
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                DAV PUBLIC SCHOOL <br />
                INTER
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                DAV PUBLIC SCHOOL <br />
                MATRIC
              </p>
            </div>
          </div>
          {/* Top End */}

         <div className="h-full">
           <div className="bg-[url('./images/about.png')] w-full bg-contain bg-center bg-no-repeat h-96 "></div>
         </div>

          {/* Bottom */}
          <div className="flex justify-between pt-10">
            <div>
              <h3 className="text-[#7b2cbf] font-[about] md:text-4xl font-bold pb-3">
                SKILLS
              </h3>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                LANGUAGE :- JavaScript
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                FRONTEND :- HTML, CSS, React.js, Tailwind CSS
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                BACKEND :- Node.js, Express.js
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                DATABASE :- MongoDB
              </p>
              <p className="text-xs md:text-xl font-[about-text] py-2">
                TOOLS :- Git, GitHub, Figma, VS Code
              </p>
            </div>
            <div className="text-end">
              <h3 className="text-[#7b2cbf] font-[about] md:text-4xl font-bold pb-3">
                INTERNSHIPS
              </h3>
              <p className="text-xs md:text-xl font-[about-text] py-2">ZIVAAN</p>
              <p className="text-xs md:text-xl font-[about-text] py-2">BSPL</p>
              <br />
              <h3 className="text-[#7b2cbf] font-[about] md:text-4xl font-bold pb-3">
                LANGUAGES
              </h3>
              <p className="text-xs md:text-xl font-[about-text] py-2">ENGLISH</p>
              <p className="text-xs md:text-xl font-[about-text] py-2">HINDI</p>
            </div>
          </div>
          {/* Bottom End */}
        </div>
      </div>
      </section>
    </>
  );
};

export default About;
