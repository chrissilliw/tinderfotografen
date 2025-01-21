import React from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const BlogHeader = () => {
  return (
    <div className="py-10 flex h-full items-center justify-between mx-auto px-16 max-sm:px-3 lg:max-w-6xl rounded-3xl bg-slate-100">
      <div className="z-10 w-1/2 max-w-lg flex flex-col gap-y-5">
        <h1 className="text-4xl font-semibold text-neutral-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          exercitationem et distinctio
        </h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default BlogHeader;
