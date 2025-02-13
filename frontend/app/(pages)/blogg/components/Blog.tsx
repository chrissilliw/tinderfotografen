// import { getBlogs, getCategories } from "@/services/blogQueries/strapiFetch";
// import {
//   BlocksRenderer,
//   type BlocksContent,
// } from "@strapi/blocks-react-renderer";
// import React from "react";
// import Categories from "./Categories";
// import { div } from "framer-motion/client";
// import BlogFeature from "./BlogFeature";
// import BlogSidebar from "./BlogSidebar";
// import BlogGrid from "./BlogGrid";

// const Blog = async () => {
//   const categoryData = await getCategories("/api/categories");

//   if (!categoryData) {
//     return <div>Error loading categories.</div>;
//   }

//   const blogData = await getBlogs("/api/blogs");

//   //   const blogContent: BlocksContent = blogData.data[0].attributes;

//   const blogContent = blogData.data.map((blog: any) => blog.attributes);

//   //   console.log("BlogsContent: ", blogContent);
//   if (!blogData) {
//     return <div>Error loading blogs. </div>;
//   }
//   return (
//     <>
//       <div className="w-full">
//         <Categories categories={categoryData.data} />
//         <h2>Senaste artiklar</h2>
//         <div className="flex justify-between gap-8 my-6">
//           {/* <BlocksRenderer content={blogContent} /> */}
//           <div className="w-[75%]">
//             {/* <BlogFeature blogs={blogContent} /> */}
//             <BlogGrid />
//           </div>
//           <div className="w-[25%]">
//             <BlogSidebar />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;

import BlogGrid from "./BlogGrid";
import { IBlog } from "@/app/models/IBlogPost";
import Category from "./Category";
import { getCategories } from "@/services/blogQueries/strapiFetch";
import { IData } from "@/app/models/ICategory";

const Blog = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div>
      {" "}
      <BlogGrid blogs={blogs} />
    </div>
  );
};

export default Blog;
