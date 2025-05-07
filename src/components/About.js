import AboutUS from "../assets/about_us.png";

function About() {
  return (
    <>
      <section id="about" className="about-section py-5 bg-grey">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image position-relative">
                <img
                  src={AboutUS}
                  alt="About Us"
                  className="img-fluid main-image rounded-4 shadow"
                />
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
                <p className="lead mb-4">
                  Today, we’re expanding into the pharmaceutical industry, offering compliant,
                  high-performance systems like EMR, CRM, and inventory management. With innovation
                  at our core, we’re enabling pharma companies to operate smarter, faster,
                  and more efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;
