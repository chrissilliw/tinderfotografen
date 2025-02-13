import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="blog-wrapper flex flex-row gap-4 overflow-hidden">
      <div className="blog-image flex-1 w-full min-h-full aspect-video bg-red-400 rounded-2xl">
        {" "}
        {/* <Image className="object-cover" src="" alt="" fill={true} /> */}
      </div>
      <div className="blog-content flex flex-col flex-1 mt-4 gap-3">
        <span className="blog-date text-sm">27 januari</span>
        <h3 className="text-lg font-semibold">
          Vi är sämst i Europa på att dejta – här är de 5 bästa tipsen på hur vi
          kan bli bättre
        </h3>
        <p className="blog-summary">
          Även om Tinder, Happn och andra appar tagit över många personers
          dejtingliv – har det visat sig att svenskar är sämst i Europa på att
          gå på dejter. Men du kan vara lugn...
        </p>
        <div className="blog-category rounded-full border-2 w-fit mt-1 px-2 text-sm font-semibold border-stone-600 text-stone-600">
          Visste du att...
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
