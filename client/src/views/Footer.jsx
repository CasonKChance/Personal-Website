import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LinkedInLogo from "../../public/Images/linkedin.svg";
import GithubLogo from "../../public/Images/square-github.svg";

export default function Footer() {
  return (
    <footer
      className="footer bg-body-tertiary py-3 mt-auto"
      data-bs-theme="dark"
    >
      <div className="container">
        <span className="text-secondary">
          &copy; 2023 Cason Chance. All Rights Reserved.
        </span>
        <span className="float-end ms-auto">
          <a
            className="mx-1"
            href="https://www.linkedin.com/in/cason-chance/"
            target="_blank"
          >
            <img src={LinkedInLogo} alt="LinkedIn Link" />
          </a>
          <a
            className="mx-1"
            href="https://www.github.com/CasonKChance/"
            target="_blank"
          >
            <img src={GithubLogo} alt="Github Link" />
          </a>
        </span>
      </div>
    </footer>
  );
}
