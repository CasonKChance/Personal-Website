import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div className="row mt-5">
      <h1 className="text-center">Contact Me</h1>
      <div className="col-md-6 offset-md-3">
        <form
          action="/contact"
          method="POST"
          className="needs-validation"
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              name="message"
              required
            ></textarea>
          </div>
          <div className="mb-3 d-grid gap-2">
            <button className="btn btn-success">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
