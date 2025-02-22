export default function HowItWorks() {
  const steps = [
    {
      title: "Sign Up",
      description:
        "Create your account in just a few clicks and join the community.",
      icon: "📝",
    },
    {
      title: "Find Developers",
      description:
        "Connect with developers who share your interests and expertise.",
      icon: "🔍",
    },
    {
      title: "Collaborate on Projects",
      description: "Work together on real-world projects and gain experience.",
      icon: "🤝",
    },
    {
      title: "Grow & Improve",
      description:
        "Get feedback, learn from mentors, and become a better developer.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-16 bg-secondary text-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-lg mb-10 text-gray-300">
          Follow these simple steps to start your journey with us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
