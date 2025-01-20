import Image from "next/image";
import React from "react";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface HeadingGroupProps {
  id: number;
  text: string;
  image: ImageProps;
}

interface IHeadingImageProps {
  data: {
    headingGroup: HeadingGroupProps;
    image: ImageProps;
  };
}

const HeadingImageSection = ({ data }: Readonly<IHeadingImageProps>) => {
  if (!data || !data.headingGroup || !data.image) {
    return <div>No HeadingImage data available</div>;
  }
  return (
    <>
      <div className="my-20 mx-auto max-sm:px-3 lg:max-w-6xl">
        <div className="relative w-full h-auto flex">
          <div className="h-auto w-[50%] text-8xl font-extrabold uppercase bg-amber-500">
            <h1>{data.headingGroup.text}</h1>
            <Image
              src={`http://localhost:1337${data.headingGroup.image.url}`}
              alt={`http://localhost:1337${data.headingGroup.image.alternativeText}`}
              className="object-contain"
              height={0}
              width={0}
              style={{ width: "300px", height: "auto" }}
            />
          </div>
          <div className="relative w-[90%] translate-x-[0%]">
            <Image
              src={`http://localhost:1337${data.image.url}`}
              alt={`http://localhost:1337${data.image.alternativeText}`}
              className="w-full h-full object-cover rounded-xl bg-red-600"
              height={0}
              width={0}
              // style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadingImageSection;
