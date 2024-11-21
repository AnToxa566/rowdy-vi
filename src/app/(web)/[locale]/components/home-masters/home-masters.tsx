import { useTranslations } from "next-intl";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { RiInformationLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { SectionTitle } from "../section-title";
import { SectionContainer } from "../section-container";

import { Master, MasterCard } from ".";

export const HomeMasters = () => {
  const t = useTranslations("home.masters");

  const masters: Master[] = [
    {
      imageSrc: "/images/masters/oleg.jpg",
      name: t("oleg"),
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/barber_marcus_1337/",
      altegioLink:
        "https://b829839.alteg.io/company/778954/personal/select-master?o=m2222922",
    },
    {
      imageSrc: "/images/masters/roma.jpg",
      name: t("roma"),
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/rg.ruslanovich/",
      altegioLink:
        "https://b829839.alteg.io/company/778954/personal/select-master?o=m2231976",
    },
    {
      imageSrc: "/images/masters/maksim.jpg",
      name: t("maksim"),
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/maxim.tsirylnik/",
      altegioLink:
        "https://b829839.alteg.io/company/778954/personal/select-master?o=m2231978",
    },
    {
      imageSrc: "/images/masters/liza.jpg",
      name: t("liza"),
      graduation: "Top Barber",
      instagramLink: "https://www.instagram.com/eliza.baydak/",
      altegioLink:
        "https://b829839.alteg.io/company/778954/personal/select-master?o=m2231977",
    },
  ];

  return (
    <SectionContainer id="masters" isBlackBg>
      <div className="flex flex-col gap-8">
        <SectionTitle
          title={t("title")}
          actionLabel={t("select_master")}
          actionHref={AppLink.ALTEGIO_MASTERS}
        ></SectionTitle>

        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          {masters.map((master, idx) => (
            <MasterCard key={idx} master={master} />
          ))}
        </div>

        <div className="mx-auto">
          <Popover showArrow offset={10} placement="bottom" backdrop="blur">
            <PopoverTrigger>
              <Button
                radius="full"
                color="primary"
                className="bg-[#e62621] mx-auto"
                startContent={<RiInformationLine size={18} />}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw("expert_vs_top_desktop_HTML"),
                  }}
                  className="hidden md:flex gap-1"
                ></span>

                <span className="md:hidden flex gap-1">
                  <span className="font-bold">Top Barber</span> vs
                  <span className="font-bold">Expert</span>
                </span>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="max-w-[600px] flex flex-col gap-2 text-left items-start p-4">
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_01"),
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_02"),
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_03"),
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_04"),
                }}
              ></p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </SectionContainer>
  );
};
