import React from "react";
import { ServiceData } from "../constants/Data";

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make TicketFlow the best choice
            for your support team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServiceData.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-50 mb-4">
                <span className="material-symbols-outlined text-indigo-500 text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
