import { useParams, useNavigate } from "react-router";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

// Sample blog data with Unsplash images
const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development 🚀",
    content: `Web development is evolving rapidly with new technologies like AI, WebAssembly, and serverless architectures. In this post, we explore how these innovations are shaping the future.`,
    author: "John Doe",
    date: "February 22, 2025",
    category: "Tech",
    image: "https://source.unsplash.com/900x500/?technology,ai,web",
  },
  {
    id: "2",
    title: "Mastering React & Next.js in 2025",
    content: `React and Next.js continue to dominate the frontend ecosystem. This guide dives deep into the latest updates and best practices.`,
    author: "Jane Smith",
    date: "February 18, 2025",
    category: "Frontend",
    image: "https://source.unsplash.com/900x500/?reactjs,code,developer",
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogPosts.find((post) => post.id === id);

  if (!blog)
    return (
      <div className="text-center py-20 text-gray-400">Blog not found!</div>
    );

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      {/* 📝 Blog Header */}
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <div className="flex items-center justify-between text-gray-400 mt-3">
        <p>
          By {blog.author} • {blog.date}
        </p>
        <div className="flex gap-4">
          <FaTwitter className="cursor-pointer hover:text-primary" />
          <FaLinkedin className="cursor-pointer hover:text-primary" />
          <FaFacebook className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* 🖼 Blog Image (Unsplash) */}
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-lg my-6 shadow-md object-cover w-full h-[400px]"
      />

      {/* 📜 Blog Content */}
      <article className="text-lg text-gray-300 leading-relaxed">
        {blog.content}
      </article>

      {/* 🔗 Related Posts */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Related Posts</h3>
        <div className="mt-4 space-y-4">
          {blogPosts
            .filter((post) => post.id !== id)
            .map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="cursor-pointer p-4 bg-secondary rounded-lg hover:bg-dark transition"
              >
                <h4 className="text-xl font-medium">{post.title}</h4>
                <p className="text-gray-400 text-sm">{post.date}</p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
