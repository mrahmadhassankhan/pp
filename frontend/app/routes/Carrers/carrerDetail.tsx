import { useEffect } from "react";
import { useParams } from "react-router";

// Define the job detail type
type JobDetail = {
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
};

// Job details object
const jobDetails: Record<string, JobDetail> = {
  "frontend-developer": {
    title: "Frontend Developer",
    type: "Full-Time",
    location: "Remote",
    description:
      "We are looking for a skilled frontend developer proficient in React, TypeScript, and Tailwind CSS.",
    requirements: [
      "Experience with React.js and modern frontend technologies.",
      "Strong knowledge of HTML, CSS, and JavaScript.",
      "Familiarity with Git and version control.",
    ],
  },
  "backend-engineer": {
    title: "Backend Engineer",
    type: "Full-Time",
    location: "Remote",
    description:
      "We need a backend engineer with expertise in Node.js, Express, and PostgreSQL.",
    requirements: [
      "Experience in designing RESTful APIs.",
      "Proficiency in Node.js and Express.",
      "Knowledge of SQL databases like PostgreSQL.",
    ],
  },
};

export default function CareerDetail() {
  const { jobTitle } = useParams<{ jobTitle: string }>();
  useEffect(() => {
    console.log("Job Title from useParams:", jobTitle);
  }, [jobTitle]);

  const job = jobTitle?.toLowerCase() ? jobDetails[jobTitle] : undefined;

  if (!job) {
    return <h2 className="text-center text-2xl font-bold">Job not found</h2>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-dark text-light rounded-lg">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-400">
        {job.type} | {job.location}
      </p>
      <p className="mt-4">{job.description}</p>
      <h2 className="mt-6 text-xl font-bold">Requirements:</h2>
      <ul className="list-disc pl-6 mt-2">
        {job.requirements.map((req, index) => (
          <li key={index} className="text-gray-400">
            {req}
          </li>
        ))}
      </ul>
      <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg">
        Apply Now
      </button>
    </main>
  );
}
