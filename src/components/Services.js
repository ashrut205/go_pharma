import { FaClipboardCheck, FaUserMd, FaNotesMedical, FaRegChartBar, FaLaptopMedical, FaFileMedical } from "react-icons/fa"

function Services() {
  const services = [
    {
      icon: <FaClipboardCheck className="service-icon" />,
      title: "Medication Reviews",
      description: "Conduct structured medication reviews to ensure safety, efficacy, and compliance.",
    },
    {
      icon: <FaNotesMedical className="service-icon" />,
      title: "Clinical Documentation",
      description: "Streamlined and standardized clinical documentation across care teams.",
    },
    {
      icon: <FaLaptopMedical className="service-icon" />,
      title: "Electronic Health Integration",
      description: "Seamless access to patient health records and integration with EHR systems.",
    },
    {
      icon: <FaRegChartBar className="service-icon" />,
      title: "Data-Driven Insights",
      description: "Monitor trends, outcomes, and adherence with real-time clinical analytics.",
    },
    {
      icon: <FaFileMedical className="service-icon" />,
      title: "CMR Management",
      description: "Comprehensive tools for managing Clinical Medication Reviews with audit trails.",
    },
    {
      icon: <FaUserMd className="service-icon" />,
      title: "Interdisciplinary Collaboration",
      description: "Facilitate care coordination among physicians, pharmacists, and other providers.",
    },
  ]

  return (
    <section id="services" className="services-section py-5">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Platform Features</span>
            <h2 className="section-title">Clinical Tools for Modern Healthcare</h2>
            <p className="section-description">
              Our system empowers healthcare professionals with tools to improve medication safety, streamline documentation, and enhance care coordination.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card h-100 text-center p-4 border rounded shadow-sm">
                <div className="icon-box mb-3">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                {/* Replace href with real routing if needed */}
                <a href="#" className="service-link text-primary fw-medium">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
