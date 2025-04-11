"use client"

import { useState } from "react"
import { FaStar, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa"

function Products() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "vitamins", name: "Vitamins & Supplements" },
    { id: "medications", name: "Medications" },
    { id: "skincare", name: "Skincare" },
    { id: "personal", name: "Personal Care" },
  ]

  const products = [
    {
      id: 1,
      name: "Multivitamin Complex",
      category: "vitamins",
      price: 24.99,
      rating: 4.5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
      discount: 15,
    },
    {
      id: 2,
      name: "Pain Relief Tablets",
      category: "medications",
      price: 12.99,
      rating: 4.8,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Hydrating Face Cream",
      category: "skincare",
      price: 29.99,
      rating: 4.7,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
      discount: 10,
    },
    {
      id: 4,
      name: "Vitamin C Serum",
      category: "skincare",
      price: 34.99,
      rating: 4.9,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Allergy Relief Spray",
      category: "medications",
      price: 19.99,
      rating: 4.6,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Organic Hand Sanitizer",
      category: "personal",
      price: 8.99,
      rating: 4.3,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
      discount: 20,
    },
    {
      id: 7,
      name: "Omega-3 Fish Oil",
      category: "vitamins",
      price: 22.99,
      rating: 4.7,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Gentle Face Cleanser",
      category: "skincare",
      price: 18.99,
      rating: 4.5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=300&width=300",
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-warning" />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-warning" />)
    }

    return stars
  }

  return (
    <section id="products" className="products-section py-5">
      <div className="container py-5">

      </div>
    </section>
  )
}

export default Products
