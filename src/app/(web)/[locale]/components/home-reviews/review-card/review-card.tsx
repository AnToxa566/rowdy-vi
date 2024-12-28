import { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import { AppLink } from "@/common/enums";

export interface ReviewCardProps {
  imageSrc: string;
}

export const ReviewCard: FC<ReviewCardProps> = ({ imageSrc }) => {
  return (
    <Link
      target="_blank"
      href={AppLink.INSTAGRAM_REVIEWS} 
      className="rounded-xl overflow-hidden aspect-[9/16] block"
    >
      <Image
        unoptimized
        width={500}
        height={600}
        src={imageSrc}
        alt="Відгук з Instagram профілю Rowdy Barbershop"
        className="w-full h-full object-cover"
      />
    </Link>
  );
};
