import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="bg-secondary flex justify-between items-center w-full px-2 bg-primary text-highlight h-14 border-t border-gray-800">
        <Link to="/">
          <span className="text-lg font-semibold">Programming Partner</span>
        </Link>
        <button className="bg-secondary text-white rounded-md hover:bg-opacity-80 transition">
          Get Started
        </button>
      </div>
    </>
  );
}
