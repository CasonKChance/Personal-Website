import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

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

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await fetch(
      "https://e64ugx1u2b.execute-api.us-east-2.amazonaws.com/contact",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="text-center">Contact Me</h1>
        <div className="col-md-6 offset-md-3">
          <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
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
                value={formData.name}
                onChange={(evt) => {
                  handleChange(evt);
                }}
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
                value={formData.email}
                onChange={(evt) => {
                  handleChange(evt);
                }}
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
                onChange={(evt) => {
                  handleChange(evt);
                }}
                value={formData.message}
                required
              ></textarea>
            </div>
            <div className="mb-3 d-grid gap-2">
              <button className="btn btn-success">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
