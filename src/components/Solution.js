import { FaSyncAlt, FaPrescriptionBottleAlt, FaUserMd, FaChartLine } from "react-icons/fa"

function Solution() {
  const solutions = [
    {
      icon: <FaSyncAlt className="solution-icon text-primary" />,
      title: "Streamlined Medication Reconciliation",
      description:
        "Ensure accurate and up-to-date medication lists across transitions of care with smart reconciliation tools.",
    },
    {
      icon: <FaPrescriptionBottleAlt className="solution-icon text-primary" />,
      title: "Improved Medication Safety",
      description:
        "Reduce the risk of drug interactions, duplications, and non-adherence through real-time clinical alerts and checks.",
    },
    {
      icon: <FaUserMd className="solution-icon text-primary" />,
      title: "Interdisciplinary Collaboration",
      description:
        "Facilitate effective communication and documentation across pharmacists, physicians, and care teams.",
    },
    {
      icon: <FaChartLine className="solution-icon text-primary" />,
      title: "Data-Driven Decisions",
      description:
        "Access meaningful analytics on therapy outcomes, patient trends, and quality indicators to support better care.",
    },
  ]

  return (
    <section id="solution" className="solution-section py-5 bg-light">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Our Solution</span>
            <h2 className="section-title">Solving Real Challenges in Medication Management</h2>
            <p className="section-description">
              MediCare Plus helps healthcare organizations streamline clinical workflows, reduce medication errors, and
              enhance collaboration across the continuum of care.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {solutions.map((solution, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="solution-card p-4 text-center border rounded shadow-sm h-100">
                <div className="mb-3 fs-1">{solution.icon}</div>
                <h5 className="mb-3 fw-semibold">{solution.title}</h5>
                <p className="text-muted">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution
