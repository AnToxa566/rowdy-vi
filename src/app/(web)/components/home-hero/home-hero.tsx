import Link from "next/link";
import Image from "next/image";

import { Button, Card, CardBody } from "@nextui-org/react";
import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiMapPinLine,
} from "@remixicon/react";

import { AppLink, AppPath } from "@/common/enums";

export const HomeHero = () => {
  return (
    <section className="text-white h-screen" id="hero">
      <div className="relative py-8 px-4 h-full z-20">
        <div className="container mx-auto h-full flex items-center">
          <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/2">
            <h1 className="text-2xl lg:text-5xl font-semibold leading-tight">
              <span className="font-black">Rowdy Barbershop</span> - місце, де
              починається ваш стиль
            </h1>

            <h2 className="my-2 lg:text-xl font-light">
              Відчуй Енергію Бунту у Кожній Стрижці 🔥
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link
                href={AppLink.ALTEGIO}
                target="_blank"
                className="w-full md:w-auto"
              >
                <Button
                  color="primary"
                  radius="full"
                  size="lg"
                  endContent={<RiArrowRightLine />}
                  className="bg-[#e62621] w-full"
                >
                  Записатись
                </Button>
              </Link>

              <Link
                href={AppLink.GOOGLE_MAPS}
                target="_blank"
                className="w-full md:w-auto"
              >
                <Button
                  radius="full"
                  size="lg"
                  variant="bordered"
                  startContent={<RiMapPinLine />}
                  className="text-white w-full"
                >
                  Ми на карті
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-1/2 relative hidden lg:block">
            <Link href={AppLink.ALTEGIO} target="_blank">
              <Card className="absolute bottom-[150px] left-[220px] animate-[levitate_10s_ease_infinite] hover:bg-gray-100">
                <CardBody>
                  <p className="whitespace-nowrap">👨 Чоловіча стрижка</p>
                </CardBody>
              </Card>
            </Link>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Card className="absolute bottom-[80px] left-[50px] animate-[levitate_7s_ease_infinite] hover:bg-gray-100">
                <CardBody>
                  <p className="whitespace-nowrap">🧔‍♂️ Стрижка бороди</p>
                </CardBody>
              </Card>
            </Link>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Card className="absolute bottom-[60px] left-[350px] animate-[levitate_13s_ease_infinite] hover:bg-gray-100">
                <CardBody>
                  <p className="whitespace-nowrap">👑 Королівське гоління</p>
                </CardBody>
              </Card>
            </Link>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Card className="absolute bottom-[1px] left-[140px] animate-[levitate_17s_ease_infinite] hover:bg-gray-100">
                <CardBody>
                  <p className="whitespace-nowrap">🍼 Дитяча стрижка</p>
                </CardBody>
              </Card>
            </Link>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Card className="absolute top-[20px] left-[330px] animate-[levitate_8s_ease_infinite] hover:bg-gray-100">
                <CardBody>
                  <p className="whitespace-nowrap">🎨 Камуфляж сивини</p>
                </CardBody>
              </Card>
            </Link>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Card className="absolute top-[50px] left-[80px] animate-[levitate_12s_ease_infinite] hover:bg-gray-100">
                <CardBody>
                  <p className="whitespace-nowrap">💆‍♂️ Укладка волося</p>
                </CardBody>
              </Card>
            </Link>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Card className="absolute top-[130px] left-[180px] animate-[levitate_6s_ease_infinite] hover:bg-gray-100">
                <CardBody>
                  <p className="whitespace-nowrap">
                    👃 Видалення волосся воском
                  </p>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <Image
        unoptimized
        width={1200}
        height={800}
        src="/images/barbershop-bg.jpeg"
        alt=""
        className="absolute top-0 left-0 h-screen w-screen object-cover z-0"
      />

      <Link
        href={AppPath.HOME_SERVICES}
        className="absolute bottom-6 left-1/2 z-20 translate-x-[-50%]"
      >
        <Button
          isIconOnly
          radius="full"
          variant="bordered"
          aria-label="Вниз"
          className="text-white animate-bounce"
        >
          <RiArrowDownLine />
        </Button>
      </Link>

      <div className="absolute top-0 h-screen w-screen z-10 bg-black opacity-85"></div>
    </section>
  );
};
