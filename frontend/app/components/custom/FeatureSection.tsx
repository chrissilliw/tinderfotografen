import Image from "next/image";
import Link from "next/link";

interface IconProps {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface ReadMoreProps {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface FeatureProps {
  id: number;
  title: string;
  text: string;
  icon: IconProps;
}

interface InfoColumnProps {
  id: number;
  feature: FeatureProps;
  readMore: ReadMoreProps;
}

interface IFeatureSectionProps {
  data: {
    infoColumn: InfoColumnProps[];
  };
}

const FeatureSection = ({ data }: Readonly<IFeatureSectionProps>) => {
  if (!data || !data.infoColumn) {
    return <div>No feature data available</div>;
  }
  console.dir(data, { depth: null });
  return (
    <div className="my-20 mx-auto max-sm:px-3 lg:max-w-7xl">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col items-start gap-2 w-[350px]">
            <Image
              src={`http://localhost:1337${data.infoColumn[0].feature.icon.url}`}
              alt={`http://localhost:1337${data.infoColumn[0].feature.icon.alternativeText}`}
              className="object-contain"
              height={0}
              width={0}
              style={{ width: "auto", height: "40px" }}
            />
            <h3 className="text-lg font-semibold">
              {data.infoColumn[0].feature.title}
            </h3>
            <p>{data.infoColumn[0].feature.text}</p>
            <Link className="font-bold" href={data.infoColumn[0].readMore.href}>
              {data.infoColumn[0].readMore.text}
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2 w-[350px]">
            <Image
              src={`http://localhost:1337/${data.infoColumn[1].feature.icon.url}`}
              alt={`http://localhost:1337${data.infoColumn[1].feature.icon.alternativeText}`}
              className="object-contain"
              height={0}
              width={0}
              style={{ width: "auto", height: "40px" }}
            />
            <h3 className="text-lg font-semibold">
              {data.infoColumn[1].feature.title}
            </h3>
            <p>{data.infoColumn[1].feature.text}</p>
            <Link className="font-bold" href={data.infoColumn[1].readMore.href}>
              {data.infoColumn[1].readMore.text}
            </Link>
          </div>
        </div>

        <div className="w-[310px] h-[600px] bg-zinc-700 rounded-[48px]"></div>

        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col items-start gap-2 w-[350px]">
            <Image
              src={`http://localhost:1337${data.infoColumn[2].feature.icon.url}`}
              alt={`http://localhost:1337${data.infoColumn[2].feature.icon.alternativeText}`}
              className="object-contain"
              height={0}
              width={0}
              style={{ width: "auto", height: "40px" }}
            />
            <h3 className="text-lg font-semibold">
              {data.infoColumn[2].feature.title}
            </h3>
            <p>{data.infoColumn[2].feature.text}</p>
            <Link className="font-bold" href={data.infoColumn[2].readMore.href}>
              {data.infoColumn[2].readMore.text}
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2 w-[350px]">
            <Image
              src={`http://localhost:1337${data.infoColumn[3].feature.icon.url}`}
              alt={`http://localhost:1337${data.infoColumn[3].feature.icon.alternativeText}`}
              className="object-contain"
              height={0}
              width={0}
              style={{ width: "auto", height: "40px" }}
            />
            <h3 className="text-lg font-semibold">
              {data.infoColumn[3].feature.title}
            </h3>
            <p>{data.infoColumn[3].feature.text}</p>
            <Link className="font-bold" href={data.infoColumn[3].readMore.href}>
              {data.infoColumn[3].readMore.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
