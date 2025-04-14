import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from "react-icons/fa"
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-4">
            <div className="footer-about">
              <a className="footer-logo d-flex align-items-center mb-3" href="#home">
                <img src={logo || "/placeholder.svg"} alt="MediCare Plus Logo" height="40" />
                <span className="ms-2 fw-bold text-white">
                  MediCare<span className="text-success">Plus</span>
                </span>
              </a>
              <p className="mb-4">
                MediCare Plus is a digital clinical support platform focused on enhancing medication safety,
                documentation efficiency, and interdisciplinary collaboration across the continuum of care.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="list-unstyled">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Features</a></li>
                <li><a href="#solution">Solutions</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#mission">Mission</a></li>
              </ul>
            </div>
          </div>

          {/* Platform Services */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4 className="footer-title">Platform Tools</h4>
              <ul className="list-unstyled">
                <li><a href="#">Medication Reviews</a></li>
                <li><a href="#">Clinical Documentation</a></li>
                <li><a href="#">EHR Integration</a></li>
                <li><a href="#">Decision Support</a></li>
                <li><a href="#">Provider Collaboration</a></li>
              </ul>
            </div>
          </div>

          {/* Contact or Support Newsletter */}
          <div className="col-lg-4">
            <div className="footer-newsletter">
              <h4 className="footer-title">Stay Connected</h4>
              <p>Sign up to receive updates on system enhancements, feature releases, and healthcare insights.</p>
              <form className="mt-3">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your Email Address" />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-md-0">&copy; {new Date().getFullYear()} MediCare Plus. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>
                Built with <FaHeart className="text-danger mx-1" /> by the MediCare Plus Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
