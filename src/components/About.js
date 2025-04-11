import { FaCheckCircle } from "react-icons/fa"

function About() {
  const features = [
    "Clinically validated medication review workflows",
    "Support for interdisciplinary healthcare teams",
    "Built-in alerts for drug interactions and duplications",
    "Customizable templates for clinical documentation",
    "Secure access to patient medication history",
    "Improved compliance with regulatory standards",
  ]

  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image position-relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=500&width=600"
                alt="About Our System"
                className="img-fluid main-image rounded-4 shadow"
              />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years in Clinical Support</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content ps-lg-4">
              <span className="badge bg-primary-subtle text-primary mb-2">About the Platform</span>
              <h2 className="section-title">Empowering Safer Medication Management</h2>
              <p className="lead mb-4">
                Our clinical management system is designed to support healthcare professionals in optimizing
                pharmaceutical care, improving outcomes, and ensuring patient safety.
              </p>
              <p className="mb-4">
                With over 15 years of experience in clinical workflows and system design, we provide healthcare teams
                with intuitive tools for medication reconciliation, patient record access, and interdisciplinary collaboration.
              </p>

              <div className="features-list mb-4">
                {features.map((feature, index) => (
                  <div className="feature-item d-flex align-items-start mb-2" key={index}>
                    <FaCheckCircle className="text-primary me-2 mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary btn-lg">Learn More About the System</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
