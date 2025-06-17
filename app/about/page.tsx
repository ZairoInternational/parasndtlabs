import Image from "next/image"
import { Users, Award, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About QualityTest Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience in quality assurance, we are your trusted partner for comprehensive
              testing and inspection services worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2009, Paras Inspection Service emerged from a vision to provide world-class quality assurance services
                that businesses could trust. What started as a small testing laboratory has grown into a global network
                of quality experts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve over 2,000 clients across 50+ countries, helping them ensure product safety, compliance,
                and quality excellence. Our commitment to innovation and customer satisfaction drives everything we do.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our laboratory facility"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Certifications</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide comprehensive, reliable, and innovative quality testing and inspection services that help our
                clients deliver safe, compliant, and high-quality products to market while building consumer trust and
                protecting brand reputation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global leader in quality assurance services, setting industry standards for excellence,
                innovation, and customer satisfaction while contributing to a safer and more sustainable world through
                rigorous testing and inspection practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving our commitment to quality excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="CEO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600">
                15+ years in quality assurance with expertise in international standards and regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="CTO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-green-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-600">
                Leading innovation in testing methodologies and laboratory automation technologies.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="COO"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-600">
                Ensuring operational excellence and customer satisfaction across all service lines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
