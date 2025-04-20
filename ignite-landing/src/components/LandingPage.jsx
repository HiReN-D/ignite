import React from "react";
import { FaRocket, FaUsers, FaHandshake, FaLaptopCode, FaLightbulb, FaUniversity, FaCode, FaUserTie, FaSeedling } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/70 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Ignite Logo" className="h-10" />
            {/* <span className="text-lg font-bold">Ignite</span> */}
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex gap-6 items-center">
              <a href="#how" className="hover:text-blue-600 transition-colors duration-200">How it works</a>
              <a href="#entrepreneurs" className="hover:text-blue-600 transition-colors duration-200">For Entrepreneurs</a>
              <a href="#professors" className="hover:text-blue-600 transition-colors duration-200">For Professors</a>
            </div>
            <a href="#" className="bg-[#1565D8] text-white px-5 py-2 rounded text-sm hover:opacity-90 transition">Join Waitlist</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6 bg-white/40 backdrop-blur-xl max-w-5xl mx-auto transition-opacity duration-700 ease-in-out">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Where startups meet student builders.</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Launch your MVP through university-led project collaborations.</p>
          <a href="#" className="inline-block bg-[#1565D8] text-white px-6 py-3 rounded-md text-base hover:opacity-90 transition">Join the waitlist</a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 px-6 bg-gray-50 max-w-5xl mx-auto text-left transition-transform duration-500 ease-in-out">
        <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <FaLightbulb className="text-[#1565D8] text-xl mt-1 hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-xl font-bold mb-2">Pitch your startup</h3>
              <p className="text-gray-600">Tell us your idea, goals, and what help you need.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaUniversity className="text-[#1565D8] text-xl mt-1 hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-xl font-bold mb-2">Get matched with a course</h3>
              <p className="text-gray-600">We match you with a student team in an HCI or design class.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCode className="text-[#1565D8] text-xl mt-1 hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-xl font-bold mb-2">Build and collaborate</h3>
              <p className="text-gray-600">Students build your MVP under faculty guidance over 8–12 weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ignite Works */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-left transition-transform duration-500 ease-in-out">
        <h2 className="text-3xl font-semibold mb-12">Why Ignite Works</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex items-start gap-4">
            <FaRocket className="text-[#1565D8] text-xl mt-1 hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-lg font-semibold">Launch faster</h3>
              <p className="text-gray-600">Skip hiring delays and dev costs.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaUsers className="text-[#1565D8] text-xl mt-1 hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-lg font-semibold">Built by student teams</h3>
              <p className="text-gray-600">Real-world projects, guided by professors.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaHandshake className="text-[#1565D8] text-xl mt-1 hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-lg font-semibold">Win-win collaboration</h3>
              <p className="text-gray-600">Founders launch, students learn.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaLaptopCode className="text-[#1565D8] text-xl mt-1 hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-lg font-semibold">Practical MVPs</h3>
              <p className="text-gray-600">Not just mockups, but functioning prototypes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="entrepreneurs" className="py-16 px-6 bg-gray-50 max-w-5xl mx-auto text-left transition-transform duration-500 ease-in-out">
        <h2 className="text-3xl font-semibold mb-12">Who It’s For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <FaUserTie className="text-[#1565D8] mt-1" />
            <p>Accelerator-backed startups</p>
          </div>
          <div className="flex items-start gap-3">
            <FaSeedling className="text-[#1565D8] mt-1" />
            <p>Solo founders validating ideas</p>
          </div>
          <div className="flex items-start gap-3">
            <FaUsers className="text-[#1565D8] mt-1" />
            <p>Bootstrapped teams</p>
          </div>
          <div className="flex items-start gap-3">
            <FaLightbulb className="text-[#1565D8] mt-1" />
            <p>We help with the rest</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-left transition-opacity duration-700 ease-in-out">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to bring your startup idea to life?</h2>
        <p className="text-gray-600 mb-8">Let’s match you with a student team this Fall.</p>
        <a href="#" className="inline-block bg-[#1565D8] text-white px-6 py-3 rounded-md text-base hover:opacity-90 transition">Join the waitlist</a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        <p>© 2025 Ignite. All rights reserved.</p>
        <p>Email: hello@igniteplatform.xyz</p>
      </footer>
    </div>
  );
}
