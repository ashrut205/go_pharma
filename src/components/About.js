import { FaCheckCircle } from "react-icons/fa"

function About() {
  const features = [
    "Licensed and experienced pharmacists",
    "Premium quality medications and health products",
    "Personalized healthcare advice",
    "Competitive pricing and regular discounts",
    "Fast and reliable service",
    "Commitment to community health",
  ]

  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image position-relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=500&width=600"
                alt="About MediCare Plus"
                className="img-fluid main-image rounded-4 shadow"
              />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content ps-lg-4">
              <span className="badge bg-primary-subtle text-primary mb-2">About Us</span>
              <h2 className="section-title">Trusted Pharmacy Care Since 2008</h2>
              <p className="lead mb-4">
                MediCare Plus is dedicated to providing exceptional pharmaceutical care and health services to our
                community.
              </p>
              <p className="mb-4">
                Our team of experienced pharmacists and healthcare professionals are committed to your well-being. We
                believe in delivering personalized care, quality products, and reliable advice to help you maintain
                optimal health.
              </p>

              <div className="features-list mb-4">
                {features.map((feature, index) => (
                  <div className="feature-item" key={index}>
                    <FaCheckCircle className="text-primary me-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary btn-lg">Learn More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
