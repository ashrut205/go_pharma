function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-text">
            <h1 className="display-4 fw-bold mb-4">
              Empowering <span className="text-primary">Safer Medication Use</span>
            </h1>
            <p className="lead mb-4">
              A comprehensive clinical management system designed to support healthcare professionals in delivering
              safer, more effective, and collaborative pharmaceutical care.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg">Request a Demo</button>
              <button className="btn btn-outline-primary btn-lg">Learn How It Works</button>
            </div>
            <div className="hero-stats mt-5">
              <div className="row">
                <div className="col-4">
                  <h3 className="fw-bold text-primary">15+</h3>
                  <p>Years in Clinical Support</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-primary">100k+</h3>
                  <p>Medication Reviews Logged</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-primary">1,000+</h3>
                  <p>Healthcare Providers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-image">
            <div className="image-container">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=500&width=600"
                alt="Clinical System Interface"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape"></div>
    </section>
  )
}

export default Hero
