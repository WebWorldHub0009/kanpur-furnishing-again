// src/components/WhyChooseUs.jsx
import React, { useState, useEffect } from "react";
import { FaBuilding, FaLeaf, FaUsers, FaRegHandshake } from "react-icons/fa";
import bgImg from "../assets/images/hero/3.jpg";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
  b8120: "#B8120C",
};

export default function WhyChooseUs() {
  const quotes = [
    "Elegance in every fold — curtains and drapes that define luxury.",
    "Sustainability meets style — premium furnishings for your home.",
    "Trusted craftsmanship — transforming interiors across Kanpur and beyond.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})`, fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col justify-between h-full py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-10">
          {/* Left Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wide"
            style={{ color: colors.gold, fontFamily: "'Great Vibes', cursive" }}
          >
            WHY <br /> CHOOSE US?
          </h2>

          {/* Right Quote */}
          <blockquote
            className="text-lg sm:text-xl md:text-2xl italic font-light max-w-lg leading-relaxed transition-all duration-500"
            style={{ color: colors.cream }}
          >
            “{quotes[currentQuote]}”
          </blockquote>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-8">
          {[
            {
              icon: <FaBuilding className="text-3xl mb-3" style={{ color: colors.gold }} />,
              title: "Architectural Excellence",
              desc: "Iconic projects built with precision, passion, and timeless design.",
            },
            {
              icon: <FaLeaf className="text-3xl mb-3" style={{ color: colors.gold }} />,
              title: "Sustainability First",
              desc: "Eco-conscious materials and finishes for a greener tomorrow.",
            },
            {
              icon: <FaUsers className="text-3xl mb-3" style={{ color: colors.gold }} />,
              title: "Customer-Centric",
              desc: "Your vision, our craftsmanship — creating spaces that feel yours.",
            },
            {
              icon: <FaRegHandshake className="text-3xl mb-3" style={{ color: colors.gold }} />,
              title: "Trusted Legacy",
              desc: "A name synonymous with excellence and enduring trust.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/30 border border-[#D4AF37]/30 backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              {feature.icon}
              <h4
                className="font-bold text-lg mt-2 mb-1"
                style={{ fontFamily: "'Poppins', sans-serif", color: colors.gold }}
              >
                {feature.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.cream }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
