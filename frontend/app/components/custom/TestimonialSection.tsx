"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import TestimonialsDots from "./TestimonialsDots";

interface TestimonialProps {
  id: number;
  text: string;
  title: string;
}

interface SectionTitleProps {
  id: number;
  sectionTitle: string;
}

interface TestimonialSectionProps {
  data: {
    id: number;
    __component: string;
    sectionTitle: SectionTitleProps;
    testimonial: TestimonialProps[];
  };
}

const DRAG_BUFFER = 50;
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const TestimonialSection = ({ data }: Readonly<TestimonialSectionProps>) => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);
  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragXProgress.set(latest);
    } else {
      dragXProgress.set(0);
    }
  });
  const numberOfTestimonials = data.testimonial.length;

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();

      if (x === 0) {
        setImgIndex((prevValue) => {
          if (prevValue === numberOfTestimonials - 1) {
            return 0;
          }
          return prevValue + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < numberOfTestimonials - 1) {
      setImgIndex((prevValue) => prevValue + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prevValue) => prevValue - 1);
    }
  };

  console.log(dragX);

  return (
    <>
      <div className="py-[75px] bg-[#F8F8F8]">
        <h2 className="text-center font-lora text-2xl font-semibold">
          {data.sectionTitle.sectionTitle}
        </h2>
        <div className="pb-[0px] relative flex flex-col justify-center min-h-[450px] overflow-x-hidden">
          {/* <h2 className=" mt-0 mb-0 text-center">
          {data.sectionTitle.sectionTitle}
        </h2> */}
          <div
            className="absolute bottom-0 left-0 w-[250px] h-full z-10"
            style={{
              background:
                "linear-gradient(to right, #F8F8F8 30%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-[250px] h-full z-10"
            style={{
              background:
                "linear-gradient(to left, #F8F8F8 30%, transparent 100%)",
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="relative pt-10 mx-auto w-1/2 min-h-[400px] bg-[#F3F3F3] rounded-[50px]">
              <div className="absolute top-10 right-[60px]">
                <Image
                  src="/images/QuoteLeft.png"
                  alt="Quote Left"
                  className="object-cover"
                  height={70}
                  width={70}
                  // layout="intrinsic"
                  // style={{ width: "30", height: "auto" }}
                />
              </div>
              <div className="absolute bottom-20 left-10">
                <Image
                  src="/images/QuoteRight.png"
                  alt="Quote Left"
                  className="object-cover"
                  height={50}
                  width={50}
                  // layout="intrinsic"
                  // style={{ width: "30", height: "auto" }}
                />
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <TestimonialsDots
                  imgIndex={imgIndex}
                  setImgIndex={setImgIndex}
                  data={data.testimonial}
                />
              </div>
            </div>
          </div>
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${imgIndex * 100}%`,
            }}
            transition={{
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 50,
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="flex h-full cursor-grab active:cursor-grabbing z-1"
          >
            {data.testimonial.map((testimonial) => (
              <div
                className="relative flex-shrink-0 flex justify-center items-center w-[100%] h-full opacity-90"
                key={testimonial.id}
              >
                <div className="flex-col px-8 py-8 w-[350px] h-fit bg-white rounded-lg shadow-xl">
                  <p className="">{testimonial.text}</p>
                  <p className="mt-3 text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
