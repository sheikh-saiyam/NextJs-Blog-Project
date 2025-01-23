import BlogCard from "@/components/Card/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  // Get all blogs --->
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();
  return (
    <div>
      <div className="pb-6">
        <h3 className="text-gray-800">---Our Latest Blogs---</h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-3">Explore Blogs</h1>
      </div>
      {/* blogs container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(0, 9).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {/* view more button */}
      <div className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto mt-8">
        <Link href={"/blogs"}>
          <Button className="w-full">View More</Button>
        </Link>
      </div>
    </div>
  );
}
