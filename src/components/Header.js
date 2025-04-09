"use client"

import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={logo || "/placeholder.svg"} alt="MediCare Plus Logo" height="40" />
          <span className="ms-2 fw-bold text-primary">
            MediCare<span className="text-success">Plus</span>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex ms-lg-3">
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
