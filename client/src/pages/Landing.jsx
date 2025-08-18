function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Project 🚀</h1>
      <p className="text-lg text-gray-300 mb-6">
        This is the landing page built with Vite + React + Tailwind.
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold"
      >
        Get Started
      </a>
    </div>
  );
}
export default Landing;
