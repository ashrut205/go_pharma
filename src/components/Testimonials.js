import { FaStar, FaQuoteLeft } from "react-icons/fa"

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Primary Care Physician",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "The CMR system has streamlined our patient medication reviews and improved our documentation process significantly. It's intuitive and fits well into our workflow.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen, RN",
      role: "Chronic Care Nurse",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "Managing long-term treatment plans is easier now. I can easily track changes in patient medication history and ensure accurate follow-ups.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Clinical Pharmacist",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "The integration of clinical decision support tools within this system helps ensure safe prescribing. It’s become an essential part of our review process.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Geriatric Care Specialist",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "This system has enhanced medication reconciliation and improved collaboration across our care team. It’s a valuable tool in geriatric patient care.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-6 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Clinical Feedback</span>
            <h2 className="section-title">Professional Insights</h2>
            <p className="section-description">
              Hear from healthcare professionals using our clinical management system in real-world settings.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={testimonial.id}>
                    <div className="testimonial-card text-center">
                      <div className="quote-icon">
                        <FaQuoteLeft />
                      </div>
                      <p className="testimonial-text mb-4">{testimonial.quote}</p>
                      <div className="rating mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-warning" />
                        ))}
                      </div>
                      <div className="testimonial-author">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="author-image rounded-circle"
                        />
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
