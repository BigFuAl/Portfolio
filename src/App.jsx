import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <>                {/* Only one top-level fragment */}
      <Navbar />      {/* Navbar at the very top */}

      {/* Hero Section */}
      <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-6 lg:px-0">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            Aliou Cissé
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            Full Stack Developer in the making – blending design, logic, and soul.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition"
          >
            View Projects
          </a>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 text-white py-20 px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Smart Daily Dashboard</h3>
              <p className="text-gray-300 mb-4 text-sm">
                A productivity tool built with React, featuring local storage and Azure Static Web App deployment.
              </p>
            </div>
            <a
              href="https://purple-desert-05ab2150f.6.azurestaticapps.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">ADHD-Friendly Budget Tracker</h3>
              <p className="text-gray-300 mb-4 text-sm">
                A full stack budgeting tool with MongoDB, authentication, and clean UI – built from scratch.
              </p>
            </div>
            <span className="text-gray-500 italic text-sm">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-950 text-white py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a developer-in-progress with a background in economics, a passion for building meaningful tools, and a commitment to doing the work – even when it’s hard. I’m learning full stack development from the ground up, building every project with intention, clarity, and heart.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you want to collaborate, ask a question, or just say hello – I’d love to hear from you.
          </p>
          <a
            href="mailto:aliou_cisse221@icloud.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Email Me
          </a>
        </div>
      </section>
    </>
  );
}

export default App;