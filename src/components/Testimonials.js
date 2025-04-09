import { FaStar, FaQuoteLeft } from "react-icons/fa"

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "MediCare Plus has been my go-to pharmacy for years. Their staff is knowledgeable and always takes the time to answer my questions. The home delivery service is a lifesaver!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chronic Care Patient",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "As someone who needs regular medications, I appreciate the medication management program they offer. The pharmacists really understand my needs and provide excellent care.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "New Customer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "I recently switched to MediCare Plus and I'm impressed with their service. The online ordering system is easy to use and their prices are very competitive.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Senior Customer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=100&width=100",
      quote:
        "The staff at MediCare Plus always treats me with respect and patience. They've helped me understand my medications better and their delivery service is prompt.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-6 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-2">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-description">
              Hear from our satisfied customers about their experiences with MediCare Plus
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
                          src={testimonial.image || "/placeholder.svg"}
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
