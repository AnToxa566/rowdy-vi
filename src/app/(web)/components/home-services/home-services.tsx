import Link from "next/link";

import { Button } from "@nextui-org/react";
import { RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { Service, ServiceCard } from ".";

export const HomeServices = () => {
  const services: Service[] = [
    {
      label: "Чоловіча стрижка",
      imageSrc: "/images/services/haircut.jpeg",
      price: 450,
    },
    {
      label: "Стрижка бороди",
      imageSrc: "/images/services/beard.jpeg",
      price: 350,
    },
    {
      label: "Стрижка + борода",
      imageSrc: "/images/services/haircut_and_beard.jpeg",
      price: 700,
    },
    {
      label: "Гоління",
      imageSrc: "/images/services/shaving.jpeg",
      price: 450,
    },
    {
      label: "Дитяча стрижка",
      imageSrc: "/images/services/kids_haircut.jpeg",
      price: 450,
    },
    {
      label: "Камуфляж сивини",
      imageSrc: "/images/services/gray_hair_coloring.jpeg",
      price: 450,
    },
    {
      label: "Довге волосся",
      imageSrc: "/images/services/long-hair.jpeg",
      price: 500,
    },
    {
      label: "Укладка волосся",
      imageSrc: "/images/services/hair-styling.jpg",
      price: 100,
    },
    {
      label: "Воск",
      imageSrc: "/images/services/wax.jpeg",
      price: 150,
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            ПОСЛУГИ
          </h2>

          <Link href={AppLink.ALTEGIO_SERVICES} target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              className="bg-[#e62621]"
            >
              Дивитися всі
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 overflow-x-scroll">
          {services.map((service) => (
            <ServiceCard key={service.label} service={service} />
          ))}
        </div>

        <Link
          href={AppLink.ALTEGIO_SERVICES}
          target="_blank"
          className="w-full md:w-auto md:mx-auto"
        >
          <Button
            color="primary"
            radius="full"
            size="lg"
            endContent={<RiArrowRightLine />}
            className="bg-[#e62621] w-full"
          >
            Вибрати послугу
          </Button>
        </Link>
      </div>
    </section>
  );
};
