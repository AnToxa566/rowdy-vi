import Link from "next/link";

import { Button } from "@nextui-org/react";

import { AppLink } from "@/common/enums";

import { Master, MasterCard } from ".";

export const HomeMasters = () => {
  const masters: Master[] = [
    {
      imageSrc: "/images/masters/waiting.jpg",
      name: "Олег",
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/_barber_marcus_1337/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2222922",
    },
    {
      imageSrc: "/images/masters/waiting.jpg",
      name: "Роман",
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/rg.ruslanovich/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2231976",
    },
    {
      imageSrc: "/images/masters/waiting.jpg",
      name: "Максим",
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/maxim.tsirylnik/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2231978",
    },
    {
      imageSrc: "/images/masters/waiting.jpg",
      name: "Ліза",
      graduation: "Tob Barber",
      instagramLink: "https://www.instagram.com/ewaitingbaydak_/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2231977",
    },
  ];

  return (
    <section className="py-10 px-4 bg-black text-white">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            МАЙСТРИ
          </h2>

          <Link href={AppLink.ALTEGIO_MASTERS} target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              className="bg-[#e62621]"
            >
              Вибрати майстра
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 overflow-x-scroll">
          {masters.map((master, idx) => (
            <MasterCard key={idx} master={master} />
          ))}
        </div>
      </div>
    </section>
  );
};
