import {
  Car,
  Home,
  Shirt,
  Factory,
  Gamepad2,
  Utensils,
  Smartphone,
  Fuel,
  Biohazard,
  Wind,
  Radiation,
  Atom,
  Shield,
  BrickWall,
} from "lucide-react";
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";

import QuoteButton from "@/components/reusable-components/testing-quote-button";

type Industry = {
  name: string;
  description: string;
  imageUrl: string;
  icon: JSX.Element;
};

export const industries: Industry[] = [
  {
    name: "Manufacturing Industry",
    description:
      "Non-Destructive Testing (NDT) is a key part of quality assurance in the manufacturing sector. It allows for the detection of surface and subsurface defects in raw materials and finished products without causing any damage. By ensuring the integrity of components during production, NDT helps manufacturers maintain high safety and quality standards. It also supports compliance with industry regulations and reduces the risk of costly product recalls. As manufacturing processes become more advanced, the need for reliable inspection techniques continues to grow. NDT provides the confidence needed to meet performance and durability expectations.",
    imageUrl: "",
    icon: <Factory className=" text-blue-600" />,
  },
  {
    name: "Oil & Gas - Onshore & Offshore",
    description:
      "The oil and gas industry operates in some of the most demanding environments, both onshore and offshore. NDT is essential for maintaining the integrity of critical assets, helping to identify early signs of corrosion, fatigue, or structural damage. Regular inspection through NDT minimizes the risk of leaks, failures, and unplanned shutdowns, which can be extremely costly and hazardous. These techniques allow for safe operation while avoiding disruption to production. NDT also plays a vital role in extending asset lifespan and ensuring environmental and worker safety. Its non-invasive nature makes it ideal for inspecting hard-to-reach or hazardous areas.",
    imageUrl: "",
    icon: <Fuel className=" text-green-600" />,
  },
  {
    name: "Chemicals/Fertilizers",
    description:
      "In the chemical and fertilizer industries, equipment often operates under high pressure and in corrosive environments. NDT is used to inspect the condition of critical infrastructure without halting operations, making it a cost-effective solution for regular maintenance. By detecting internal and external flaws, it helps prevent leaks, equipment failure, and environmental hazards. The use of NDT improves plant reliability, worker safety, and regulatory compliance. It also aids in planning maintenance schedules and reducing downtime. This proactive approach enhances overall operational efficiency and sustainability in chemical processing facilities.",
    imageUrl: "",
    icon: <Biohazard className=" text-blue-600" />,
  },
  {
    name: "Wind Mill",
    description:
      "As renewable energy sources grow in importance, NDT supports the wind energy sector by ensuring the safety and performance of wind turbine components. These systems are subject to constant environmental stress and vibration, making regular inspection critical. NDT helps identify structural flaws, material fatigue, and other defects before they lead to serious damage. Since inspections can be performed without dismantling components, NDT is ideal for minimizing downtime. It contributes to more efficient maintenance planning and longer equipment life. Ultimately, it supports the safe and sustainable operation of wind farms.",
    imageUrl: "",
    icon: <Wind className=" text-green-600" />,
  },
  {
    name: "Power Plant",
    description:
      "Power plants—whether fossil-fuel, nuclear, or renewable—depend on the continuous operation of complex and high-stress systems. NDT plays a vital role in ensuring the reliability of these systems by detecting cracks, wear, and material degradation without interrupting service. By monitoring the condition of components in real time, operators can plan preventive maintenance more effectively. This helps avoid unplanned outages and costly repairs. NDT enhances the safety of plant personnel and supports compliance with strict regulatory standards. Its application improves the overall efficiency and lifespan of power generation infrastructure.",
    imageUrl: "",
    icon: <Radiation className=" text-blue-600" />,
  },
  {
    name: "Petrochemical Refineries",
    description:
      "Petrochemical refineries handle flammable and hazardous substances, making safety and reliability top priorities. NDT provides a non-invasive method for inspecting equipment under continuous operation, helping identify early-stage corrosion, erosion, or material fatigue. These techniques are critical in preventing environmental incidents and ensuring regulatory compliance. Regular testing ensures that essential systems remain operational and safe, even under harsh chemical conditions. NDT also supports lifecycle management by assessing component durability. Its use ultimately reduces repair costs and supports long-term operational stability.",
    imageUrl: "",
    icon: <Atom className=" text-green-600" />,
  },
  {
    name: "Defence",
    description:
      "In the defence industry, precision and reliability are non-negotiable. NDT is used extensively to verify the structural integrity of components used in aircraft, naval vessels, and defense equipment—without compromising the usability of the part. By identifying defects that may not be visible to the naked eye, NDT enhances the safety, functionality, and readiness of mission-critical assets. These inspections must meet strict quality and documentation standards, making accuracy essential. The non-destructive nature of the testing is especially valuable when dealing with expensive or limited-quantity materials. NDT helps defence organizations maintain safety and performance while reducing risk.",
    imageUrl: "",
    icon: <Shield className=" text-blue-600" />,
  },
  {
    name: "Cement plant",
    description:
      "Cement plants rely on heavy machinery and large-scale equipment that must operate reliably under intense working conditions. NDT techniques are employed to monitor structural integrity and detect early signs of fatigue, wear, or cracking. This enables maintenance teams to act before problems escalate, avoiding unexpected failures and production stoppages. Because the equipment is large and complex, non-destructive testing is ideal for inspecting critical areas without dismantling. By improving predictive maintenance practices, NDT helps increase uptime and extend equipment lifespan. It also contributes to safer working environments and better cost control.",
    imageUrl: "",
    icon: <BrickWall className=" text-green-600" />,
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <section className=" w-full">
        <img src="/industries.png" alt="industries" className=" mx-auto" />
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive testing and inspection services span across
            multiple industries, ensuring quality and compliance for diverse
            product categories.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className=" px-4 mt-8">
        {/* <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-t from-green-500 to-blue-500 text-transparent bg-clip-text my-6 flex justify-center">
          Conventional Services
        </h1> */}
        <div className="container mx-auto max-w-6xl mt-4">
          <div className="grid gap-12">
            {industries.map((industry, index) => (
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
                      {/* <Factory className="w-6 h-6 text-blue-600" /> */}
                      {industry.icon && industry.icon}
                    </div>
                    <h2 className=" text-xl sm:text-3xl font-bold text-gray-900">
                      {industry.name}
                    </h2>
                  </div>
                  <p className=" text-gray-600 leading-relaxed text-justify">
                    {industry.description}
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
                    src={`/${industry.imageUrl}`}
                    alt="Product testing laboratory"
                    className="rounded-lg shadow-xl w-full h-full border border-black"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 px-4 mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Testing for Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our industry experts to discuss your specific testing
            requirements and compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white hover:bg-gray-100 rounded-md shadow-sm transition-colors"
            >
              Get Industry Quote
            </Link> */}
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
  );
}
