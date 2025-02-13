"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

interface SectionTitleProps {
  id: number;
  sectionTitle: string;
}

interface FaqProps {
  id: number;
  question: string;
  answer: string;
}

interface FaqInfoProps {
  data: {
    id: number;
    __component: string;
    sectionTitle: SectionTitleProps;
    faq: FaqProps[];
  };
}

const FaqSection = ({ data }: Readonly<FaqInfoProps>) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  // const [activeQuestion, setActiveQuestion] = useState(false);

  const accordionQuestion = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -180,
    },
  };

  if (!data || !data.faq || !data.sectionTitle) {
    return <div>No FAQ data available</div>;
  }
  console.dir(data, { depth: null });

  return (
    <>
      <div className="py-[75px] bg-[#F8F8F8]">
        <div className="mx-auto max-sm:px-3 lg:max-w-7xl">
          <h3 className="pb-4 text-center font-lora text-2xl font-semibold">
            {data.sectionTitle.sectionTitle}
          </h3>
          <div className="flex flex-col gap-4">
            {data.faq.map((question, index) => (
              <div key={index}>
                <button
                  key={question.id}
                  className="w-full text-left text-xl focus:outline-none py-5 px-8 rounded-2xl shadow-lg flex justify-between items-center bg-white"
                  onClick={
                    () =>
                      setActiveQuestion(
                        activeQuestion === question.id ? null : question.id
                      )
                    // setActiveQuestion(!activeQuestion)
                  }
                >
                  {question.question}
                  <motion.div
                    className="p-3 bg-slate-200 rounded-full"
                    variants={accordionQuestion}
                    animate={
                      activeQuestion === question.id ? "opened" : "closed"
                    }
                  >
                    <FaAngleDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeQuestion === question.id && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        // paddingRight: "2rem",
                        // paddingLeft: "2rem",
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                      className="text-lg px-8"
                    >
                      {question.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
