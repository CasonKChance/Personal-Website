import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";
import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import PageNotFound from "./views/PageNotFound";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
