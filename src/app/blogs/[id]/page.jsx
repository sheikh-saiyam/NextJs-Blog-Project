const BlogDetails = async ({ params }) => {
  const { id } = await params;
  // Get single blog by id -->
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();g
  return <div></div>;
};

export default BlogDetails;
