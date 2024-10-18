import React from "react";
import Image from "next/image";
import StrokeButton from "../Buttons/StrokeButton";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface InfoSectionProps {
  id: number;
  title: string;
  text: string;
}

interface ReadMoreProps {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface ImageInfoProps {
  data: {
    id: number;
    imagePositioning: string;
    image: ImageProps;
    infoSection: InfoSectionProps;
    readMore: ReadMoreProps;
  };
}

const ImageInfoSection = ({ data }: Readonly<ImageInfoProps>) => {
  // if(!data || !data)
  console.dir(data, { depth: null });
  return (
    <div className="my-20 mx-auto max-sm:px-3 lg:max-w-6xl">
      <div
        className={`flex justify-between items-center gap-20 ${
          data.imagePositioning === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <Image
          src={`http://localhost:1337${data.image.url}`}
          alt={`http://localhost:1337${data.image.alternativeText}`}
          className="object-contain"
          height={0}
          width={0}
          style={{ width: "auto", height: "400px" }}
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">{data.infoSection.title}</h3>
          <p className="">{data.infoSection.text}</p>
          <div>
            <StrokeButton cta={data.readMore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageInfoSection;
