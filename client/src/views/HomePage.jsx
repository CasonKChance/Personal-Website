import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Job from "../Components/Job";
import School from "../Components/School";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Interests from "../Components/Interests";
import Project from "../Components/Project";

import mriLogo from "../../public/Images/MRI_Logo_RGB.webp";
import verandaLogo from "../../public/Images/Veranda_Logo.png";
import hondaLogo from "../../public/Images/Honda_Logo.jpeg";
import gtLogo from "../../public/Images/Georgia_Tech_Logo.png";
import acadLogo from "../../public/Images/Athens_Academy_Logo.png";

export default function HomePage() {
  const jobs = [
    {
      name: "Freelance Software Development",
      jobTitle: "Freelance Software Developer",
      relevantInfo:
        "React NodeJS AWS ExpressJS MongoDB SQLite Electron Django React-Native PostgreSQL",
      dates: "May 2023 - January 2024",
      description:
        "Engineered custom software solutions for various clients. Built websites, a desktop application and a mobile application for iOS and Android. See projects section for more information.",
    },
    {
      name: "MRI Software",
      jobTitle: "Software Engineering Intern",
      logo: mriLogo,
      relevantInfo: "C# JavaScript SQL Aurelia",
      dates: "May 2022 - November 2022",
      description:
        "Built an online forum where clients could post and talk about their ideas for new features and products that our company could implement. Participated in daily stand-up meetings with other software developers on my team, as well as with other development teams and even company executives.",
    },
    {
      name: "Veranda",
      jobTitle: "Bartender/Marketing Specialist",
      logo: verandaLogo,
      relevantInfo: "Employee of the Month: August 2022",
      dates: "March 2022 - Current",
      description:
        "Open and close the bar in a timely and responsible manner. Gain regular customers by serving a plethora of different beverages in a prompt and friendly way. Generate thousands of dollars nightly in revenue for the bar by serving customers. Market our bar on several social media platforms and keep in regular contact with other promoters in the area to generate excitement around our establishments and the events we put on.",
    },
    {
      name: "Phil Hughes Honda",
      jobTitle: "Automotive Technician",
      logo: hondaLogo,
      dates: "May 2020 - August 2020",
      description:
        "Troubleshot and diagnosed faults with vehicle systems and components using OEM-specific code readers, diagnostic trees and online knowledge bases.",
    },
  ];

  const education = [
    {
      name: "Georgia Institute of Technology (Undergraduate)",
      logo: gtLogo,
      degree: "Bachelor of Science: Computer Science",
      threads: "Concentrations: Intelligence and People",
      awards: "Faculty Honors: Fall 2022",
      awards2: "Dean's List: Fall 2021, Fall 2022, Spring 2023",
      description:
        "The Georgia Institute of Technology is a public research university in Atlanta, Georgia. While at Georgia Tech I've been involved in organizations like the Sigma Alpha Epsilon Fraternity, the Georgia Tech Robojackets, and Campus Outreach.",
    },
    {
      name: "Athens Academy",
      logo: acadLogo,
      degree: "High School Diploma",
      awards:
        "National Honors Society, Athens Academy Excellence in Mathematics Award",
      description:
        "Athens Academy is a private college preparatory school in Athens, Georgia. While at Athens Academy I played on the varsity football team, served as varsity football statistician, served as captain and president of the Robotics Club and Fellowship of Christian Athletes Club, and participated in One-Act Play Competitions.",
    },
  ];

  const projects = [
    {
      name: "Accounting App",
      description:
        "Developed a custon accounting app for a private company. Features included data interfacing in a table format, report generation, and direct database interaction.",
      dates: "June 2023 - August 2023",
      technologies: "React, Electron, Django, SQLite",
    },
    {
      name: "Campus Recycler",
      description:
        "Created a gamified recycling app for Georgia Tech campus. Features a leaderboard of top monthly users, custom bonuses, and a map with recycling bin locations.",
      dates: "December 2023 - January 2024",
      technologies: "React-Native, Django, PostgreSQL, AWS (EC2, S3, RDS)",
    },
    {
      name: "PurpleViz (AIATL Hackathon First Place - Computer Vision for Aero Innovation Challenge",
      description:
        "Formulated and developed an app for scanning airplane foam blocks to check cleanliness using computer vision (CV). Won first place at the AIATL Hackathon for Aero Innovation Challenge.",
      dates: "November 2023",
      technologies: "React, PostgreSQL, Django, Roboflow API",
    },
    {
      name: "Heat Check",
      description:
        "Directed a team to create a basketball-centered app that allows users to find courts and find/organize pickup games near them. Features a highly customizable player profile, a leaderboard based on an ELO system, a searching feature for finding and signing up for nearby games and courts.",
      dates: "August 2023 - Current",
      technologies: "React-Native, Django, SQLite",
    },
  ];

  return (
    <div className="text-center justify-content-center container">
      <div className="py-4 mb-4">
        <AboutMe />
      </div>
      <div className="mb-5">
        <h2 className="mt-4 mb-3 display-3 text-decoration-underline">
          Experience
        </h2>
        {jobs.map((job, i) => (
          <Job key={i} job={job} />
        ))}
      </div>
      <div className="py-3">
        <Skills />
      </div>
      <div className="mb-5">
        <h2 className="mt-4 mb-3 display-3 text-decoration-underline">
          Projects
        </h2>
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      <div className="mb-5">
        <h2 className="mt-5 mb-3 display-3 text-decoration-underline">
          Education
        </h2>
        {education.map((school, i) => (
          <School key={i + 10} school={school} />
        ))}
      </div>
      <div className="py-3">
        <Interests />
      </div>
    </div>
  );
}
