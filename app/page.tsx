"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Smartphone,
  CreditCard,
  Wifi,
  Star,
  Building,
  Plane,
  Car,
  ShoppingBag,
  Film,
  Hotel,
  Gamepad2,
  Train,
  ArrowRight,
  Sparkles,
  Wrench,
  Settings,
  Truck,
  Globe,
  BarChart3,
  DollarSign,
  FileX,
  Eye,
} from "lucide-react"
import { useState, useEffect } from "react"

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

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <img src="/images/vendoxpress-logo-new.png" alt="VendoXpress Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Services", "Partnership", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/vendoxpress-demo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/15 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20 text-center">
          <div
            className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Badge className="bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-gradient-to-l hover:from-blue-400 hover:to-purple-600 text-white font-medium mb-6 px-4 py-2 rounded-full shadow-lg transition-all duration-500">
              <Sparkles className="w-4 h-4 mr-2" />
              Commercial Massage Chair Solutions
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-normal mb-6 leading-tight text-white font-arapey">
              Elevate Your Business to{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Higher Satisfaction
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed font-extralight max-w-3xl mx-auto">
              Transform your business with state-of-the-art commercial massage chairs. Trusted supplier in the UAE
              offering modern designs, advanced technology, and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transition-all duration-500 group"
              >
                Start Partnership
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                className="bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white text-gray-900 hover:text-gray-800 font-semibold px-8 py-4 rounded-full transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 hover:bg-gradient-to-l hover:from-blue-100 hover:to-purple-100 text-blue-800 font-medium mb-6 px-4 py-2 rounded-full transition-all duration-500">
              About Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight font-arapey">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                VendoXpress
              </span>{" "}
              LLC
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto font-extralight leading-relaxed">
              We are a trusted supplier of commercial massage chairs in the UAE, offering state-of-the-art technology
              and modern designs that transform businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Professionalism",
                desc: "Exceptional service standards and business ethics",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Star,
                title: "Advanced Equipment",
                desc: "State-of-the-art massage chair technology",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: Building,
                title: "Diverse Range",
                desc: "Comprehensive product portfolio for all needs",
                color: "from-green-400 to-green-600",
              },
              {
                icon: Phone,
                title: "Prompt Response",
                desc: "Quick support and outstanding customer service",
                color: "from-yellow-400 to-yellow-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2"
              >
                <CardContent className="pt-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300 font-arapey">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-200 hover:bg-gradient-to-l hover:from-purple-100 hover:to-blue-200 text-purple-800 font-medium mb-6 px-4 py-2 rounded-full transition-all duration-500">
              Partnership Opportunities
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight font-arapey">
              Perfect{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                Locations
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-extralight">Ideal venues for commercial massage chairs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { icon: Plane, label: "Airports", color: "from-blue-400 to-blue-600" },
              { icon: Train, label: "Metro Stations", color: "from-green-400 to-green-600" },
              { icon: Car, label: "Service Centers", color: "from-red-400 to-red-600" },
              { icon: Film, label: "Cinemas", color: "from-purple-400 to-purple-600" },
              { icon: ShoppingBag, label: "Shopping Malls", color: "from-pink-400 to-pink-600" },
              { icon: Building, label: "Business Venues", color: "from-indigo-400 to-indigo-600" },
              { icon: Gamepad2, label: "Gaming Centers", color: "from-orange-400 to-orange-600" },
              { icon: Hotel, label: "Hotels", color: "from-yellow-400 to-yellow-600" },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-white transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section
        id="partnership"
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-gradient-to-l hover:from-blue-400 hover:to-purple-600 text-white font-medium mb-6 px-4 py-2 rounded-full shadow-lg transition-all duration-500">
              Partnership Benefits
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight font-arapey">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-extralight">With just one square meter of space</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wrench, text: "Free Installation", color: "from-blue-400 to-blue-600" },
              { icon: Settings, text: "Free Maintenance", color: "from-green-400 to-green-600" },
              { icon: Truck, text: "Free Removal", color: "from-red-400 to-red-600" },
              { icon: Globe, text: "Unlimited Online Access", color: "from-purple-400 to-purple-600" },
              { icon: BarChart3, text: "Monthly Sales Reports", color: "from-indigo-400 to-indigo-600" },
              { icon: DollarSign, text: "Monthly Profit Transfer", color: "from-yellow-400 to-yellow-600" },
              { icon: FileX, text: "No Contract Required", color: "from-pink-400 to-pink-600" },
              { icon: Eye, text: "No Hidden Fees", color: "from-orange-400 to-orange-600" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100/50 hover:border-gray-200"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 hover:bg-gradient-to-l hover:from-blue-100 hover:to-purple-100 text-blue-800 font-medium mb-6 px-4 py-2 rounded-full transition-all duration-500">
              Advanced Technology
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight font-arapey">
              Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-extralight mb-12">
              Advanced technology for ultimate customer satisfaction
            </p>
          </div>

          {/* Centered Image */}
          <div className="text-center mb-12">
            <div className="relative inline-block group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="/images/massage-chair-features.png"
                alt="Massage Chair Features"
                className="relative max-w-2xl w-full rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Smartphone, text: "Touch Screen Shortcut Keys", color: "from-blue-400 to-blue-600" },
              { icon: CreditCard, text: "Cashless Payment Options", color: "from-green-400 to-green-600" },
              { icon: Wifi, text: "USB & Wireless Charging", color: "from-purple-400 to-purple-600" },
              { icon: CheckCircle, text: "SL Track Manipulator Movement", color: "from-yellow-400 to-yellow-600" },
              { icon: CheckCircle, text: "Wave Airbag Massage Technology", color: "from-pink-400 to-pink-600" },
              { icon: CheckCircle, text: "Zero Gravity Positioning", color: "from-indigo-400 to-indigo-600" },
              { icon: CheckCircle, text: "Hollow Blow Molding Technology", color: "from-red-400 to-red-600" },
              { icon: CheckCircle, text: "Multi-language Support", color: "from-orange-400 to-orange-600" },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:bg-gray-50 transform hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-light group-hover:text-gray-900 transition-colors duration-300 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg max-w-2xl mx-auto">
              <h4 className="font-normal text-lg mb-6 text-gray-900 font-arapey">Payment Methods Supported</h4>
              <div className="flex flex-wrap justify-center gap-6">
                <img
                  src="/images/visa-logo.png"
                  alt="Visa"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src="/images/mastercard-logo.png"
                  alt="Mastercard"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src="/images/apple-pay-logo.png"
                  alt="Apple Pay"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src="/images/google-pay-logo.png"
                  alt="Google Pay"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src="/images/samsung-pay-logo.png"
                  alt="Samsung Pay"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-gradient-to-l hover:from-blue-400 hover:to-purple-600 text-white font-medium mb-6 px-4 py-2 rounded-full shadow-lg transition-all duration-500">
                Get Started Today
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-normal mb-6 leading-tight font-arapey">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Partner
                </span>{" "}
                with Us?
              </h2>
              <p className="text-lg text-gray-300 font-extralight">
                Get in touch to learn more about our commercial massage chair solutions
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-lg text-gray-900 border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 p-8">
                <CardTitle className="text-2xl font-normal text-center text-gray-900 font-arapey">
                  Request Partnership Information
                </CardTitle>
                <CardDescription className="text-center text-gray-600 text-base font-extralight">
                  Fill out the form below and we'll contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium text-sm">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="border-2 border-gray-200 focus:border-blue-400 rounded-xl p-3 transition-all duration-300 focus:shadow-lg text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium text-sm">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border-2 border-gray-200 focus:border-blue-400 rounded-xl p-3 transition-all duration-300 focus:shadow-lg text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium text-sm">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+971 XX XXX XXXX"
                        required
                        className="border-2 border-gray-200 focus:border-blue-400 rounded-xl p-3 transition-all duration-300 focus:shadow-lg text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700 font-medium text-sm">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter company name"
                        className="border-2 border-gray-200 focus:border-blue-400 rounded-xl p-3 transition-all duration-300 focus:shadow-lg text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-gray-700 font-medium text-sm">
                      Business Type
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-blue-400 rounded-xl p-3 transition-all duration-300 text-sm">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-2">
                        <SelectItem value="airport">Airport</SelectItem>
                        <SelectItem value="metro">Metro Station</SelectItem>
                        <SelectItem value="service-center">Vehicle Service Center</SelectItem>
                        <SelectItem value="cinema">Cinema</SelectItem>
                        <SelectItem value="mall">Shopping Mall</SelectItem>
                        <SelectItem value="business">Business Venue</SelectItem>
                        <SelectItem value="gaming">Gaming Center</SelectItem>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your requirements or ask any questions..."
                      rows={4}
                      className="border-2 border-gray-200 focus:border-blue-400 rounded-xl p-3 transition-all duration-300 focus:shadow-lg resize-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-2xl transition-all duration-500 group"
                  >
                    Submit Partnership Request
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 hover:bg-gradient-to-l hover:from-blue-100 hover:to-purple-100 text-blue-800 font-medium mb-6 px-4 py-2 rounded-full transition-all duration-500">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight font-arapey">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-extralight">We're here to help you get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: [
                  "Office 202 / 2nd Floor",
                  "Bright Idea Business Centre",
                  "Al Maktoum Rd, Al Rigga, Deira, Dubai",
                ],
                color: "from-red-400 to-red-600",
              },
              {
                icon: Phone,
                title: "Phone",
                content: ["+971 56 744 5575", "+971 50 349 7213"],
                color: "from-green-400 to-green-600",
              },
              {
                icon: Mail,
                title: "Email",
                content: ["contact@vendoxpress.com", "sales@vendoxpress.com"],
                color: "from-blue-400 to-blue-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:-translate-y-2"
              >
                <CardContent className="pt-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-normal text-lg mb-4 text-gray-900 font-arapey">{item.title}</h3>
                  <div className="text-gray-600 space-y-1">
                    {item.content.map((line, i) => (
                      <p key={i} className="leading-relaxed text-sm font-light">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6 group">
              <img
                src="/images/vendoxpress-logo-new.png"
                alt="VendoXpress Logo"
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300 filter invert"
              />
            </div>
            <p className="text-gray-400 mb-6 text-base font-extralight max-w-2xl mx-auto leading-relaxed">
              VENDOXPRESS FOR SELLING PRODUCTS & SERVICES BY AUTOMATIC VENDING MACHINES CO. L.L.C
            </p>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} VendoXpress LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
