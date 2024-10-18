import React, { Dispatch, SetStateAction } from "react";

interface TestimonialProps {
  id: number;
  text: string;
  title: string;
}

interface TestimonialSectionProps {
  data: {
    id: number;
    __component: string;
    testimonial: TestimonialProps[];
  };
}

interface Props {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  data: TestimonialProps[];
}

const TestimonialsDots = ({ imgIndex, setImgIndex, data }: Props) => {
  return (
    <div className=" mt-4 flex w-dull justify-center gap-2">
      {data.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className={`h-3 w-3 rounded-full bg-lime-400 transition-colors ${
              index === imgIndex ? "bg-neutral-700" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

export default TestimonialsDots;
