import { AppLink } from "@/common/enums";
import { Button } from "@nextui-org/react";
import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export const HomeAbout = () => {
  return (
    <section className="py-10 px-4 bg-black text-white" id="about">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          ПРО НАС
        </h2>

        <div className="flex items-center justify-between gap-8 flex-col lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <p className="text-lg font-medium">
              Вітаємо у <b>Rowdy Barbershop</b>, вашому вірному спутнику на
              шляху до ідеального образу! Наш барбершоп - це не просто місце для
              стрижки, це справжній храм чоловічої краси та стилю в самому серці{" "}
              <b>Запоріжжя</b>.
            </p>

            <p className="font-light">
              Наші досвідчені барбери - майстри{" "}
              <b className="font-semibold">чоловічих стрижок</b>,{" "}
              <b className="font-semibold">бородатого</b> дизайну та
              професійного <b className="font-semibold">гоління</b>. Вони завжди
              готові втілити будь-яку вашу задуму в реальність та додати вашому
              образу неповторного шарму.
            </p>

            <p className="font-light">
              Також ви можете насолодитися послугою{" "}
              <b className="font-semibold">фарбування сивини</b>, яка зробить
              ваш вигляд молодшим і стильнішим. А завершить образ ідеальна{" "}
              <b className="font-semibold">укладка волосся</b>, яка підкреслить
              вашу індивідуальність та стиль.
            </p>

            <p className="font-light">
              <b className="font-semibold">Rowdy Barbershop</b> - це не просто
              чоловіча перукарня, це місце, де кожен чоловік може відчути себе
              справжнім джентльменом. Запрошуємо до нас і переконайтеся в цьому
              особисто!
            </p>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Button
                color="primary"
                radius="full"
                size="lg"
                endContent={<RiArrowRightLine />}
                className="bg-[#e62621] w-full md:w-auto"
              >
                Онлайн запис
              </Button>
            </Link>
          </div>

          <div className="lg:w-1/2">
            <Image
              unoptimized
              width={630}
              height={470}
              src="/images/about/hero.jpg"
              alt=""
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
