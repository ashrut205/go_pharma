import React from 'react';
import HeroLogo from "../assets/Distribution1.png"


const scrollToConnect = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

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
              <button
                className="btn btn-primary btn-lg"
                onClick={scrollToConnect}
              >
                Connect to us
              </button>
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
          <div className="image-container p-3 border rounded shadow" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <img
              src={HeroLogo}
              alt="Clinical System Interface"
              className="img-fluid"
            />
          </div>
          </div>
        </div>
      </div>
      <div className="hero-shape"></div>
    </section>
  );
}

export default Hero;
