function Services() {
  const pharmaSolutions = [
    {
      title: "EMR Systems",
      description:
      "Secure, compliant Electronic Medical Record systems designed to streamline data management, enhance accuracy, and support seamless regulatory reporting. These platforms enable real-time access to patient histories, medication records, and clinical notes—empowering healthcare professionals to make informed decisions.",
    },
    {
      title: "CRM Systems",
      description:
        "Intelligent customer relationship management platforms that help pharmaceutical firms manage interactions with healthcare professionals, suppliers, and clients—improving communication and engagement.",
    },
    {
      title: "Inventory Management Systems",
      description:
        "Real-time inventory tracking and automation tools built to optimize stock levels, reduce losses, and maintain efficient supply chain operations. These systems provide comprehensive analytics, expiration alerts, and integration with procurement channels—ensuring accurate forecasting, regulatory compliance.",
    },
  ]

  return (
    <section id="services" className="services-section py-5 bg-light">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Our Services</span>
            <h2 className="section-title">Cutting-Edge IT Solutions for Pharma</h2>
            <p className="section-description">
              Leveraging our expertise in custom software development, we now provide cutting-edge IT solutions built specifically for pharmaceutical companies:
            </p>
          </div>
        </div>

        <div className="row g-4">
          {pharmaSolutions.map((solution, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card h-100 text-center p-4 border rounded shadow-sm bg-white">
                <h4 className="service-title">{solution.title}</h4>
                <p className="service-description">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
