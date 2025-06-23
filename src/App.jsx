function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white px-6 py-12 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
          Aliou Cissé
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full Stack Developer in the making — blending design, logic, and soul.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition"
        >
          View Projects
        </a>
      </main>

      <section
        id="projects"
        className="bg-gray-900 text-white py-16 px-6 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid gap-8 max-w-4xl w-full sm:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">Smart Daily Dashboard</h3>
            <p className="text-gray-300 mb-4 text-sm">
              A productivity tool built with React, featuring local storage and Azure Static Web App deployment.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm"
            >
              View Project
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">ADHD-Friendly Budget Tracker</h3>
            <p className="text-gray-300 mb-4 text-sm">
              A full stack budgeting tool with MongoDB, authentication, and clean UI — built from scratch.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
      <section
  id="about"
  className="bg-gray-950 text-white py-20 px-6 flex flex-col items-center text-center"
>
  <h2 className="text-4xl font-bold mb-6">About Me</h2>
  <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
    I'm a developer-in-progress with a background in economics, a passion for building meaningful tools,
    and a commitment to doing the work — even when it's hard. I’m learning full stack development from the ground up,
    building every project with intention, clarity, and heart.
  </p>
</section>
<section
  id="contact"
  className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
>
  <h2 className="text-4xl font-bold mb-6">Contact</h2>
  <p className="text-lg text-gray-300 mb-8 max-w-xl">
    Whether you want to collaborate, ask a question, or just say hello — I’d love to hear from you.
  </p>
  <a
    href="mailto:aliou_cisse221@icloud.com"
    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition"
  >
    Email Me
  </a>
</section>
    </>
  );
}

export default App;