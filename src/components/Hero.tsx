import React from "react";
import {Link} from "react-router-dom"
const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F3F4F6] pt-20 pb-28 overflow-hidden font-[Poppins]">
      {/* === Decorative background circles === */}
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

      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-24 md:h-24 bg-indigo-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 md:w-36 md:h-36 bg-indigo-500 rounded-full opacity-20 animate-[pulse_5s_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 w-10 h-10 md:w-12 md:h-12 bg-indigo-300 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-20 right-10 md:right-40 w-16 h-16 md:w-20 md:h-20 bg-indigo-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-8 md:left-32 w-24 h-24 md:w-28 md:h-28 bg-indigo-300 rounded-full opacity-30"></div>

      {/* === Hero Content === */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight tracking-tight">
          Streamline Your Support, <br className="hidden md:block" /> One Ticket
          at a Time.
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          TicketFlow helps you manage support tickets efficiently and
          collaboratively across all your projects.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="create-account" className="w-full sm:w-auto flex items-center cursor-pointer justify-center rounded-2xl h-12 px-8 bg-indigo-600 text-white text-base font-bold shadow-lg hover:bg-indigo-500 transition-all transform hover:scale-105">
            Get Started
          </Link>
          <Link to="login" className="w-full sm:w-auto flex items-center cursor-pointer justify-center rounded-2xl h-12 px-8 bg-indigo-200 text-indigo-700 font-bold shadow-lg hover:bg-indigo-300 transition-all transform hover:scale-105">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
