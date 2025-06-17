import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Shield, Users, Award, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Quality Testing & Inspection Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ensuring product quality, safety, and compliance through
                comprehensive testing and inspection services. Your trusted
                partner for quality assurance worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-green-600 bg-white border border-green-600 hover:bg-green-50 rounded-md shadow-sm transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-2">
              <img
                src={"/img1.jpeg"}
                alt="testing"
                className=" rounded-md w-full h-full"
              />
              <img
                src={"/img2.jpg"}
                alt="testing"
                className=" rounded-md w-full h-full"
              />
              <img
                src={"/img3.jpg"}
                alt="testing"
                className=" rounded-md w-full h-full"
              />
              <img
                src={"/img4.jpg"}
                alt="testing"
                className=" rounded-md w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive quality assurance solutions with
              industry-leading expertise and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Certified Excellence
              </h3>
              <p className="text-gray-600">
                ISO certified processes ensuring the highest standards of
                quality and reliability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comprehensive Testing
              </h3>
              <p className="text-gray-600">
                Full spectrum of testing services from product safety to
                environmental compliance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Experienced professionals with deep industry knowledge and
                technical expertise.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Global Recognition
              </h3>
              <p className="text-gray-600">
                Internationally recognized certifications accepted worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive quality assurance solutions tailored to your
              industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <img
                src="/product-testing.jpg"
                alt="Product testing"
                className="rounded-lg mb-6 h-56 w-full "
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Product Testing
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive testing for safety, performance, and regulatory
                compliance across all product categories.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium border border-blue-600 hover:border-blue-800 px-4 py-2 rounded-md transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <img
                src="/factory-audit.jpg"
                alt="Product testing"
                className="rounded-lg mb-6 w-full"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Factory Audits
              </h3>
              <p className="text-gray-600 mb-6">
                Thorough facility inspections to ensure manufacturing quality,
                safety standards, and ethical practices.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium border border-green-600 hover:border-green-800 px-4 py-2 rounded-md transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <img
                src="/quality-inspection.jpg"
                alt="Product testing"
                className="rounded-lg mb-6 w-full"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quality Inspection
              </h3>
              <p className="text-gray-600 mb-6">
                Pre-shipment and in-line inspections to verify product quality
                and specifications before delivery.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium border border-blue-600 hover:border-blue-800 px-4 py-2 rounded-md transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Ensure Your Product Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive testing and inspection services.
            Contact us today for a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-md shadow-sm transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-transparent border border-white hover:bg-white hover:text-blue-600 rounded-md shadow-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
