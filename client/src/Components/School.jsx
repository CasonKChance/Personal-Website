import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function School({ school }) {
  return (
    <div className="card mb-3 mx-auto shadow" style={{ maxWidth: "1200px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={school.logo}
            className="img-fluid w-100 h-100 py-4 px-4 rounded float"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{school.name}</h3>
            <h4 className="card-text text-secondary">{school.degree}</h4>
            <p className="card-text">
              {school.threads && (
                <small className="text-body-secondary">{school.threads}</small>
              )}
              {school.threads && <br />}
              <small className="text-body-secondary">{school.awards}</small>
              {school.awards2 && <br />}
              {school.awards2 && (
                <small className="text-body-secondary">{school.awards2}</small>
              )}
            </p>
            <p className="card-text">{school.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
