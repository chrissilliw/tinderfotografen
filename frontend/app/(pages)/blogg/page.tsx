import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import BlogHeader from "./components/BlogHeader";
import Blog from "./components/Blog";
import { IBlog, IBlogResponse } from "@/app/models/IBlogPost";

const BlogPage = ({ blogs }: { blogs: IBlog[] }) => {
  const router = useRouter();
  const { search } = router.query;

  return (
    <>
      {/* <BlogHeader onSearch={(term) => router.push(`/blog?search=${term}`)} /> */}
      <div className="py-6 flex items-center justify-between mx-auto max-sm:px-3 lg:max-w-7xl">
        <Blog blogs={blogs} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const search = context.query.search || "";
  const res = await fetch(`http://localhost:1337/api/bloggs?search=${search}`);
  const data: IBlogResponse = await res.json();

  return {
    props: { blogs: data.data },
  };
};

export default BlogPage;
