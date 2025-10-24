const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden bg-background-light font-display">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                confirmation_number
              </span>
              <h2 className="text-text-dark text-xl font-bold">TicketFlow</h2>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-text-dark font-medium hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-text-dark font-medium hover:text-primary transition-colors"
              >
                Pricing
              </a>
            </nav>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center justify-center rounded-lg h-10 px-5 bg-transparent text-text-dark text-sm font-bold hover:bg-gray-200 transition-colors">
                Login
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-text-light text-sm font-bold shadow-md hover:bg-primary/90 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative bg-background-light pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
          {/* Background images */}
          <div className="absolute inset-0">
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoq56RIK-16f7uBOzxAPo7nelCQZHoLOoRbUkyprLLkAJPXPkBP6QhJSu1zc4H-CohZCYemhqQRluEGpeZan88U_fnInSaRAAK5hl48ocMJ1fc04oETaw3AL5pmOIDSDF65AYdXbFEPFCOgKEcc9wbqV5evO8Qmk3R0y14YwWRTgTOOMcIcmaU1RB2HCrZrdUGkHO_64j8ngH98z6w6tNYWkOkF0_lYv2F_eXP_pEu2SNhgeSuHnOrre7BMyoKEJguHxrvBXPGmFgn')",
              }}
            ></div>
            <div
              className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-top rotate-180"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoq56RIK-16f7uBOzxAPo7nelCQZHoLOoRbUkyprLLkAJPXPkBP6QhJSu1zc4H-CohZCYemhqQRluEGpeZan88U_fnInSaRAAK5hl48ocMJ1fc04oETaw3AL5pmOIDSDF65AYdXbFEPFCOgKEcc9wbqV5evO8Qmk3R0y14YwWRTgTOOMcIcmaU1RB2HCrZrdUGkHO_64j8ngH98z6w6tNYWkOkF0_lYv2F_eXP_pEu2SNhgeSuHnOrre7BMyoKEJguHxrvBXPGmFgn')",
              }}
            ></div>
          </div>

          {/* Animated floating circles */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 md:w-36 md:h-36 bg-primary rounded-full opacity-20 animate-[pulse_5s_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-20 right-10 md:right-40 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-8 md:left-32 w-24 h-24 md:w-28 md:h-28 bg-secondary rounded-full opacity-30"></div>

          {/* Hero text */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-text-dark leading-tight tracking-tight">
              Streamline Your Support, <br className="hidden md:block" /> One
              Ticket at a Time.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-text-dark/70 max-w-2xl mx-auto">
              TicketFlow helps you manage support tickets efficiently and
              collaboratively across all your projects.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center rounded-2xl h-12 px-8 bg-primary text-text-light text-base font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center rounded-2xl h-12 px-8 bg-secondary text-primary font-bold shadow-lg hover:bg-secondary/80 transition-all transform hover:scale-105">
                Login
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-24 bg-background-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
                Why Choose Us?
              </h2>
              <p className="mt-2 text-base text-text-dark/60 max-w-2xl mx-auto">
                Discover the powerful features that make TicketFlow the best
                choice for your support team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "inbox",
                  title: "Centralized Ticket Management",
                  desc: "Manage all your customer support tickets from one central hub.",
                },
                {
                  icon: "groups",
                  title: "Seamless Collaboration",
                  desc: "Assign tickets, leave internal notes, and work together as a team.",
                },
                {
                  icon: "bar_chart",
                  title: "In-depth Reporting",
                  desc: "Gain valuable insights with our comprehensive reporting and analytics tools.",
                },
                {
                  icon: "bolt",
                  title: "Powerful Automation",
                  desc: "Automate repetitive tasks and workflows to save time and increase efficiency.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-dark/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">
                  confirmation_number
                </span>
                <h2 className="text-text-dark text-xl font-bold">TicketFlow</h2>
              </div>
              <p className="mt-4 text-sm text-text-dark/70">
                Streamline your support, one ticket at a time.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-text-dark font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-text-dark font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-text-dark font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-text-dark/60 text-xl">
                    mail
                  </span>
                  <a
                    href="mailto:support@ticketflow.com"
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    support@ticketflow.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-text-dark/60 text-xl">
                    phone
                  </span>
                  <a
                    href="tel:+1234567890"
                    className="text-text-dark/70 hover:text-primary transition-colors text-sm"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-text-dark/60 text-center sm:text-left mb-4 sm:mb-0">
              © 2025 TicketFlow. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 text-text-dark/60 hover:text-primary transition-colors">
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="GitHub">
                💻
              </a>
              <a href="#" aria-label="LinkedIn">
                🔗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
