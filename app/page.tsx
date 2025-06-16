"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Shield,
  Zap,
  Heart,
  CheckCircle,
  TrendingUp,
  Clock,
  Settings,
  DollarSign,
  Mail,
  Star,
} from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react" // Import useRef
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

export default function VendoXpressLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    message: "",
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll contact you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSalesContact = () => {
    window.location.href =
      "mailto:sales@vendoxpress.com?subject=Partnership Inquiry&body=Hello, I'm interested in learning more about VendoXpress partnership opportunities."
  }

  // Carousel setup with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const autoplayRef = useRef<NodeJS.Timeout | null>(null) // Ref for autoplay interval

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  const startAutoplay = useCallback(() => {
    if (emblaApi) {
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext()
      }, 3000) // Change image every 3 seconds
    }
  }, [emblaApi])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    // Start autoplay when component mounts
    startAutoplay()

    // Clean up interval on component unmount
    return () => {
      stopAutoplay()
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, setScrollSnaps, onSelect, startAutoplay, stopAutoplay])

  const productCarouselImages = [
    { src: "/images/slider/slider-1.jpg", alt: "Massage Chair" },
    { src: "/images/slider/slider-2.jpg", alt: "Massage Chair" },
    { src: "/images/slider/slider-3.jpg", alt: "Massage Chair" },
    { src: "/images/slider/slider-4.jpg", alt: "Massage Chair" },

  ]

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      {/* Floating Background Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-300/20 rounded-full floating-shape"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-400/20 rounded-lg floating-shape-slow"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-300/20 rounded-full floating-shape-fast"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-green-400/20 rounded-full floating-shape"></div>
        <div className="absolute bottom-60 right-1/4 w-14 h-14 bg-purple-400/20 rounded-lg floating-shape-slow"></div>
        <div className="absolute top-1/2 right-10 w-10 h-10 bg-orange-400/20 rounded-full floating-shape-fast"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <Link href="/">
              <img src="/images/vendoxpress-logo-gold.png" alt="VendoXpress Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Products", "Services", "Partnership"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-pink-600 font-medium text-sm transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button
              onClick={handleSalesContact}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-6 py-2 rounded-full"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
          <Button className="md:hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white">Menu</Button>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - Enhanced */}
            <div
              className={`lg:col-span-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-md"></div>
                <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-md"></div>

                {/* Badge */}
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium mb-6 px-6 py-3 rounded-full shadow-lg transition-all duration-500 text-base inline-flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">Premium Vending Solutions</span>
                  <span className="sm:hidden">Premium Solutions</span>
                </Badge>

                {/* Main Heading - Responsive */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 font-protest">
                  Turn space into{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-pink-600">passive income</span>
                    <span className="absolute -bottom-2 left-0 right-0 h-3 bg-purple-200/60 -rotate-1 transform -skew-x-3"></span>
                  </span>
                </h1>

                {/* Featured Benefits */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-pink-600 flex items-center">
                    <Star className="w-3 h-3 mr-1 text-pink-500" /> Zero Investment
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-purple-600 flex items-center">
                    <Star className="w-3 h-3 mr-1 text-purple-500" /> Guaranteed Revenue
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-blue-600 flex items-center">
                    <Star className="w-3 h-3 mr-1 text-blue-500" /> Full Maintenance
                  </div>
                </div>

                {/* Description - Responsive */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light max-w-xl">
                  Generate revenue from your unused space at zero cost. We provide, install, and maintain premium
                  vending machines while you collect the profits.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleSalesContact}
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-500 group text-base sm:text-lg"
                  >
                    Start Earning Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-500 text-base sm:text-lg"
                  >
                    Explore Solutions
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Product Showcase with Carousel */}
            <div
              className={`lg:col-span-6 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/30 to-purple-600/30 rounded-3xl blur-xl"></div>

                {/* Main Image Carousel with Frame */}
                <div
                  className="relative bg-gradient-to-r from-pink-500 to-purple-600 p-1 rounded-3xl shadow-2xl"
                  onMouseEnter={stopAutoplay} // Pause on hover
                  onMouseLeave={startAutoplay} // Resume on mouse leave
                >
                  <div className="embla overflow-hidden rounded-2xl">
                    <div className="embla__viewport" ref={emblaRef}>
                      <div className="embla__container flex">
                        {productCarouselImages.map((image, index) => (
                          <div className="embla__slide flex-none w-full" key={index}>
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              width={800} // Provide explicit width
                              height={600} // Provide explicit height
                              className="w-full h-full object-cover shadow-inner transform hover:scale-[1.02] transition-all duration-500"
                              priority={index === 0} // Prioritize loading the first image
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Carousel Dots */}
                  <div className="embla__dots flex justify-center mt-4 space-x-2">
                    {scrollSnaps.map((_, index) => (
                      <button
                        key={index}
                        className={`embla__dot w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-pink-500 scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-3 transform rotate-3 hover:rotate-0 transition-all duration-300">
                    <div className="text-xs text-gray-500">Monthly Revenue</div>
                    <div className="text-lg font-bold text-pink-600">+25%</div>
                  </div>

                  <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-3 transform -rotate-3 hover:rotate-0 transition-all duration-300">
                    <div className="text-xs text-gray-500">Customer Satisfaction</div>
                    <div className="text-lg font-bold text-purple-600">100%</div>
                  </div>
                </div>

                {/* Product Tags */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-pink-600 shadow-md">
                    Massage Chairs
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-600 shadow-md">
                    Photo Booths
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-600 shadow-md">
                    Arcade Machines
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Enhanced */}
          <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Discover More</span>
            <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center animate-bounce">
              <div className="w-1 h-3 bg-pink-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Attention Banner */}
      <section className="py-6 bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZxdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZ24+PC9zdmc+')]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-protest">Ready to unlock hidden revenue?</h3>
              <p className="text-purple-200">Join 500+ partners already profiting from their unused space</p>
            </div>
            <Button
              onClick={handleSalesContact}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-500 mt-4 md:mt-0"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 font-medium mb-6 px-4 py-2 rounded-full">
                About VendoXpress
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-protest">
                Zero investment, maximum returns
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                VendoXpress transforms your unused space into a profitable asset with no financial risk. We provide
                premium vending machines, handle all installation and maintenance, while you simply collect your share
                of the revenue.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>

              <Button
                onClick={handleSalesContact}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-500"
              >
                Become a Partner
              </Button>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <img
                src="/images/image-3.jpg"
                alt="VendoXpress Business Solutions"
                className="relative w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-protest">
              Premium vending solutions
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              From wellness to entertainment, our state-of-the-art machines deliver exceptional experiences and generate
              consistent revenue in any location.
            </p>
          </div>

          {/* Floating Product Icons */}
          <div className="relative h-96 mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-4xl h-full">
                {/* Central Hand */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="text-6xl">🤝</div>
                </div>

                {/* Floating Product Icons */}
                <div className="absolute top-10 left-10 floating-shape">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    💆‍♀️
                  </div>
                </div>
                <div className="absolute top-20 right-20 floating-shape-slow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                    📸
                  </div>
                </div>
                <div className="absolute top-40 left-1/4 floating-shape-fast">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                    🥊
                  </div>
                </div>
                <div className="absolute top-60 right-1/3 floating-shape">
                  <div className="w-18 h-18 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg p-2">
                    🎱
                  </div>
                </div>
                <div className="absolute top-32 left-1/2 floating-shape-slow">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                    🎮
                  </div>
                </div>
                <div className="absolute top-16 left-1/3 floating-shape-fast">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white text-lg shadow-lg">
                    🎰
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💆‍♀️",
                title: "Massage Chairs",
                desc: "Luxurious wellness experiences with AI-powered massage programs and contactless payment options",
                image: "/images/massage-chair.png",
                features: ["AI massage programs", "Zero gravity", "Heated therapy", "Mobile payments"],
                color: "from-pink-400 to-pink-600",
              },
              {
                icon: "📸",
                title: "Photo Booths",
                desc: "Interactive entertainment with instant printing, digital sharing, and customizable experiences",
                image: "/images/photobooth.png",
                features: ["4K cameras", "Social sharing", "Custom branding", "Green screen"],
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: "🥊",
                title: "Arcade Machine",
                desc: "High-energy gaming with precision strength measurement and competitive leaderboards",
                image: "/images/arcade-machine.jpg",
                features: ["Strength measurement", "Leaderboards", "LED displays", "Sound effects"],
                color: "from-purple-400 to-purple-600",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                      {product.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 font-protest">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{product.desc}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleSalesContact}
                    variant="outline"
                    className="w-full border-2 border-pink-500 text-pink-600 hover:bg-pink-50 rounded-full px-6"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              onClick={handleSalesContact}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-12 py-4 rounded-full shadow-2xl transition-all duration-500 group text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Product Catalog
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-protest">
              Four steps to passive income
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Our streamlined process takes you from inquiry to income with minimal effort on your part.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Contact",
                desc: "Reach out to discuss your available space and business goals",
                image: "/images/contact.jpg",
              },
              {
                step: "Step 2",
                title: "Assessment",
                desc: "Our team evaluates your location and recommends optimal solutions",
                image: "/images/assessment.jpg",
              },
              {
                step: "Step 3",
                title: "Installation",
                desc: "Professional setup with minimal disruption to your operations",
                image: "/images/installation.jpg",
              },
              {
                step: "Step 4",
                title: "Profit",
                desc: "Start receiving your share of the revenue immediately",
                image: "/images/profit.jpg",
              },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white mb-3">{item.step}</Badge>
                  <h3 className="font-bold text-lg mb-3 text-gray-900 font-protest">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              onClick={handleSalesContact}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-12 py-4 rounded-full shadow-2xl transition-all duration-500 group text-lg"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-protest">
              Smart technology, effortless profits
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
              Our advanced vending solutions leverage cutting-edge technology to maximize performance and revenue with
              minimal oversight.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Smart Monitoring",
                  desc: "IoT technology for real-time performance tracking and maintenance alerts",
                  color: "from-pink-400 to-pink-600",
                },
                {
                  icon: Heart,
                  title: "User Experience",
                  desc: "Intuitive interfaces with multi-language support for broader appeal",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  icon: Shield,
                  title: "Secure Payments",
                  desc: "Bank-grade security with multiple contactless payment options",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: BarChart3,
                  title: "Revenue Analytics",
                  desc: "Detailed performance reports and optimization recommendations",
                  color: "from-purple-400 to-purple-600",
                },
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-sm mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <img
                src="/images/profit-share.jpg"
                alt="Customer using VendoXpress machine"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              onClick={handleSalesContact}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-12 py-4 rounded-full shadow-2xl transition-all duration-500 group text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Discover Our Technology
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section id="partnership" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-protest">
              Why partner with VendoXpress
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto">
              Our risk-free business model delivers consistent passive income with zero investment and complete
              operational support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Zero Investment",
                desc: "No upfront costs, equipment fees, or financial risk. We handle all expenses.",
                color: "from-green-400 to-green-600",
              },
              {
                icon: TrendingUp,
                title: "Guaranteed Revenue",
                desc: "Proven business model with consistent monthly income sharing.",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Settings,
                title: "Complete Support",
                desc: "Full maintenance, technical updates, and 24/7 monitoring included.",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: Clock,
                title: "Rapid Deployment",
                desc: "Professional installation completed within 24-48 hours.",
                color: "from-orange-400 to-orange-600",
              },
              {
                icon: BarChart3,
                title: "Performance Insights",
                desc: "Real-time analytics and detailed monthly performance reports.",
                color: "from-red-400 to-red-600",
              },
              {
                icon: Shield,
                title: "Risk-Free Partnership",
                desc: "Flexible terms with performance guarantees and no long-term commitment.",
                color: "from-yellow-400 to-yellow-600",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-pink-50 hover:to-purple-50 transform hover:-translate-y-2"
              >
                <CardContent className="pt-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300 font-protest">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              onClick={handleSalesContact}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-12 py-4 rounded-full shadow-2xl transition-all duration-500 group text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZxdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZ24+PC9zdmc+')]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-protest">Ready to start earning?</h2>
            <p className="text-xl text-purple-200 font-light">
              Get a personalized consultation and launch your passive income stream today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-white font-protest">Start Partnership</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label className="text-white/80 text-sm">Full Name</Label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-white/80 text-sm">Email Address</Label>
                    <Input
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-white/80 text-sm">Phone Number</Label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-white/80 text-sm">Business Details</Label>
                    <Textarea
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Tell us about your location and goals..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-white font-protest">Contact Us</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-white/90 mb-2">Email</h4>
                    <Button
                      onClick={handleSalesContact}
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      sales@vendoxpress.com
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium text-white/90 mb-2">Phone</h4>
                    <p className="text-white text-lg font-medium">+971 50 349 7213</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-white/90 mb-2">Office</h4>
                    <p className="text-white/80">Office 202, 2nd Floor</p>
                    <p className="text-white/80">Bright Idea Business Centre</p>
                    <p className="text-white/80">Al Maktoum Rd, Deira, Dubai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <img src="/images/vendoxpress-logo-gold.png" alt="VendoXpress Logo" className="h-12 w-auto mb-4" />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                UAE's leading provider of premium vending solutions with zero-investment partnership opportunities.
              </p>
              <Button
                onClick={handleSalesContact}
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Massage Chairs</li>
                <li>Photo Booths</li>
                <li>Boxing Arcade</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Free Installation</li>
                <li>Complete Maintenance</li>
                <li>24/7 Support</li>
                <li>Real-time Analytics</li>
                <li>Revenue Optimization</li>
                <li>Partnership Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Office 202, 2nd Floor</p>
                <p>Bright Idea Business Centre</p>
                <p>Al Maktoum Rd, Deira, Dubai</p>
                <p className="pt-2">+971 50 349 7213</p>
                <Button
                  onClick={handleSalesContact}
                  variant="link"
                  className="p-0 h-auto text-sm text-pink-600 hover:text-pink-700"
                >
                  sales@vendoxpress.com
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} VendoXpress LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
