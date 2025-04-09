import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from "react-icons/fa"
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="footer-about">
              <a className="footer-logo d-flex align-items-center mb-3" href="#home">
                <img src={logo || "/placeholder.svg"} alt="MediCare Plus Logo" height="40" />
                <span className="ms-2 fw-bold text-white">
                  MediCare<span className="text-success">Plus</span>
                </span>
              </a>
              <p className="mb-4">
                MediCare Plus is your trusted pharmacy for all healthcare needs. We are committed to providing quality
                products and exceptional service to our community.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4 className="footer-title">Our Services</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Prescription Refills</a>
                </li>
                <li>
                  <a href="#">Medication Review</a>
                </li>
                <li>
                  <a href="#">Home Delivery</a>
                </li>
                <li>
                  <a href="#">Health Screenings</a>
                </li>
                <li>
                  <a href="#">Vaccination</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer-newsletter">
              <h4 className="footer-title">Newsletter</h4>
              <p>Subscribe to our newsletter to receive updates on new products, special offers, and health tips.</p>
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

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-md-0">&copy; {new Date().getFullYear()} MediCare Plus. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>
                Made with <FaHeart className="text-danger mx-1" /> by MediCare Plus Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
