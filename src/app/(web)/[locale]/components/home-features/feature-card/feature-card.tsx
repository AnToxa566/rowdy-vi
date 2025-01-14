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
    <div className="relative overflow-hidden rounded-xl transition-shadow shadow-[0px_0px_12px_3px_#00000040] hover:shadow-[0px_0px_24px_6px_#00000040]">
      <Image
        alt="Feature image"
        src={feature.imageSrc}
        width={400}
        height={150}
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-65"></div>

      <div className="relative z-20 p-4 flex gap-2 items-start">
        <span className="text-[#e62621] flex-shrink-0">{feature.icon}</span>

        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="font-medium">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};
