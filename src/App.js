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
            EVAN CHANG
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
            <span className="small-text">Hey there! I am</span> <br></br>Evan
            Chang
            <span id="comma">
              <strong>,</strong>
            </span>{" "}
            <br></br>
            <span className="small-text">
              <Typed
                className="typed-text"
                strings={[
                  "Software Engineer @ The Sports Institute at UW Medicine",
                  "Full Stack Developer @ The MedReport Foundation",
                  "Software Developer @ UW Finance",
                  "Student @ University of Washington",
                ]}
                typeSpeed={30}
                backSpeed={25}
                loop
              />
            </span>
          </p>
          <div>
            <a href="https://docs.google.com/document/d/1RV0N79rc0Buw6vj2vHSBODOnmxqiJyvJyIgIdd0DP7Q/edit?usp=sharing">
              <button>Resume</button>
            </a>
          </div>
          <div className="logos text-center">
            <a
              href="https://github.com/evanc108"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/evan-chang-3b7a2724a/"
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
              Hello! My name is Evan Chang and I am currently a student at the
              University of Washington studying Informatics: Data Science. I
              have been programming for about 4 years and although my first
              experience with code was in the classroom, I started to create
              projects on my own time to hone my skills.
            </div>
          </div>

          <div className="profile-image">
            <div className="filler-text">
              I have worked as a software engineer at The Sports Institute at UW
              Medicine, a software developer at UW Finance, a Full Stack
              Developer at The MedReport Foundation, and I have been freelancing
              my programming skills to small businesses and non-profits.
              Throughout my experiences, I have quickly been gaining valuable
              knowledge and skills that I hope to apply to my future
              contributions to projects and teams.
            </div>
          </div>
        </div>
      </div>

      <div ref={projects} className="projects">
        <h1>Projects</h1>
        <div className="project-list">
          <a href="https://medreport-b85ab.web.app/">
            <div className="card">
              <div className="card-image">
                <img className="card-image" src={medreport} alt="Post" />
              </div>
              <p className="card-title">The MedReport Foundation</p>
              <p className="card-body" style={{ padding: "15px" }}>
                A full-stack website serving a non-profit organization, which
                facilitates the sharing and viewing of medical articles
              </p>
              <p className="footer">JavaScript | React | HTML/CSS | Firebase</p>
            </div>
          </a>

          <a href="https://github.com/evanc108/KpopWebCrawler">
            <div className="card">
              <div className="card-image">
                <img className="card-image" src={discord} alt="Post" />
              </div>
              <p className="card-title">Kpop Album Web Scraping Discord Bot</p>
              <p className="card-body" style={{ padding: "15px" }}>
                A Discord Bot that displays current trends in Kpop albums,
                utilizing a web scraper and sentiment analysis to output
                realtime information
              </p>
              <p className="footer">
                Python | SQL | PostgreSQL | Beautiful Soup | Pandas | MatPlotLib
              </p>
            </div>
          </a>

          <a href="https://github.com/evanc108/Dubhacks2022">
            <div className="card">
              <div className="card-image">
                <img className="card-image" src={greensprout} alt="Post" />
              </div>
              <p className="card-title">GreenSprouts</p>
              <p className="card-body" style={{ padding: "15px" }}>
                A mobile app aimed at calculating carbon emissions based on a
                user's vehicle and average usage
              </p>
              <p className="footer">Java | SQLite | SQL | Android Studio</p>
            </div>
          </a>

          <a href="https://miffily.shinyapps.io/final-project-haoemilyy/">
            <div className="card">
              <div className="card-image">
                <img className="card-image" src={mars} alt="Post" />
              </div>
              <p className="card-title">Mars Climate Data Analysis Web App</p>
              <p className="card-body" style={{ padding: "15px" }}>
                A data analysis on Mars and Earth climate data. This includes
                multiple data visualizations displayed on a web application
              </p>
              <p className="footer">R | R Studio | Shiny App</p>
            </div>
          </a>
          <a href="https://github.com/evanc108/maze">
            <div className="card">
              <div className="card-image">
                <img className="card-image" src={maze} alt="Post" />
              </div>
              <p className="card-title">Maze Generator</p>
              <p className="card-body" style={{ padding: "15px" }}>
                A random maze generator that utilizes data structures such as
                Stacks/Queues to create a 30x30 maze with one solvable path
              </p>
              <p className="footer">C++ | OpenCV Library</p>
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
                    Software Engineer{" "}
                  </span>
                  &#8211;{" "}
                  <span class="CV-timeline-heading-location">
                    The Sports Institute at UW Medicine{" "}
                  </span>
                  <small class="CV-timeline-heading-duration">
                    Jul 2023 - Present
                  </small>
                </h3>
                <ul class="CV-timeline-details">
                  <li class="CV-job-timeline-item">
                    Developed new features for the ExerciseRx platform,
                    collaborating with engineers to deliver successful
                    implementation
                  </li>
                  <li class="CV-job-timeline-item">
                    Utilized Swift, Java, PHP, and JavaScript to enhance the
                    functionality and user experience of the software platform
                  </li>
                  <li class="CV-job-timeline-item">
                    Leveraged Amazon Web Services (AWS) and MySQL to optimize
                    system performance and overall database scalability
                  </li>
                  <li class="CV-job-timeline-item">
                    Engineered RESTful APIs using Node.js and Express.js to
                    improve data retrieval and storage efficiency of software
                    programs
                  </li>
                </ul>
              </section>
              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading">
                  <span class="CV-timeline-heading-title">
                    Full Stack Developer{" "}
                  </span>
                  &#8211;{" "}
                  <span class="CV-timeline-heading-location">
                    The MedReport Foundation{" "}
                  </span>
                  <small class="CV-timeline-heading-duration">
                    July 2015 - Present
                  </small>
                </h3>
                <ul class="CV-timeline-details">
                  <li class="CV-job-timeline-item">
                    Led a team of 4 to successfully develop and launch a
                    full-stack website for exchanging medical articles, serving
                    200+ users
                  </li>
                  <li class="CV-job-timeline-item">
                    Tested front-end code in multiple browsers to ensure
                    cross-browser compatability.
                  </li>
                  <li class="CV-job-timeline-item">
                    Coordinated closely with other developers and digital
                    producers to expedite projects.
                  </li>
                  <li class="CV-job-timeline-item">
                    Clients included Lovesac, U.S. Cellular, JetBlue, and more.
                  </li>
                </ul>
              </section>
              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading">
                  <span class="CV-timeline-heading-title">
                    Software Developer{" "}
                  </span>
                  &#8211;{" "}
                  <span class="CV-timeline-heading-location">UW Finance</span>
                  <small class="CV-timeline-heading-duration">
                    Dec 2022 - Present
                  </small>
                </h3>
                <ul class="CV-timeline-details">
                  <li class="CV-timeline-details-item">
                    Developed and deployed an institution-wide notification
                    management system using C#, .NET, SQL, and Microsoft Azure
                  </li>
                  <li class="CV-timeline-details-item">
                    Automated UI testing with 100+ unit tests using the Specflow
                    framework on multiple C# ASP.NET web applications
                  </li>
                  <li class="CV-timeline-details-item">
                    Streamlined inventory database management on Microsoft SQL
                    Server by developing PowerShell scripts to automate manual
                    data entry, updates, and maintenance, resulting in a 60%
                    reduction in time spent on these operations
                  </li>
                  <li class="CV-timeline-details-item">
                    Authored and maintained comprehensive software
                    documentation, encompassing 15+ key systems/processes
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
