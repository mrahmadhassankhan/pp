export default function FAQS() {
  const faqs = [
    {
      question: "What is Programming Partner?",
      answer:
        "Programming Partner is a platform where developers connect, collaborate, and grow together by working on projects and sharing knowledge.",
    },
    {
      question: "Is Programming Partner free to use?",
      answer:
        "Yes! Our core features are completely free. We also offer premium plans with additional benefits.",
    },
    {
      question: "How can I collaborate on projects?",
      answer:
        "You can find projects by joining communities, participating in open-source projects, or creating your own team.",
    },
    {
      question: "Can beginners join?",
      answer:
        "Absolutely! We welcome developers of all skill levels and provide resources to help beginners get started.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Find answers to the most common questions about our platform.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-md border-b border-gray-600"
            >
              <details className="cursor-pointer">
                <summary className="text-lg font-semibold">
                  {faq.question}
                </summary>
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
