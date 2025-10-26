import { useState } from "react";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#F9FAFB] font-[Poppins] text-[#101828]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F9FAFB] shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#7F56D9] text-3xl">
                webhook
              </span>
              <h1 className="text-xl font-bold">Supportify</h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#7F56D9]/10 text-[#7F56D9] font-medium"
                >
                  <span className="material-symbols-outlined">
                    confirmation_number
                  </span>
                  <span>Ticket Management</span>
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D0D5DD] flex items-center justify-center font-bold text-white">
                  JD
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">John Doe</p>
                </div>
              </div>

              <button className="flex items-center justify-center rounded-2xl h-10 px-6 bg-[#7F56D9] text-white text-sm font-semibold shadow hover:bg-[#6E48C4] transition-colors">
                Logout
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-[#101828]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-[#F9FAFB] border-t border-[#D0D5DD]/50 md:hidden">
            <div className="px-4 pt-3 pb-4 space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-2xl text-base font-medium text-[#7F56D9] bg-[#7F56D9]/10"
              >
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>
                Ticket Management
              </a>

              <div className="border-t border-[#D0D5DD]/40 my-3"></div>

              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-10 h-10 rounded-full bg-[#D0D5DD] flex items-center justify-center font-bold text-white">
                  JD
                </div>
                <p className="font-medium">John Doe</p>
              </div>

              <button className="w-full flex items-center justify-center rounded-2xl h-10 px-6 bg-[#7F56D9] text-white text-sm font-semibold shadow hover:bg-[#6E48C4] transition-colors">
                Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Total Tickets",
                value: "1,250",
                icon: "inbox",
              },
              {
                title: "Open Tickets",
                value: "823",
                icon: "draft",
              },
              {
                title: "Resolved Tickets",
                value: "427",
                icon: "task_alt",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow border border-[#D0D5DD]/30 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#7F56D9]/10 p-2 rounded-full">
                    <span className="material-symbols-outlined text-[#7F56D9]">
                      {card.icon}
                    </span>
                  </div>
                  <p className="text-lg font-medium">{card.title}</p>
                </div>
                <p className="text-4xl font-bold">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] mt-auto border-t border-[#D0D5DD]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-[#98A2B3]">
          © 2025 Supportify. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
