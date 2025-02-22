import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-secondary text-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-gray-400 text-center mb-10">
          Got a question? We'd love to hear from you. Send us a message, and
          we'll respond as soon as possible.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-secondary p-6 rounded-lg shadow-md border border-gray-600"
        >
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-primary"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-primary"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-primary"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-80 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold mb-2">Our Contact Details</h3>
          <p className="text-gray-400">📍 123 Main Street, City, Country</p>
          <p className="text-gray-400">📞 +1 234 567 890</p>
          <p className="text-gray-400">📧 contact@programmingpartner.com</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition duration-300"
          >
            🌐 Website
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition duration-300"
          >
            📘 Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition duration-300"
          >
            🐦 Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition duration-300"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
