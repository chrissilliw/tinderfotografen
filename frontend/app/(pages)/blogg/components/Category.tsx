import { ICategory, IData } from "@/app/models/ICategory";
import { div } from "framer-motion/client";
import React from "react";

interface Props {
  categories: IData[];
}

const Category = ({ categories }: Props) => {
  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }

  return (
    <>
      <div className="mt-10 flex gap-4 items-center justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="py-2 px-4 bg-orange-200 rounded-full"
          >
            {category.attributes.Title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
