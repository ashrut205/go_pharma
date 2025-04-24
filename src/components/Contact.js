import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaLinkedin } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { useRef } from "react";

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!")
        },
        (error) => {
          alert("An error occurred, please try again.")
          console.log(error.text)
        }
      )

    e.target.reset()
  }

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
                    <a href="tel:+919981834205" style={{ color: 'white', textDecoration: 'none' }}>
                      <p>+91 99818 34205</p>
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:contact@gorack.in" style={{ color: 'white', textDecoration: 'none' }}>
                      <p>contact@gorack.in</p>
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FaInstagram />
                  </div>
                  <div className="contact-text">
                    <h4>Instagram</h4>
                    <a href=" https://www.instagram.com/srigorack?igsh=ZjR0YjR3aGptMnIx" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      <p>SriGoRack</p>
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FaLinkedin />
                  </div>
                  <div className="contact-text">
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/company/srigorack-technologies/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      <p>SriGoRack LinkedIn</p>
                    </a>
                  </div>
                </div>


                <div className="contact-item">
                  <div className="icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>
                      716 Shekhar central, Palasia Square
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
                      Friday - Sunday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-x">
              <h3 className="mb-4">Send Us a Message</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Your Name"
                        name="user_name" // ✅ Add this
                      />
                      <label htmlFor="nameInput">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Your Email"
                        name="user_email" // ✅ Add this
                      />
                      <label htmlFor="emailInput">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="subjectInput"
                        placeholder="Subject"
                        name="subject" // ✅ Add this
                      />
                      <label htmlFor="subjectInput">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="messageInput"
                        placeholder="Your Message"
                        name="message" // ✅ Add this
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
