import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-6 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Contact Us</span>
            <h2 className="section-title">Get In Touch With Us</h2>
            <p className="section-description">
              Have questions or need assistance? We're here to help you with all your healthcare needs
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h3 className="mb-4">Contact Information</h3>
              <p className="mb-4">
                Feel free to reach out to us with any questions or concerns. Our friendly team is ready to assist you.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="icon-box">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 99818 34205</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@medicareplus.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>
                      123 Health Street, Medical District
                      <br />
                      Indore, 452001
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FaClock />
                  </div>
                  <div className="contact-text">
                    <h4>Working Hours</h4>
                    <p>
                      Monday - Friday: 8:00 AM - 9:00 PM
                      <br />
                      Saturday - Sunday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card">
              <h3 className="mb-4">Send Us a Message</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="nameInput" placeholder="Your Name" />
                      <label htmlFor="nameInput">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="emailInput" placeholder="Your Email" />
                      <label htmlFor="emailInput">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="subjectInput" placeholder="Subject" />
                      <label htmlFor="subjectInput">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="messageInput"
                        placeholder="Your Message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label htmlFor="messageInput">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
