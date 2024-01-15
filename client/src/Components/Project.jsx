import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Project({ project }) {
  return (
    <div className="card mb-3 mx-auto shadow" style={{ maxWidth: "1200px" }}>
      <div className="row g-0">
        {/* <div className="col-md-4">
          {job.name !== "Phil Hughes Honda" && (
            <img
              src={job.logo}
              className="img-fluid w-100 h-100 rounded float"
              alt="..."
            />
          )}
          {job.name !== "Freelance Software Development" && <></>}
          {job.name === "Phil Hughes Honda" && (
            <img
              src={job.logo}
              className="img-fluid w-100 px-3 h-100 rounded float"
              alt="..."
            />
          )}
        </div> */}
        <div className="col-md-8 mx-auto">
          <div className="card-body">
            <h3 className="card-title">{project.name}</h3>
            <p className="card-text">
              <small className="text-body-secondary">{project.dates}</small>
              <br />
              {project.technologies && (
                <small className="text-body-secondary">
                  {project.technologies}
                </small>
              )}
            </p>
            <p className="card-text">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
