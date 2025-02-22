import { motion } from "framer-motion";
import { FaUsers, FaRocket, FaCode, FaGlobe } from "react-icons/fa";

export default function AboutUs() {
  return (
    <main className="bg-dark text-light">
      {/* 🌟 Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] text-center">
        <motion.div
          className="max-w-3xl px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            We Build the Future of Collaboration 🚀
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Empowering developers to connect, innovate, and grow together.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-80"
            whileHover={{ scale: 1.1 }}
          >
            Join Us
          </motion.button>
        </motion.div>
      </section>

      {/* 🎯 Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-gray-300">
              To build a thriving ecosystem where developers learn, work, and
              innovate together.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-gray-300">
              A world where every developer finds the right opportunities to
              grow and excel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🚀 Why Choose Us? */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-400 mt-2">
            We provide the best tools for developers to grow.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaUsers />, title: "Community-Driven" },
              { icon: <FaRocket />, title: "Innovative Projects" },
              { icon: <FaCode />, title: "Open-Source Focused" },
              { icon: <FaGlobe />, title: "Global Network" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-secondary rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 👨‍💻 Meet The Team */}
      <section className="py-16 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
          <p className="text-gray-400 mt-2">The brains behind the platform.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {["Alice", "Bob", "Charlie"].map((name, index) => (
              <motion.div
                key={index}
                className="p-6 bg-dark rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-24 mx-auto bg-gray-700 rounded-full"></div>
                <h3 className="text-xl font-semibold mt-4">{name}</h3>
                <p className="text-gray-400">Software Engineer</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Milestones & Achievements */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Impact</h2>
          <p className="text-gray-400 mt-2">What we've achieved so far.</p>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              { value: "10K+", label: "Developers" },
              { value: "5K+", label: "Projects" },
              { value: "100+", label: "Countries" },
              { value: "1M+", label: "Lines of Code" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-secondary rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
