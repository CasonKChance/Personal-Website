import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Job({ job }) {
  return (
    <div className="card mb-3 mx-auto shadow" style={{ maxWidth: "1200px" }}>
      <div className="row g-0">
        {job.logo ? (
          <div className="col-md-4">
            {job.name !== "Phil Hughes Honda" && (
              <img
                src={job.logo}
                className="img-fluid w-100 h-100 rounded float"
                alt="..."
              />
            )}
            {job.name === "Phil Hughes Honda" && (
              <img
                src={job.logo}
                className="img-fluid w-100 px-3 h-100 rounded float"
                alt="..."
              />
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{job.name}</h3>
            <h4 className="card-text text-secondary">{job.jobTitle}</h4>
            <p className="card-text">
              <small className="text-body-secondary">{job.dates}</small>
              <br />
              {job.relevantInfo && (
                <small className="text-body-secondary">
                  {job.relevantInfo}
                </small>
              )}
            </p>
            <p className="card-text">{job.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
