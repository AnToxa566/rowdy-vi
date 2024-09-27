import Image from "next/image";
import { FC, ReactNode } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  imageSrc: string;
}

export interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="relative z-10 flex items-start gap-2 rounded-xl p-4 transition-shadow shadow-[0px_0px_10px_-2px_#00000040] hover:shadow-[0px_0px_20px_-3px_#00000040]">
      <span className="text-[#e62621] flex-shrink-0">{feature.icon}</span>

      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>

        <Image
          alt="Feature image"
          src={feature.imageSrc}
          width={680}
          height={380}
          className="aspect-[16/9] w-full rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
