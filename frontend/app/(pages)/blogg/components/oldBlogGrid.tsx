"use client";

import { fetchBlogs, getBlogs } from "@/services/blogQueries/strapiFetch";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  // const blogsData = await getBlogs("/api/blogs");

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const blogData = await getBlogs("/api/blogs");
  //       setBlogs(blogData?.data || []);
  //     } catch (error) {
  //       console.error("Error fetching blogs: ", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  useEffect(() => {
    const newBlogs = async () => {
      try {
        const bloggs = await fetchBlogs("/api/bloggs?/populate=*/");
        setBlogs(bloggs?.data || []);
        console.log("Nya Blogs: ", bloggs);
        return bloggs;
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false);
      }
    };

    newBlogs();
  }, []);

  if (loading) return <div>Loading blogs...</div>;

  return (
    <div>
      {/* <BlogCard /> */}
      {blogs.map((blog) => (
        <div className="" key={blog.id}>
          <h2 className="font-semibold">{blog.attributes.Title}</h2>

          {/* <BlocksRenderer
            content={blog.attributes.Description as BlocksContent}
          /> */}
          <p>
            {blog.attributes.Description.find(
              (block: any) => block.type === "paragraph"
            )?.children.find((child: any) => child.type === "text")?.text ||
              "No content available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
