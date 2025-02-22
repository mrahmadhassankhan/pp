import { useState } from "react";
import { useNavigate } from "react-router";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development 🚀",
    content: "Web development is evolving rapidly with new technologies...",
    author: "John Doe",
    date: "February 22, 2025",
    category: "Tech",
    image: "https://source.unsplash.com/400x250/?technology,web",
  },
  {
    id: "2",
    title: "Mastering React & Next.js in 2025",
    content: "React and Next.js continue to dominate the frontend ecosystem...",
    author: "Jane Smith",
    date: "February 18, 2025",
    category: "Frontend",
    image: "https://source.unsplash.com/400x250/?reactjs,code",
  },
  {
    id: "3",
    title: "Getting Started with TypeScript",
    content: "TypeScript makes JavaScript development more structured...",
    author: "Mike Johnson",
    date: "February 15, 2025",
    category: "Programming",
    image: "https://source.unsplash.com/400x250/?typescript,code",
  },
];

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filteredBlogs = blogPosts.filter((post) => {
    return (
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      {/* 🏷 Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-dark text-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-600 rounded-lg bg-dark text-white"
        >
          <option value="All">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="Frontend">Frontend</option>
          <option value="Programming">Programming</option>
        </select>
      </div>

      {/* 📜 Blog List */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-400">No blog posts found.</p>
        ) : (
          filteredBlogs.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="cursor-pointer bg-secondary rounded-lg p-4 hover:bg-dark transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-400 text-sm">
                {post.date} • {post.category}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
