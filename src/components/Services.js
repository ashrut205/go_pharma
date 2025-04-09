import { FaPills, FaClipboardCheck, FaTruck, FaHeadset, FaHospital, FaUserMd } from "react-icons/fa"

function Services() {
  const services = [
    {
      icon: <FaPills className="service-icon" />,
      title: "Prescription Refills",
      description: "Quick and easy prescription refills with reminders when it's time to renew.",
    },
    {
      icon: <FaClipboardCheck className="service-icon" />,
      title: "Medication Review",
      description: "Comprehensive review of your medications to ensure they work well together.",
    },
    {
      icon: <FaTruck className="service-icon" />,
      title: "Free Home Delivery",
      description: "Get your medications delivered to your doorstep at no extra cost.",
    },
    {
      icon: <FaHeadset className="service-icon" />,
      title: "24/7 Support",
      description: "Our pharmacists are available around the clock to answer your questions.",
    },
    {
      icon: <FaHospital className="service-icon" />,
      title: "Health Screenings",
      description: "Regular health screenings to monitor your blood pressure, glucose, and more.",
    },
    {
      icon: <FaUserMd className="service-icon" />,
      title: "Vaccination Services",
      description: "Stay protected with our convenient vaccination services for the whole family.",
    },
  ]

  return (
    <section id="services" className="services-section py-5">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-6 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Our Services</span>
            <h2 className="section-title">Comprehensive Healthcare Services</h2>
            <p className="section-description">
              We offer a wide range of pharmacy services to meet all your healthcare needs
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card h-100">
                <div className="icon-box">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#" className="service-link">
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
