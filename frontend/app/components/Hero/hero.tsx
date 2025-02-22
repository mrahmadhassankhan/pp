export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="./cover.png"
        alt="Hero Cover"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Build Together, Learn Together, Grow Together!
        </h1>
        <p className="text-lg max-w-2xl mt-4 opacity-90">
          Join a community of passionate individuals, find your perfect partner,
          collaborate on exciting projects, and take your skills to the next
          level.
        </p>
        <button className="mt-6 px-6 py-3 bg-secondary text-white text-lg font-semibold rounded-md hover:bg-opacity-80 transition">
          Find Your Partner
        </button>
      </div>
    </section>
  );
}
