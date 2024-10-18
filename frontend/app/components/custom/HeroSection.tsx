import Image from "next/image";
import CtaButton from "../Buttons/CtaButton";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface CtaProps {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface LogoGridProps {
  id: number;
  text: string;
  image: ImageProps;
}

interface IHeroProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: ImageProps;
    cta: CtaProps;
    logoGrid: LogoGridProps[];
  };
}

const HeroSection = ({ data }: Readonly<IHeroProps>) => {
  const { heading, subHeading, cta, image, logoGrid } = data;
  console.dir(data, { depth: null });
  console.log(image.url);
  return (
    <div className="py-10 flex h-[full] items-center justify-between mx-auto px-16 max-sm:px-3 lg:max-w-6xl rounded-3xl bg-slate-100">
      <div className="z-10 W-1/2 max-w-lg flex flex-col gap-y-5">
        <h1 className="text-4xl font-bold text-neutral-800">{heading}</h1>
        <h3 className="text-lg text-neutral-600">{subHeading}</h3>
        <div className="flex items-center gap-4">
          {logoGrid.map((logo) => (
            <div className="" key={logo.id}>
              <Image
                src={`http://localhost:1337${logo.image.url}`}
                alt={`http://localhost:1337${logo.image.alternativeText}`}
                className="object-contain"
                height={0}
                width={0}
                style={{ width: "auto", height: "17px" }}
              />
            </div>
          ))}
        </div>
        <div className="">
          <CtaButton cta={cta} />
        </div>
      </div>
      <div className="relative w-1/2 flex justify-end">
        <div className="relative w-{340px} h-{300px}">
          <Image
            src={`http://localhost:1337${image.url}`}
            alt={`http://localhost:1337${image.alternativeText}`}
            className="object-cover rounded-xl"
            layout="intrinsic"
            width={320}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
