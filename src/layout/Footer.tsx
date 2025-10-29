import React, { useState } from "react";

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-gray-100 md:border-none pb-4 md:pb-0">
      {/* Mobile Toggle Header */}
      <button
        onClick={() => toggleSection(title)}
        className="flex w-full justify-between items-center md:cursor-default md:pointer-events-none"
      >
        <h3 className="text-gray-900 font-semibold text-base">{title}</h3>
        <span className="md:hidden text-gray-500 text-xl">
          {openSection === title ? "−" : "+"}
        </span>
      </button>

      {/* Collapsible Content (Mobile) + Always Visible on Desktop */}
      <div
        className={`mt-3 space-y-3 text-sm ${
          openSection === title ? "block" : "hidden md:block"
        }`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="material-symbols-outlined text-indigo-500 text-2xl sm:text-3xl">
                confirmation_number
              </span>
              <h2 className="text-gray-900 text-lg sm:text-xl font-bold">
                TicketFlow
              </h2>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-xs mx-auto md:mx-0">
              Streamline your support, one ticket at a time.
            </p>
          </div>

          <Section title="Company">
            <ul className="space-y-2">
              <li>
                <a className="text-gray-600 hover:text-indigo-500">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-500">Careers</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </Section>

          <Section title="Legal">
            <ul className="space-y-2">
              <li>
                <a className="text-gray-600 hover:text-indigo-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </Section>

          <Section title="Contact">
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="material-symbols-outlined text-gray-500 text-lg">
                  mail
                </span>
                <a
                  href="mailto:support@ticketflow.com"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  support@ticketflow.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="material-symbols-outlined text-gray-500 text-lg">
                  phone
                </span>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </Section>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} TicketFlow. All rights reserved.
          </p>

          <div className="flex gap-4 justify-center">
            {/* Icons reduced on mobile */}
            <a className="text-gray-500 hover:text-indigo-500">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
              </svg>
            </a>

            <a className="text-gray-500 hover:text-indigo-500">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477..."
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
