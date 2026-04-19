import React from "react";
import Card from "./Card";

const Skills = () => {
  return (
    <>
      <section id="skills">

        <h2 className="text-6xl sm:text-3xl md:text-9xl font-semibold font-[naam] h-auto w-auto flex justify-center py-20">
          SKILLS
        </h2>

        <div className="w-full flex flex-col items-center md:flex-row md:justify-center gap-10 pb-10">
          <Card
            count="01"
            title="FRONTEND"
            content={
              <ul className="list-disc pl-5">
                <li>HTML5</li>
                <li>CSS3/TAILWIND CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            }
          />
          <Card
            count="02"
            title="BACKEND"
            content={
              <ul className="list-disc pl-5">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>Authentication(JWT)</li>
              </ul>
            }
          />
        </div>
        <div className="w-full flex flex-col items-center md:flex-row md:justify-center gap-10 pb-10 ">
          <Card
            count="03"
            title="DATABASE"
            content={
              <ul className="list-disc pl-5">
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>SQL</li>
              </ul>
            }
          />
          <Card
            count="04"
            title="UI/UX"
            content={
              <ul className="list-disc pl-5">
                <li>Figma</li>
                <li>Layout Design</li>
                <li>Color Theory</li>
              </ul>
            }
          />
        </div>
        <div className="w-full flex flex-col items-center md:flex-row md:justify-center gap-10 pb-10">
          <Card
            count="05"
            title="DEPLOYMENT"
            content={
              <ul className="list-disc pl-5">
                <li>Vercel</li>
                <li>Netlify</li>
                <li>Render</li>
              </ul>
            }
          />
          <Card
            count="06"
            title="TOOLS "
            content={
              <ul className="list-disc pl-5">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            }
          />
        </div>
      </section>
    </>
  );
};

export default Skills;
