import BlogCard from "@/components/Card/BlogCard";

const Blogs = async () => {
  // Get all blogs --->
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  return (
    <div>
      <div className="pb-6">
        <h3 className="text-gray-800">---Explore All Blogs---</h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-3">All Blogs</h1>
      </div>
      {/* blogs container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {/* blogs container */}
    </div>
  );
};

export default Blogs;
