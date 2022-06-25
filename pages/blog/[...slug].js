import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h2>This is blog post page</h2>
    </div>
  );
};

export default BlogPostPage;
