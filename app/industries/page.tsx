import Image from "next/image"
import Link from "next/link"
import { Shirt, Smartphone, Home, Car, Utensils, Gamepad2 } from "lucide-react"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive testing and inspection services span across multiple industries, ensuring quality and
            compliance for diverse product categories.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Textiles & Apparel */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shirt className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Textiles & Apparel</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive testing for fabric quality, colorfastness, safety standards, and compliance with
                international textile regulations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Fabric composition analysis</li>
                <li>• Colorfastness testing</li>
                <li>• Chemical safety testing</li>
                <li>• Physical performance testing</li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Textile testing"
                width={300}
                height={200}
                className="rounded-lg w-full"
              />
            </div>

            {/* Electronics */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Electronics</h3>
              <p className="text-gray-600 mb-6">
                Electrical safety, EMC testing, and regulatory compliance for consumer electronics and industrial
                equipment.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Electrical safety testing</li>
                <li>• EMC/EMI testing</li>
                <li>• FCC/CE compliance</li>
                <li>• Performance validation</li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Electronics testing"
                width={300}
                height={200}
                className="rounded-lg w-full"
              />
            </div>

            {/* Home & Garden */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Home & Garden</h3>
              <p className="text-gray-600 mb-6">
                Safety and quality testing for furniture, home appliances, garden tools, and household products.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Furniture safety testing</li>
                <li>• Chemical emissions testing</li>
                <li>• Durability testing</li>
                <li>• Material safety analysis</li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Home products testing"
                width={300}
                height={200}
                className="rounded-lg w-full"
              />
            </div>

            {/* Automotive */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automotive</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive testing for automotive components, materials, and systems to ensure safety and
                performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Component durability testing</li>
                <li>• Material compatibility</li>
                <li>• Environmental testing</li>
                <li>• Safety compliance</li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Automotive testing"
                width={300}
                height={200}
                className="rounded-lg w-full"
              />
            </div>

            {/* Food Contact Materials */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Food Contact Materials</h3>
              <p className="text-gray-600 mb-6">
                Testing for kitchenware, food packaging, and materials that come into contact with food products.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Migration testing</li>
                <li>• FDA compliance</li>
                <li>• EU food contact regulations</li>
                <li>• Chemical safety analysis</li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Food contact testing"
                width={300}
                height={200}
                className="rounded-lg w-full"
              />
            </div>

            {/* Toys & Children's Products */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Toys & Children's Products</h3>
              <p className="text-gray-600 mb-6">
                Specialized safety testing for toys and children's products to ensure compliance with strict safety
                standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• CPSIA compliance</li>
                <li>• EN71 toy safety</li>
                <li>• Chemical safety testing</li>
                <li>• Mechanical hazard testing</li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Toy safety testing"
                width={300}
                height={200}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep understanding of industry-specific requirements ensures accurate testing and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Specialized Knowledge</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experts brings decades of experience across various industries, understanding the unique
                challenges and requirements of each sector. We stay current with evolving regulations and standards to
                provide the most accurate and relevant testing services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Industry-specific testing protocols</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Regulatory compliance expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Market access requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Risk assessment and mitigation</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Industry expertise"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Testing for Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our industry experts to discuss your specific testing requirements and compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-md shadow-sm transition-colors"
            >
              Get Industry Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-transparent border border-white hover:bg-white hover:text-blue-600 rounded-md shadow-sm transition-colors"
            >
              Speak to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
