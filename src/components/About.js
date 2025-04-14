function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image position-relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=500&width=600"
                alt="About Us"
                className="img-fluid main-image rounded-4 shadow"
              />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Tech Expertise</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content ps-lg-4">
              <span className="badge bg-primary-subtle text-primary mb-2">About Us</span>
              <h2 className="section-title">Empowering Progress Through Innovation</h2>
              <p className="lead mb-4">
                Srigorack Technologies was founded to transform how businesses harness technology.
                As a software development firm, we’ve delivered smart, scalable solutions to IT,
                finance, and SaaS sectors—boosting efficiency and growth.
              </p>
              <p className="mb-4">
                Today, we’re expanding into the pharmaceutical industry, offering compliant,
                high-performance systems like EMR, CRM, and inventory management. With innovation
                at our core, we’re enabling pharma companies to operate smarter, faster,
                and more efficiently.
              </p>
              <button className="btn btn-primary btn-lg">Learn More About Our Journey</button>
            </div>
          </div>
        </div>

        {/* Our History Section */}
        <div className="row mt-5 pt-5">
          <div className="col-lg-10 mx-auto text-center">
            <span className="badge bg-secondary-subtle text-secondary mb-2">Our History</span>
            <h2 className="section-title mb-4">Empowering Progress Through Innovation</h2>
            <p className="mb-3">
              Established with a vision to revolutionize the way businesses leverage technology,
              Srigorack Technologies began as a software development firm focused on building
              smart, scalable, and performance-driven solutions. From the very beginning,
              our mission has been clear: to deliver innovative software that drives efficiency,
              enhances user experiences, and delivers measurable value.
            </p>
            <p className="mb-3">
              Our early milestones included delivering successful custom solutions for IT service
              providers, finance companies, and SaaS firms—helping them streamline operations,
              boost productivity, and accelerate growth through powerful, tailored applications.
            </p>
            <p>
              As we continue to grow, we’re entering a transformative phase—expanding our technology
              offerings to meet the critical needs of the pharmaceutical industry. With a deep
              understanding of compliance-driven environments, we are now empowering pharmaceutical
              companies with intelligent, reliable software solutions that support every stage
              of their operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
