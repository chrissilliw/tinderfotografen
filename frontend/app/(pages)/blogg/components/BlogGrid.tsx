// import React from "react";

// const BlogGrid = async () => {
//   const API_BASE_URL =
//     process.env.NEXT_PRIVAT_STRAPI_BASE_URL ?? "http://localhost:1337";

//   const res = await fetch(` ${API_BASE_URL}/api/bloggs?populate=*`, {
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_PRIVATE_STRAPI_API_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     cache: "no-store",
//   });

//   const data = await res.json();

//   console.log(data);

//   return (
//     <div>
//       {data.data.map((blog: any) => (
//         <div key={blog.id}>
//           <h2>{blog.attributes.title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogGrid;

import { IBlog } from "@/app/models/IBlogPost";

const BlogGrid = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div>
      {blogs.length === 0 ? (
        <p>Inga inlägg hittades...</p>
      ) : (
        blogs.map((blog) => (
          <article key="{blog.id}">
            <h2>{blog.attributes.title}</h2>
            <p>{blog.attributes.summary}</p>
          </article>
        ))
      )}
    </div>
  );
};

export default BlogGrid;
