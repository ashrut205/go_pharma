function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-text">
            <h1 className="display-4 fw-bold mb-4">
              Your Health Is Our <span className="text-primary">Top Priority</span>
            </h1>
            <p className="lead mb-4">
              We provide quality healthcare products and services to improve your well-being. Trust our expert
              pharmacists for personalized care and advice.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg">Shop Now</button>
              <button className="btn btn-outline-primary btn-lg">Consult a Pharmacist</button>
            </div>
            <div className="hero-stats mt-5">
              <div className="row">
                <div className="col-4">
                  <h3 className="fw-bold text-primary">15+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-primary">50k+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-primary">5k+</h3>
                  <p>Products</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-image">
            <div className="image-container">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=500&width=600"
                alt="Pharmacy Services"
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
