import { motion } from "framer-motion";
import { Link } from "react-router";

// Define the Job type
type Job = {
  title: string;
  type: string;
  location: string;
  link: string;
};

const jobs: Job[] = [
  {
    title: "Frontend Developer",
    type: "Full-Time",
    location: "Remote",
    link: "frontend-developer",
  },
  {
    title: "Backend Engineer",
    type: "Full-Time",
    location: "Remote",
    link: "backend-engineer",
  },
  {
    title: "Product Designer",
    type: "Full-Time",
    location: "Hybrid",
    link: "product-designer",
  },
  {
    title: "DevOps Engineer",
    type: "Full-Time",
    location: "Remote",
    link: "devops-engineer",
  },
];

export default function Careers() {
  return (
    <main className="bg-dark text-light">
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Open Positions</h2>
          <p className="text-gray-400 mt-2">
            Join us as a full-time employee or intern.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <motion.div
                key={job.link}
                className="p-6 bg-secondary rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-400">
                  {job.type} | {job.location}
                </p>
                <Link to={`/careers/${job.link}`}>
                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                    View Details
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
