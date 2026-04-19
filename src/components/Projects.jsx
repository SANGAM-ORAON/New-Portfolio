import React, { useEffect, useRef } from "react";
import Box from "./Box";

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isPaused = false;

    // 🔥 responsive speed
    const speed = window.innerWidth < 768 ? 0.5 : 1;

    const autoScroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;

        // smooth loop reset
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 16); // smoother (60fps feel)

    const stop = () => (isPaused = true);
    const start = () => (isPaused = false);

    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    el.addEventListener("touchstart", stop);
    el.addEventListener("touchend", start);

    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
      el.removeEventListener("touchstart", stop);
      el.removeEventListener("touchend", start);
    };
  }, []);

  return (
    <section id="projects">
      <h2 className="text-5xl sm:text-3xl md:text-9xl font-semibold font-[naam] flex justify-center py-20 hover:line-through">
        PROJECTS
      </h2>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="overflow-x-auto flex gap-6 px-4 scrollbar-hide"
      >
        <div className="flex gap-6 w-max">
          {/* YOUR BOXES (UNCHANGED) */}
          <Box
            img="/images/Portfolio.png"
            one="react"
            two="tailwindcss"
            three="gsap"
            title="Portfolio"
            detail="Modern portfolio built using React and Tailwind CSS."
            link="https://new-portfolio-sg7v.vercel.app/"
          />

          <Box
            img="/images/Cocktails App.png"
            one="react"
            two="tailwindcss"
            three="gsap"
            title="Cocktails App"
            detail="Cocktails App built using React and Tailwind CSS."
            link="https://cocktails-dusky.vercel.app/"
          />

          <Box
            img="/images/Auth System.png"
            one="react"
            two="node"
            three="mongodb"
            title="Auth System"
            detail="Auth system using React, Node and MongoDB."
            link="https://mern-1-saq5.vercel.app/"
          />

          <Box
            img="/images/Crud App.png"
            one="node"
            two="express"
            three="mongodb"
            title="CRUD App"
            detail="CRUD app using Node, Express, MongoDB."
            link="https://crud-app-e1i8.onrender.com/posts"
          />

          <Box
            img="/images/3D Model.png"
            one="react"
            two="three.js"
            three="react three fiber"
            title="3D Model"
            detail="Created a 3D model using Three.js"
            link="https://3-d-model-ten.vercel.app/"
          />

          <Box
            img="/images/Snake Game.png"
            one="html"
            two="css"
            three="javascript"
            title="Snake Game"
            detail="Built Snake Game using JavaScript."
            link="https://snake-game-two-lac.vercel.app/"
          />

          <Box
            img="/images/Resume Builder.png"
            one="html"
            two="css"
            three="javascript"
            title="Resume Builder"
            detail="Resume builder app with live preview."
            link="https://resume-builder-seven-sable.vercel.app/"
          />

          <Box
            img="/images/To Do App.png"
            one="html"
            two="css"
            three="javascript"
            title="To Do App"
            detail="Task manager app using JavaScript."
            link="https://to-do-app-beta-sooty.vercel.app/"
          />

          <Box
            img="/images/Weather App.png"
            one="html"
            two="css"
            three="javascript"
            title="Weather App"
            detail="Weather app with live API data."
            link="https://weather-app-ecru-two-58.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
