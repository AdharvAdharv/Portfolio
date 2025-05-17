import React from "react";
import "../Styles/Home.css";

function Home() {
  return (
    <>
      <div className="bg-black ">
        {/* homepage */}
        <div className="bg-black vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
          {/* button */}
          <button
            onClick={() =>
              document
                .getElementById("aboutme")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="btn-glow btn-aboutme"
          >
            About Me
          </button>

          <div className=" text-center heading-wrap ">
            <h2 className="heading-first">Hi, iam</h2>

            {/* <p className="heading-name ">ADHARV  </p> */}
            <div className="animate-wave">
              {"ADHARV".split("").map((char, index) => (
                <span key={index} className="heading-name wave-letter">
                  {char}
                </span>
              ))}
            </div>

            <h1 className="heading-second">Mern Stack Developer</h1>
          </div>
          {/* button */}
          <button
            onClick={() =>
              document
                .getElementById("techstack")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="btn-glow btn-tech"
          >
            Tech
          </button>

          <div className="mb-5 mt-5 d-flex flex-wrap justify-content-center gap-5 ">
            <a
              href="https://github.com/AdharvAdharv"
              className="tech-icon "
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/adharv-m-5423bb251/"
              className="tech-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>{" "}
              </svg>
            </a>

            <a
              href="mailto:dev.adharv@gmail.com"
              className="tech-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=YRRhCXfA0Vd0&format=png&color=000000"
                alt="Email logo"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>

        {/* aboutme */}
        <div id="aboutme" className="d-flex vh-100 vw-100">
          {/* left side */}
          <div className="vh-100 vw-100  d-flex justify-content-center align-items-center ">
            <div>
              <p className="heading-about">ABOUT </p>
              <p className="heading-me">ME</p>
            </div>
          </div>

          {/* right side */}

          <div className="aboutme-scroll vh-100 vw-100 rounded overflow-y-auto p-5 bg-dark text-white ">
            {/* description */}
            <div className="mb-5 about-section">
              <h2 className=" heading-career">Who am I?</h2>
              <p className="lh-lg">
                I am a passionate MERN Stack Developer with hands-on experience
                building scalable web and mobile apps. I enjoy turning ideas
                into impactful digital products and constantly explore new tech
                to enhance my workflow.
              </p>
            </div>

            {/* projects */}
            <div className="mb-5">
              <h2 className="heading-career">Projects</h2>

              {/* Project card */}
              <div
                className="div-project"
                onClick={() =>
                  window.open(
                    "https://github.com/AdharvAdharv/Care-Lift.git",
                    "_blank"
                  )
                }
              >
                <h4 className="text-warning fw-bold">CareLift</h4>
                <p>
                  CareLift is a crowdfunding platform for urgent needs, social
                  causes, and community projects.
                </p>
              </div>

              <div
                className="div-project"
                onClick={() =>
                  window.open(
                    "https://github.com/AdharvAdharv/ReadEase.git",
                    "_blank"
                  )
                }
              >
                <h4 className="text-warning fw-bold">ReadEase</h4>
                <p>
                  ReadEase is an online platform for book lovers to discover,
                  purchase, and manage books.
                </p>
              </div>

              <div
                className="div-project"
                onClick={() =>
                  window.open(
                    "https://github.com/AdharvAdharv/Task-Management.git",
                    "_blank"
                  )
                }
              >
                <h4 className="text-warning fw-bold">Task Manager</h4>
                <p>
                  A simple, organized tool to create, update, and track daily
                  tasks effortlessly.
                </p>
              </div>
            </div>

            {/* education */}
            <div className="mb-5">
              <h2 className="heading-career">Education</h2>
              <ul className=" lh-lg">
                <li>
                  PG Diploma in Blockchain — Kerala Blockchain Academy (2024 -
                  Ongoing)
                </li>
                <li>BCA — WMO Arts and Science College (2019 - 2022)</li>
                <li>12th Grade — CHSS Chakkalakkal (2017 - 2019)</li>
              </ul>
            </div>

            {/* certification */}
            <div className="mb-5">
              <h2 className="heading-career">Certifications</h2>
              <ul className=" lh-lg">
                <li>Developer Essentials for Blockchain — 2024</li>
                <li>Certified Blockchain Associate (CBA ONLINE) — 2025</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          id="techstack"
          className="vh-100 vw-100 bg-black text-white d-flex  justify-content-center align-items-center p-5"
        >
          {/* left side */}

          <div className="vh-100 vw-100 d-flex flex-column align-items-center justify-content-center">
            {/* Core Stack */}
            <div className="text-center mb-5">
              <h4 className="laguage-heading">Core Stack I Work With</h4>
              <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
                {/* React icon */}
                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                    alt="React"
                    className="tech-icon"
                  />
                  <div className="hover-text">React</div>
                </div>

                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                    alt="Node.js"
                    className="tech-icon"
                  />
                  <div className="hover-text">Node.js</div>
                </div>

                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png&color=000000"
                    alt="JavaScript"
                    className="tech-icon"
                  />
                  <div className="hover-text">JavaScript</div>
                </div>

                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000"
                    alt="NestJS"
                    className="tech-icon"
                  />
                  <div className="hover-text">Nest.js</div>
                </div>

                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"
                    alt="Express.js"
                    className="tech-icon"
                  />
                  <div className="hover-text">Express.js</div>
                </div>
              </div>
            </div>

            {/* UI & Styling */}
            <div className="text-center mb-5">
              <h4 className="laguage-heading">UI & Styling</h4>
              <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                    alt="Tailwind"
                    className="tech-icon"
                  />
                  <div className="hover-text">Tailwind</div>
                </div>

                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000"
                    alt="Bootstrap"
                    className="tech-icon"
                  />
                  <div className="hover-text">Bootstrap</div>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="text-center">
              <h4 className="laguage-heading">Databases I Use</h4>
              <div className="d-flex flex-wrap mt-5 justify-content-center gap-5  ">
                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"
                    alt="MongoDB"
                    className="tech-icon"
                  />
                  <div className="hover-text">MongoDB</div>
                </div>

                <div className="tech-hover-wrap">
                  <img
                    src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
                    alt="MySQL"
                    className="tech-icon"
                  />
                  <div className="hover-text">MySQL</div>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
            <h2 className="heading-tech">TECH </h2>
            <h2 className="heading-set"> SET</h2>
            </div>
            </div>

        {/* Resume download button */}
        <div className="button-wrapper">
          <a
            href="/Adharv_resume.pdf"
            download="Adharv_resume.pdf"
            style={{ textDecoration: "none", color: "inherit" }}
            >
        <button className=" btn-resume">
            Download Resume
        </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
