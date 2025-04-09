import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="text-xl font-bold">PharmaCare</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Get in Touch</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Advanced Healthcare Solutions for a Better Tomorrow
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dedicated to improving lives through innovative pharmaceutical solutions and exceptional care.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Learn More</Button>
                  <Button variant="outline">Our Services</Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Healthcare Professionals"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Pharmaceutical Solutions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of services designed to meet your healthcare needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Research & Development",
                  description: "Pioneering new treatments through cutting-edge research and development.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2" />
                        <path d="M8.5 2h7" />
                        <path d="M7 16h10" />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Clinical Trials",
                  description: "Conducting rigorous clinical trials to ensure safety and efficacy of new medications.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Manufacturing",
                  description: "State-of-the-art manufacturing facilities producing high-quality medications.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Distribution",
                  description: "Efficient global distribution network ensuring medications reach those who need them.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                        <path d="M12 3v6" />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Patient Support",
                  description: "Comprehensive support programs to help patients access and use our medications.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Healthcare Partnerships",
                  description: "Collaborating with healthcare providers to improve patient outcomes.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 14c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3Z" />
                        <path d="M7 14c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3Z" />
                        <path d="M17 22v-5" />
                        <path d="M17 7V2" />
                        <path d="M7 22v-5" />
                        <path d="M7 7V2" />
                      </svg>
                    </div>
                  ),
                },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                  <Link href="#" className="inline-flex items-center text-blue-600 hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Our Laboratory"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Committed to Improving Global Health
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  For over 25 years, PharmaCare has been at the forefront of pharmaceutical innovation, dedicated to
                  developing life-changing medications that improve the health and wellbeing of people around the world.
                </p>
                <ul className="grid gap-2">
                  {[
                    "25+ years of pharmaceutical excellence",
                    "Global presence in over 100 countries",
                    "Cutting-edge research facilities",
                    "Commitment to ethical practices",
                    "Award-winning patient support programs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button>Our Story</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or need more information? Our team is here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-gray-500">+1 (555) 123-4567</p>
                <p className="text-gray-500">Mon-Fri: 8am-6pm</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-500">info@pharmacare.com</p>
                <p className="text-gray-500">support@pharmacare.com</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-gray-500">123 Pharma Street</p>
                <p className="text-gray-500">Health City, HC 12345</p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-gray-100 py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-lg font-bold">PharmaCare</span>
          </div>
          <nav className="flex gap-4 md:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Careers
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              News
            </Link>
          </nav>
          <div className="md:ml-auto flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="container mt-4 text-center text-sm text-gray-500">© 2023 PharmaCare. All rights reserved.</div>
      </footer>
    </div>
  )
}
