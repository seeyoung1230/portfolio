import { useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Typed from "react-typed";
import medreport from "./images/medreport.png";
import discord from "./images/discord.png";
import greensprout from "./images/greensprout.png";
import mars from "./images/mars.png";
import maze from "./images/maze.png";
import vizability from "./images/vizability.png";
import datajam from "./images/datajam.png";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const experience = useRef(null);
  const main = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(main)} id="logo">
            SEAN PARK
          </li>
          <li onClick={() => scrollToSection(about)} className="link" id="a">
            About
          </li>
          <li onClick={() => scrollToSection(projects)} className="link" id="b">
            Projects
          </li>
          <li
            onClick={() => scrollToSection(experience)}
            className="link"
            id="c"
          >
            Experience
          </li>
        </ul>
      </div>
      {/* Main */}
      <div ref={main} className="main">
        <div className="main-text-container">
          <p className="main-text">
            <span className="small-text">Hey there! I am</span> <br></br>SEAN PARK
            <span id="comma">
              <strong>,</strong>
            </span>{" "}
            <br></br>
            <span className="small-text">
              <Typed
                className="typed-text"
                strings={[
                  "Student @ University of Washington"
                ]}
                typeSpeed={30}
                backSpeed={25}
                loop
              />
            </span>
          </p>
          {/* <div>
            <a href="https://docs.google.com/document/d/1RV0N79rc0Buw6vj2vHSBODOnmxqiJyvJyIgIdd0DP7Q/edit?usp=sharing">
              <button>Resume</button>
            </a>
          </div> */}
          <div className="logos text-center">
           
            <a
              href="https://www.linkedin.com/in/sean-park-03b777235/"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="icon" />
            </a>
          </div>
          
        </div>
      </div>
      {/* About */}
      <div ref={about} className="about">
        <div className="about-container">
          <div className="projects-text">
            <h1 id="page-title">About Me</h1>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <div className="filler-text" style={{ marginBottom: "30px" }}>
              Hello! My name is Sean Park and I am currently a student at the
              University of Washington studying Informatics. I
              have been programming for about 2 years and my first
              experience with code was in the classroom where I started to create
              projects with classmates to hone my skills.
            </div>
          </div>

          <div className="profile-image">
            <div className="filler-text">
            I am actively seeking a challenging position in front-end development where
             I can seamlessly integrate my expertise in UX design and coding to enhance 
             and revitalize websites. With a solid foundation in HTML, CSS, React, 
             JavaScript, and Firebase, I have successfully demonstrated these skills
              in various projects. My adeptness in these technologies, coupled with 
              a rapid acquisition of valuable knowledge, positions me to make
               significant contributions to future projects and collaborative teams. 
               I am eager to leverage my skills and experience to drive innovation and excellence in web development.
            </div>
          </div>
        </div>
      </div>

      <div ref={projects} className="projects">
        <h1>Project</h1>
        <div className="project-list">
          <a href="https://chronomusical.web.app/homeLinks">
            <div className="card">
              <div className="card-image">
                <img className="card-image" src={mars} alt="Post" />
              </div>
              <p className="card-title">Chronomusical Web App</p>
              <p className="card-body" style={{ padding: "15px" }}>
              Creating a full-stack website showcasing new trends in the music world, 
              featuring innovative elements like Music Timelines and Song Battles, is 
              an exciting and dynamic project.
              </p>
              <p className="footer">JavaScript | React | HTML/CSS | Firebase</p>
            </div>
          </a>
        </div>
      </div>

      <div ref={experience} className="experience">
        <h1>Relevant Experience</h1>
        <div class="CV-grid">
          <div class="CV-grid-column">
            <div class="CV-jobs">
              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading">
                  <span class="CV-timeline-heading-title">
                  Product Analyst{" "}
                  </span>
                  &#8211;{" "}
                  <span class="CV-timeline-heading-location">
                  Healthy Amplified{" "}
                  </span>
                  <small class="CV-timeline-heading-duration">
                  Apr 2023 – Present
                  </small>
                </h3>
                <ul class="CV-timeline-details">
                  <li class="CV-job-timeline-item">
                  Collaborated with product managers to ensure product developments algin with market demands 
                  </li>
                  <li class="CV-job-timeline-item">
                  Developed business requirements throughout weekly meetings to guide marketing initiatives
                  </li>
                  <li class="CV-job-timeline-item">
                  Proposed solutions to program managers, contributing to the enhancement of product performance, 
                  resulting in over $630k in gross revenue bookings throughout 2023
                  </li>
                </ul>
              </section>

              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading">
                  <span class="CV-timeline-heading-title">
                    Undergraduate Research Assistant{" "}
                  </span>
                  &#8211;{" "}
                  <span class="CV-timeline-heading-location">
                    Paul G. Allen School of Computer Science and Engineering{" "}
                  </span>
                  <small class="CV-timeline-heading-duration">
                    Jan 2023 - Apr 2023
                  </small>
                </h3>
                <ul class="CV-timeline-details">
                  <li class="CV-job-timeline-item">
                    Collaborated with a team of 4 to analyze and visualize of
                    the impact of college life stressors throughout a 3-month
                    period
                  </li>
                  <li class="CV-job-timeline-item">
                    Effectively managed and analyzed data collected from the
                    Fitbit app and surveys submitted by a diverse group of 300+
                    study participants, enabling insightful findings and
                    actionable recommendations for such study participants
                  </li>
                </ul>
              </section>


              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading">
                  <span class="CV-timeline-heading-title">
                  Sales Associate{" "}
                  </span>
                  &#8211;{" "}
                  <span class="CV-timeline-heading-location">
                  Nordstrom{" "}
                  </span>
                  <small class="CV-timeline-heading-duration">
                  Jun 2022 – Sep 2022
                  </small>
                </h3>
                <ul class="CV-timeline-details">
                  <li class="CV-job-timeline-item">
                  	Managed high-end clientele in luxury selling industry, showcasing proficient communication to people’s unique needs
                  </li>
                  <li class="CV-job-timeline-item">
                  Acquired comprehensive understanding of product knowledge, customer service, and sale techniques to provide exceptional customer experience
                  </li>
                  <li class="CV-job-timeline-item">
                  Consistently ranked a top-performing sales associate, surpassing monthly sales goals by 25% with an average of $25,000 in sales
                  </li>
                
                </ul>
              </section>
              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading">
                  <span class="CV-timeline-heading-title">
                  Marketing Intern{" "}
                  </span>
                  &#8211;{" "}
                  <span class="CV-timeline-heading-location">UV NATION</span>
                  <small class="CV-timeline-heading-duration">
                  Jun 2021 – Mar 2022
                  </small>
                </h3>
                <ul class="CV-timeline-details">
                  <li class="CV-timeline-details-item">
                  Delivered and improved customer experience with extensive knowledge of UV nation’s product capabilities 
                  </li>
                  <li class="CV-timeline-details-item">
                  Gained significant experience and knowledge of consumer centric marketing of UV Nation’s products 
                  </li>
                  <li class="CV-timeline-details-item">
                  Extensive experience in supply chain administration with partners based out of China
                  </li>
              
                </ul>
              </section>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
