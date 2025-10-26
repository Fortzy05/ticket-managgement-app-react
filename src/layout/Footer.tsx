import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-indigo-500 text-3xl">
                confirmation_number
              </span>
              <h2 className="text-gray-900 text-xl font-bold">TicketFlow</h2>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Streamline your support, one ticket at a time.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500 text-xl">
                  mail
                </span>
                <a
                  href="mailto:support@ticketflow.com"
                  className="text-gray-600 hover:text-indigo-500 transition-colors text-sm"
                >
                  support@ticketflow.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500 text-xl">
                  phone
                </span>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-indigo-500 transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center sm:text-left mb-4 sm:mb-0">
            © {new Date().getFullYear()} TicketFlow. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 018.457 4.9a4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-indigo-500 transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12.013c0 4.418 2.865 8.169 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.013C22 6.477 17.523 2 12 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
