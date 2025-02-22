export default function Features() {
  const features = [
    {
      title: "Collaborate Effortlessly",
      description:
        "Work with developers worldwide and build amazing projects together.",
      icon: "🤝",
    },
    {
      title: "Mentorship & Guidance",
      description:
        "Get help from experienced developers and improve your coding skills.",
      icon: "🎓",
    },
    {
      title: "Code Reviews",
      description:
        "Receive constructive feedback on your code and write better software.",
      icon: "📝",
    },
    {
      title: "Community Support",
      description:
        "Join discussions, ask questions, and help others in the community.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-16 bg-secondary text-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Join Programming Partner?
        </h2>
        <p className="text-lg mb-10 text-gray-300">
          Explore the benefits of being part of a thriving developer community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-secondary rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
