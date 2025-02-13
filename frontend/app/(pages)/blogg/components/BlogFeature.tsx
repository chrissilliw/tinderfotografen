import Image from "next/image";
import React from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { IBlog } from "@/app/models/IBlogPost";

interface Props {
  blogs: IBlog[];
}

const BlogFeature = ({ blogs }: Props) => {
  // const blogContent: BlocksContent = blogs[0].attributes.content;
  // const title = blogs[0].attributes.Title;
  // console.log("I Blogfeature: ", blogs.[0].attributes.content);
  // console.log("I Blogfeature: ", blogs);

  console.log("Alla bloggar: ", blogs);

  return (
    <>
      <div className="flex gap-6 w-auto">
        {/* Image Container */}
        <div className="w-full h-[300px] bg-slate-300 rounded-md"></div>
        {/* Content Container */}
        {/* <div className="flex flex-col w-max-[200px] h-auto gap-2">
          <div className="text-xs">
            <span>19 Jan 2025</span>
          </div>
          <h2>Titeln</h2>
          <p>
            Med över 10 procent fler matchningar och 20 procent fler meddelanden
            skickade jämfört med resten av året visar sig den...
          </p>
          <div className="flex gap-3 mt-3">
            <div className="py-1 px-2 text-sm border-2 border-gray-800 rounded-full">
              Dejtingtips
            </div>
            <div className="p-1 px-2 text-sm border-2 border-gray-800 rounded-full">
              Visste du att
            </div>
          </div>
        </div> */}
        <div>
          {blogs.map((blog, index) => (
            <div key={index} className="blog-post"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogFeature;
