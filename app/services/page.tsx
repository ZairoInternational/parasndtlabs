import Link from "next/link";
import { CheckCircle, Microscope } from "lucide-react";

import { advancedServices, conventionalServcies } from "@/utils";
import QuoteButton from "@/components/reusable-components/testing-quote-button";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 mt-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive quality testing and inspection services designed to
            ensure your products meet the highest standards of safety, quality,
            and compliance.
          </p>
        </div>
      </section>

      {/* Conventional Services */}
      <section className=" px-4 mt-12">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-t from-green-500 to-blue-500 text-transparent bg-clip-text my-6 flex justify-center">
          Conventional Services
        </h1>
        <div className="container mx-auto max-w-6xl mt-4">
          <div className="grid gap-12">
            {conventionalServcies.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-x-12 gap-y-8 items-center`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 0
                      ? " order-last md:order-first"
                      : "order-last md:order-last"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className=" text-xl sm:text-3xl font-bold text-gray-900">
                      {service.name}
                    </h2>
                  </div>
                  <p className=" text-gray-600 leading-relaxed text-justify">
                    {service.description}
                  </p>
                  <QuoteButton />
                </div>
                <div
                  className={`relative ${
                    index % 2 === 1
                      ? " order-first md:order-first"
                      : "order-first md:order-last"
                  }`}
                >
                  <img
                    src={`/testing/${service.imageUrl}`}
                    alt="Product testing laboratory"
                    className="rounded-lg shadow-xl w-full h-full border border-black"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Services */}
      <section className=" px-4 mt-16">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-t from-green-500 to-blue-500 text-transparent bg-clip-text my-6 flex justify-center">
          Advanced Services
        </h1>
        <div className="container mx-auto max-w-6xl mt-4">
          <div className="grid gap-12">
            {advancedServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 0
                      ? " order-last md:order-first"
                      : "order-last md:order-last"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-xl sm:text-3xl font-bold text-gray-900">
                      {service.name}
                    </h2>
                  </div>
                  <p className=" text-gray-600 leading-relaxed text-justify">
                    {service.description}
                  </p>
                  <QuoteButton />
                </div>
                <div
                  className={`relative ${
                    index % 2 === 1
                      ? " order-first md:order-first"
                      : "order-first md:order-last"
                  }`}
                >
                  <img
                    src={`/testing/${service.imageUrl}`}
                    alt="Product testing laboratory"
                    className="rounded-lg shadow-xl w-full h-full -rotate-3 hover:rotate-0 transform transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining Life Assessment */}
      <section className=" px-4 mt-16">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-t from-green-500 to-blue-500 text-transparent bg-clip-text flex justify-center">
          Remaining Life Assessment
        </h1>
        <div className="container mx-auto max-w-6xl mt-4">
          <div className="grid gap-12">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className=" text-gray-600 leading-relaxed text-justify">
                  Remaining life assessment (RLA) is an important tool in
                  securing the operational safety of aged structures and plants.
                  RLA combined with risk based inspection can prevent unforeseen
                  outages and failures that can have tragic and costly
                  consequences. With RLA as part of a fitness for service (FFS)
                  assessment the full service life of individual mechanical
                  components can be safely utilized. The key point in
                  determining the remaining life of a mechanical component is
                  determining when structural integrity becomes critical due to
                  progressive damage caused by the applicable damage
                  mechanism(s). Due to continuous use under high temperature,
                  pressure and critical environmental conditions, material
                  properties are degraded. Damage due to creep, fatigue and
                  corrosion are irreversible and essential to predict remaining
                  life.
                </p>
                <QuoteButton />
              </div>
              <div className=" border border-black">
                <img
                  src={`/testing/`}
                  alt="Product testing laboratory"
                  className="rounded-lg shadow-xl w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Site Metallography */}
      <section className=" px-4 mt-16">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-t from-green-500 to-blue-500 text-transparent bg-clip-text flex justify-center my-12">
          In-Situ Metallography
        </h1>
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className=" order-last">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className=" text-gray-600 leading-relaxed text-justify">
                  In-Situ Metallography is an on-site, non-destructive
                  Metallurgical Technique, employed for microscopically
                  observing and documenting the microstructural integrity of
                  many engineering metal parts, castings, forgings, welds,
                  brazed joints, equipment, components, boilers, pressure
                  vessels, main steam pipes, pipelines and all type of
                  structures.
                </p>
                <QuoteButton />
              </div>
              <div className=" border border-black">
                <img
                  src={`/testing/`}
                  alt="Product testing laboratory"
                  className="rounded-lg shadow-xl w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Weld Heat Treatment */}
      <section className=" px-4 mt-16">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-t from-green-500 to-blue-500 text-transparent bg-clip-text flex justify-center">
          Post Weld Heat Treatment
        </h1>
        <div className="container mx-auto max-w-6xl mt-4">
          <div className="grid gap-12">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className=" text-gray-600 leading-relaxed text-justify">
                  Post Weld Heat Treatment or PWHT must be performed after every
                  welding in order to ensure the material strength of the part
                  is retained. PWHT ensures the reduction of residual stresses,
                  controlling material hardness, and enhancement of mechanical
                  strength. <br />
                  Improved metallurgical structure <br />
                  Improved ductility of the material <br />
                  Reduced risk of brittle fracture as ductility increases <br />
                  Relaxed thermal stress due to the redistribution of residual
                  stresses. <br />
                  Tempered metal
                </p>
                <QuoteButton />
              </div>
              <div className=" border border-black">
                <img
                  src={`/testing/`}
                  alt="Product testing laboratory"
                  className="rounded-lg shadow-xl w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDT-Training & Certification */}
      <section className=" px-4 mt-16">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold flex justify-center my-6 bg-gradient-to-tl  from-blue-500 to-green-500 text-transparent bg-clip-text">
          NDT-Training & Certification
        </h1>
        <div className=" container mx-auto max-w-6xl mt-4">
          <img
            src={"/testing/ndt-training.jpg"}
            className=" mx-auto w-full h-64 border border-black"
          />
          <p className=" text-justify mt-4 text-gray-600">
            PARAS Inspection Services a leading NDT Training Provider in
            Ahmedabad. We provide world class NDT Training. Examination and
            Certification in accordance with American Standard ASNT. Our aim is
            to provide high quality training to the professionals to make them
            more competent and confident in delivering their responsibilities in
            the level of quality expected from the industry. We have excellent
            training room equipped with audio, visual power point presentation
            and latest NDT Instruments for Practical Training. Our faculty is
            highly qualified and experienced. We provide NDT Level-I and Level-
            II Training in Ultrasonic Testing, Radiography Training, Magnetic
            Particle Testing. Liquid Penetrant Testing, Eddy Current Testing,
            Visual Testing and Leak Testing. We took NDT training at Adani power
            Plant at Mundra, Tata power plant Mundra, Bhuj boiler, Ratnamani
            pipes & tubes, Indus University & etc.
          </p>
        </div>
      </section>

      {/* NDT LEVEL-III Consultancy */}
      <section className=" px-4 mt-16">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold flex justify-center my-6 bg-gradient-to-tl  from-blue-500 to-green-500 text-transparent bg-clip-text">
          NDT LEVEL-III Consultancy
        </h1>
        <div className=" container mx-auto max-w-6xl">
          <img
            src={"/testing/ndt-training.jpg"}
            className=" mx-auto w-[90vw] h-64 border border-black "
          />
          <p className=" max-w-6xl mx-auto text-justify mt-4 text-gray-600">
            We provide NDT Level-III Consultancy for preparation and approval of
            NDT written practices as per ASNT recommended practice SNTTC-1A or
            CP 189, preparation and approval of NDT procedures for various
            inspection methods as per applicable National or International Code
            and Standard, technical assistance in purchasing and installation of
            NDT equipment or system at client'sworks and operator training to
            run the equipment or system, periodic evaluation and recertification
            of NDT Level -I and Level -II certificate as per guidelines of ASNT
            recommended practice SNT-TC-1Aor CP 189.
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className=" px-4 mt-16">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold flex justify-center my-6 bg-gradient-to-tl  from-blue-500 to-green-500 text-transparent bg-clip-text">
          Third Party Services
        </h1>
        <div className=" max-w-6xl mx-auto text-justify mt-4 text-gray-600">
          A third-party inspection is the assessment or evaluation of your
          products for quality control by an independent third-party inspection
          company. We carry out site inspection for industrial projects.
          Industrial Third-Party inspection refers to independent inspection
          services that are provided by inspection agencies either hired by a
          buyer or seller.We have a team of highly qualified and experienced
          engineers. We provide services for pre-shipment inspection, witness
          important tests and inspection such as technical assessment for shop
          approval, raw material inspection, in-process stage witness, NDE test,
          welding process and heat-treatment process witness, mechanical -
          chemical - metallurgical tests witness, hydro static and dimensional
          measurement witness as per National or International Code, Standard or
          customer specification. We also provide services for NDT audits.
          <div className="flex gap-x-2 items-center">
            <CheckCircle size={18} color="green" /> Consultancy for approval &
            audit for ASME U & R stamp.
          </div>
          <div className="flex gap-x-2 items-center">
            <CheckCircle size={18} color="green" /> Consultancy for approval &
            audit for IBR.
          </div>
          <div className="flex gap-x-2 items-center">
            <CheckCircle size={18} color="green" /> Consultancy for approval &
            audit for API monogram.
          </div>
          <div className="flex gap-x-2 items-center">
            <CheckCircle size={18} color="green" /> Technical audits of Oil &
            Gas installations.
          </div>
          <div className="flex gap-x-2 items-center">
            <CheckCircle size={18} color="green" /> QMS audits as per ISO 9001.
          </div>
          <div className="flex gap-x-2 items-center">
            <CheckCircle size={18} color="green" /> Expediting services.
          </div>
          <div className="flex gap-x-2 items-center">
            <CheckCircle size={18} color="green" /> NDT NABL Technical Audit
            Services
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 px-4 mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your quality testing and inspection
            needs. Our experts are ready to help you ensure product excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-md shadow-sm transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-transparent border border-white hover:bg-white hover:text-blue-600 rounded-md shadow-sm transition-colors"
            >
              Contact Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
