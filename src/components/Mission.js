import { FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa"

function Mission() {
  const points = [
    {
      icon: <FaBullseye className="text-primary fs-2 mb-3" />,
      text: "Deliver reliable, innovative, and cost-effective software solutions that enhance operational efficiency in the pharmaceutical sector.",
    },
    {
      icon: <FaLightbulb className="text-warning fs-2 mb-3" />,
      text: "Empower clients with customized technology that simplifies complex processes, ensures compliance, and drives sustainable growth.",
    },
    {
      icon: <FaHandshake className="text-success fs-2 mb-3" />,
      text: "Build lasting partnerships based on trust, transparency, and shared success in a rapidly evolving healthcare landscape.",
    },
  ]

  return (
    <section id="mission" className="mission-section py-5 bg-light">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Our Mission</span>
            <h2 className="section-title">Driving Innovation with Purpose</h2>
            <p className="text-muted">
              We’re committed to shaping the future of pharmaceutical operations through impactful technology.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {points.map((point, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="p-4 h-100 border rounded-4 text-center shadow-sm bg-white">
                {point.icon}
                <p className="text-dark">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
