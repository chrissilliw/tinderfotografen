import React from "react";

interface SectionTitleProps {
  id: number;
  sectionTitle: string;
}

interface CardProps {
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

interface CardInfoProps {
  data: {
    id: number;
    __component: string;
    sectionTitle: SectionTitleProps;
    howItWorks_card: CardProps[];
    readMore: ReadMoreProps;
  };
}

const StepByStepSection = ({ data }: Readonly<CardInfoProps>) => {
  if (!data || !data.sectionTitle || !data.howItWorks_card || !data.readMore) {
    return <div>No Step By Step data available</div>;
  }
  return (
    <>
      <div className="my-20 mx-auto max-sm:px-3 lg:max-w-6xl">
        <h2 className="pb-4 text-center font-lora text-2xl font-semibold bg-white">
          {data.sectionTitle.sectionTitle}
        </h2>
        <div className="flex justify-between gap-20 w-full">
          {data.howItWorks_card.map((card, index) => (
            <div
              className="flex-col flex-grow flex-1 min-w-[250px] aspect-[3/4] bg-[#F3F3F3] p-6 rounded-lg"
              key={card.id}
            >
              <div className="flex justify-center items-center w-5 h-5 p-5 mb-10 bg-slate-200 rounded-full">
                <span>{++index}</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="w-[140px] h-[140px] bg-slate-200 rounded-full"></div>
                <div className="flex flex-col items-center text-center gap-2">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="px-3">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StepByStepSection;
