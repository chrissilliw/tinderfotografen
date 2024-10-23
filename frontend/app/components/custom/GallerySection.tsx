import React from "react";

const GallerySection = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="mx-auto max-sm:px-3 lg:max-w-6xl">
        <div className="px-2 my-3 grid gap-2 grid-cols-gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className="h-64 bg-orange-300 rounded-xl relative overflow-hidden group"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GallerySection;
