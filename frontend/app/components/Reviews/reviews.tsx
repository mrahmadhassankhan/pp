export default function Reviews() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Full Stack Developer",
      review:
        "Programming Partner helped me connect with like-minded developers and work on amazing projects. Highly recommend!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "Frontend Engineer",
      review:
        "This platform is a game-changer! I learned so much and collaborated on real-world projects.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Lee",
      role: "Software Engineer",
      review:
        "Great community and fantastic resources. I found my first open-source project here!",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-16 bg-secondary text-dark">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Developers Say</h2>
        <p className="text-gray-400 mb-10">
          See how Programming Partner has helped developers worldwide.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-lg text-left"
            >
              <p className="text-gray-300 mb-4">"{testimonial.review}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
