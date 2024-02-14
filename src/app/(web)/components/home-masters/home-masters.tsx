import Link from "next/link";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { RiInformationLine } from "@remixicon/react";

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

        <Popover showArrow offset={10} placement="bottom" backdrop="blur">
          <PopoverTrigger>
            <Button
              radius="full"
              color="primary"
              className="bg-[#e62621] mx-auto"
              startContent={<RiInformationLine size={18} />}
            >
              <span className="hidden md:flex gap-1">
                Чим відрізняється
                <span className="font-bold">Top Barber</span> від
                <span className="font-bold">Expert&apos;а?</span>
              </span>

              <span className="md:hidden flex gap-1">
                <span className="font-bold">Top Barber</span> vs
                <span className="font-bold">Expert</span>
              </span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="max-w-[600px] flex flex-col gap-2 text-left items-start p-4">
            <p>
              У нашому барбершопі є дві категорії майстрів:{" "}
              <b className="text-[#e62621]">Expert</b> та{" "}
              <b className="text-[#e62621]">Top Barber.</b>
            </p>

            <p>
              <b className="text-[#e62621]">Expert</b> - це досвідчені майстри з
              багаторічним стажем та великою клієнтською базою, які пропонують
              високий рівень послуг.
            </p>

            <p>
              <b className="text-[#e62621]">Top Barber</b> - це такі ж самі
              професіонали своєї справи як і експерти, але за рахунок меншого
              стажу, вони мають меншу клієнтську базу, і тому за рахунок
              доступних цін, ми допомагаємо майстру знайти свого клієнта, а
              клієнту свого майстра.
            </p>

            <p>
              <b className="text-[#e62621]">
                І запам&apos;ятайте - незалежно від того, до кого ви запишитесь,
                ви завжди отримаєте сервіс та результат на вищому рівні!
              </b>
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
};
